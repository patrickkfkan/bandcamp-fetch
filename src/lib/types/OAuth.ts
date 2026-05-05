export type BandcampOAuthLoginParams = {
  clientId: string;
  clientSecret: string;
  password: string;
  username: string;
};

export type BandcampOAuthRefreshParams = {
  refeshToken: string;
  clientId: string;
  clientSecret: string;
}

export interface BandcampOAuthTokenResponse {
  accessToken: string;
  expiresIn: number;
  ok: boolean;
  refreshToken: string;
  tokenType: string;
}
