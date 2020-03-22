import { CoreFunction } from '../../lib/Core';
import { Context } from '../contex';

export interface Input {
  id?: string;
  email?: string;
  password?: string;
}
export interface Output {
  user: User;
}

export const upsertUser: CoreFunction<Context, Input, Output> = async (ctx, input) => {
  return {
    user: {
      id: 'asdf',
      email: 'asdf',
    },
  };
};
