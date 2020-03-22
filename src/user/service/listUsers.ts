import { CoreFunction } from '../../lib/Core';
import { Context } from '../contex';

export interface Input {
  where: ListUsersFilters;
}
export interface ListUsersFilters {
  ids?: string[];
  emails?: string[];
}

export interface Dependencies {
  users: [];
}

export const listUsers: CoreFunction<Context, Input, Output> = async (ctx, input) => {
  return {
    users: [],
  };
};

// export async function listUsers(ctx: Context, input: Input, deps: Dependencies) {
//   return [];
// }
