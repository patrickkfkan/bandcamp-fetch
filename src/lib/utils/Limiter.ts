import Bottleneck from 'bottleneck';

const _limiter = new Bottleneck({
  maxConcurrent: 5,
  minTime: 200
});

export default class Limiter {
  static updateSettings(options?: Bottleneck.ConstructorOptions) {
    _limiter.updateSettings(options);
  }

  static schedule<R>(fn: () => PromiseLike<R>): Promise<R> {
    return _limiter.schedule(fn);
  }
}
