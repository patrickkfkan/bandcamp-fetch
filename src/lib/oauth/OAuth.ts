import { type AxiosInstance, type AxiosResponse } from 'axios';
import { URLSearchParams } from 'node:url';
import type {
  BandcampOAuthLoginParams,
  BandcampOAuthTokenResponse
} from '../types/OAuth.js';
import { URLS } from '../utils/Constants.js';
import { calculateDm, calculatePow } from '../utils/crypto/headers.js';
import { camelizeKeys } from '../utils/Parse.js';

const XBandcampDm: string = 'X-Bandcamp-Dm';
const XBandcampPow: string = 'X-Bandcamp-Pow';

export default class OAuthAPI {
  #dm?: string = '';
  #pow?: string;

  #accessToken?: string;
  #refreshToken?: string;
  #accessTokenExpiresAt?: Date;

  private readonly MAX_LOGIN_ATTEMPTS = 2;

  private readonly RequestedWith: string = 'com.bandcamp.android';
  private readonly ClientId: string = '134';
  private readonly ClientSecret: string =
    '1myK12VeCL3dWl9o/ncV2VyUUbOJuNPVJK6bZZJxHvk=';

  private oauthParams: BandcampOAuthLoginParams;

  private readonly client;

  constructor(
    client: AxiosInstance,
    username: string,
    password: string,
    clientId: string = this.ClientId,
    clientSecret = this.ClientSecret
  ) {
    this.client = client;
    this.setParams(username, password, clientId, clientSecret);
  }

  setParams(
    username: string,
    password: string,
    clientId: string = this.ClientId,
    clientSecret = this.ClientSecret
  ) {
    this.oauthParams = {
      username,
      password,
      clientId,
      clientSecret
    };
  }

  async login(
    oauthParams: BandcampOAuthLoginParams = this.oauthParams
  ): Promise<BandcampOAuthTokenResponse> {
    this.oauthParams = oauthParams;

    for (let i = 0; i < this.MAX_LOGIN_ATTEMPTS; i++) {
      const content = this.#GetLoginParameters();
      const response = await this.#sendRequest(content, URLS.OAUTH.LOGIN);

      const status = response.status;
      if (status === 418 || status === 451) continue;

      if (status < 200 || status >= 300) {
        throw new Error(
          `Response status: ${status} : ${JSON.stringify(response.data) || response.statusText}`
        );
      }

      return camelizeKeys<BandcampOAuthTokenResponse>(response.data);
    }

    throw new Error('Max number of login attempts exceeded.');
  }

  async refresh(): Promise<BandcampOAuthTokenResponse> {
    for (let i = 0; i < this.MAX_LOGIN_ATTEMPTS; i++) {
      const content = this.#GetRefreshParameters();
      const response = await this.#sendRequest(content, URLS.OAUTH.TOKEN);

      const status = response.status;
      if (status === 418 || status === 451) continue;

      if (status < 200 || status >= 300) {
        throw new Error(
          `Response status: ${response.status} : ${JSON.stringify(response.data) || response.statusText}`
        );
      }

      const grantResponse = camelizeKeys<BandcampOAuthTokenResponse>(
        response.data
      );
      this.#refreshToken = grantResponse.refreshToken;
      this.#accessToken = grantResponse.accessToken;
      this.#accessTokenExpiresAt = new Date(
        Date.now() + grantResponse.expiresIn * 1000
      );
      return grantResponse;
    }

    throw new Error('Max number of refresh attempts exceeded.');
  }

  async revoke(): Promise<void> {
    const content = this.#GetRevokeParameters();
    const response = await this.#sendRequest(content, URLS.OAUTH.REVOKE);
    if (!response.data.ok) {
      throw new Error(`Revoke failed! ${JSON.stringify(response.data)}`);
    }
    this.#refreshToken = undefined;
    this.#accessToken = undefined;
  }

  async getAccessToken(): Promise<string> {
    if (
      !this.#accessToken ||
      (this.#accessTokenExpiresAt && new Date() >= this.#accessTokenExpiresAt)
    ) {
      await this.refresh();
    }
    return this.#accessToken!;
  }

  async #sendRequest(
    params: URLSearchParams,
    requestUri: string
  ): Promise<AxiosResponse<BandcampOAuthTokenResponse>> {
    const requestBody = params.toString();

    const headers: Record<string, string> = {
      'Content-Type': 'application/x-www-form-urlencoded',
      'X-Requested-With': this.RequestedWith,
      [XBandcampDm]: calculateDm(this.#dm!, requestBody)
    };

    if (this.#pow != null) {
      headers[XBandcampPow] = calculatePow(this.#pow, requestBody);
    }

    console.debug('Sending headers:', headers);
    console.debug('Request body:', requestBody);

    const response = await this.client.post(requestUri, requestBody, {
      headers,
      validateStatus: (status) => status < 500 // don't throw on 4xx
    });

    // update DM/POW from response headers if present
    const dm = response.headers[XBandcampDm.toLowerCase()];
    if (dm) {
      this.#dm = Array.isArray(dm) ? dm[0] : dm;
      console.debug(`Received ${XBandcampDm} header: ${this.#dm}`);
    }

    const pow = response.headers[XBandcampPow.toLowerCase()];
    if (pow) {
      this.#pow = Array.isArray(pow) ? pow[0] : pow;
      console.debug(`Received ${XBandcampPow} header: ${this.#pow}`);
    }

    if (response.status >= 500) {
      throw new Error(
        `Server error ${response.status}: ${response.statusText}`
      );
    }

    return response;
  }

  #GetLoginParameters() {
    const params = new URLSearchParams();
    params.append('grant_type', 'password');
    params.append('username', this.oauthParams.username);
    params.append('password', this.oauthParams.password);
    params.append('client_id', this.oauthParams.clientId);
    params.append('client_secret', this.oauthParams.clientSecret);
    return params;
  }

  #GetRefreshParameters() {
    if (!this.#refreshToken) throw new Error('No refresh token available.');
    const params = new URLSearchParams();
    params.append('grant_type', 'refresh_token');
    params.append('refresh_token', this.#refreshToken);
    params.append('client_id', this.oauthParams.clientId);
    params.append('client_secret', this.oauthParams.clientSecret);
    return params;
  }

  #GetRevokeParameters() {
    if (!this.#refreshToken) throw new Error('No refresh token available.');
    const params = new URLSearchParams();
    params.append('refresh_token', this.#refreshToken);
    params.append('client_id', this.oauthParams.clientId);
    params.append('client_secret', this.oauthParams.clientSecret);
    return params;
  }
}
