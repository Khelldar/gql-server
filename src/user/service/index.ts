import { listUsers } from './listUsers';
import { upsertUser } from './upsertUser';
import { validateUserCredentials } from './validateUserCredentials';
import { wrapWith, WrapperFunction } from '../../lib/Core';
import { logger } from '../../logger';

const core = {
  listUsers,
  upsertUser,
  validateUserCredentials,
};

const loggingWrapper: WrapperFunction = (ctx, input, next, { coreFunctionName }) => {
  logger.debug({ input }, ``);
  return next(ctx, input);
};

export const userService = wrapWith(core, loggingWrapper);
