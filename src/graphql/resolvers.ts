import { Resolvers } from './generated/resolvers';
import { Context } from './context';

export const resolvers: Resolvers<Context> = {
  Query: {
    test: async (_, __, ctx) => {
      if (ctx.token === 'asdf') {
        return 'you are logged in';
      }
      return 'you are not logged in';
    },
  },
  Mutation: {
    upsertUser: async (_, args, ctx) => {
      return {
        user: {
          id: '123',
          email: 'test@fake.com',
        },
      };
    },
    login: async (_, args, ctx) => {
      if (args.input.password === 'boggle') {
        ctx.login('asdf');
      }

      return {
        user: {
          id: '123',
          email: 'test@fake.com',
        },
      };
    },
    logout: (_, __, ctx) => {
      ctx.logout();
      return true;
    },
  },
};

//helper to take our domain types that have cursors on them and convert them to GQL "edges"
function toEdges<T extends { cursor?: string }>(tt: T[]): { node: T; cursor?: string }[] {
  return tt.map(t => ({
    node: t,
    cursor: t.cursor,
  }));
}
