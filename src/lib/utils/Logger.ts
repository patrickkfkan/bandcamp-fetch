export interface Logger {
  info: (msg: string) => void;
  warn: (msg: string) => void;
  debug: (msg: string) => void;
  error: (msg: string) => void;
}

export const NULL_LOGGER: Logger = {
  info: () => {
    return;
  },
  warn: () => {
    return;
  },
  debug: () => {
    return;
  },
  error: () => {
    return;
  }
};

export class WrappedLogger {
  #logger: Logger;

  constructor(logger: Logger) {
    this.#logger = logger;
  }

  set(logger: Logger) {
    this.#logger = logger;
  }

  info(msg: string) {
    this.#logger.info(msg);
  }

  warn(msg: string) {
    this.#logger.warn(msg);
  }

  debug(msg: string) {
    this.#logger.debug(msg);
  }

  error(msg: string) {
    this.#logger.error(msg);
  }
}
