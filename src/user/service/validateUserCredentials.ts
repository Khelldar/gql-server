import { CoreFunction } from '../../lib/Core';
import { Context } from '../contex';

export interface Input {
  email: string;
  password: string;
}
export interface Output {
  user: User;
  token: string;
}

export const validateUserCredentials: CoreFunction<Context, Input, Output> = async (
  ctx,
  input
) => {
  return {
    user: {
      id: 'asdf',
      email: 'asdf',
    },
    token: 'asdf',
  };
};
