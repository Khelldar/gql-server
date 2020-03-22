import { CoreFunction } from '../../lib/Core';
import { Context } from '../contex';

export interface Input {
  where: ListUsersFilters;
}
export interface ListUsersFilters {
  ids?: string[];
  emails?: string[];
}

export interface Output {
  users: User[];
}

export const listUsers: CoreFunction<Context, Input, Output> = async (ctx, input) => {
  return {
    users: [],
  };
};
