import Bottleneck from 'bottleneck';

export default class Limiter {

  #limiter: Bottleneck;

  constructor() {
    this.#limiter = new Bottleneck({
      maxConcurrent: 5,
      minTime: 200
    });
  }

  updateSettings(options?: Bottleneck.ConstructorOptions) {
    this.#limiter.updateSettings(options);
  }

  schedule<R>(fn: () => PromiseLike<R>): Promise<R> {
    return this.#limiter.schedule(fn);
  }
}
