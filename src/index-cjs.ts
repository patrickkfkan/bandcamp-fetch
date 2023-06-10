import { default as main } from './index.js';
import * as bcfetch from './index.js';

export = Object.assign(main, { ...bcfetch });
