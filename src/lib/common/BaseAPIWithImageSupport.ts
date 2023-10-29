import ImageAPI from '../image/ImageAPI.js';
import BaseAPI, { BaseAPIParams } from './BaseAPI.js';

export interface BaseAPIWithImageSupportParams extends BaseAPIParams {
  imageAPI: ImageAPI;
}

export default abstract class BaseAPIWithImageSupport extends BaseAPI {

  #imageAPI: ImageAPI;

  constructor(params: BaseAPIWithImageSupportParams) {
    super(params);
    this.#imageAPI = params.imageAPI;
  }

  get imageAPI() {
    return this.#imageAPI;
  }
}
