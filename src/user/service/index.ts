import { listUsers } from './listUsers';
import { upsertUser } from './upsertUser';
import { validateUserCredentials } from './validateUserCredentials';
import { wrapWith } from '../../lib/Core';
import { logger } from '../../logger';

const core = {
  listUsers,
  upsertUser,
  validateUserCredentials,
};
export interface LoggingWrapperOptions {
  prefix?: string;
}
export function newLoggingWrapper({ prefix = '' }: LoggingWrapperOptions = {}) {
  return (ctx, input, next, { coreFunctionName }) => {
    logger.debug({ input }, `${prefix} ${coreFunctionName} invoked`);
    return next(ctx, input);
  };
}

export const userService = wrapWith(core, newLoggingWrapper({ prefix: 'user service' }));
