// jest.config.ts
import type {Config} from '@jest/types';

// Sync object
const config: Config.InitialOptions = {
  verbose: true,
};

// Or async function
// eslint-disable-next-line import/no-anonymous-default-export
const OptionFunc = async(): Promise<Config.InitialOptions> => {
  return {
    verbose: true,
  };
};

module.exports = {
  config,
  OptionFunc
}