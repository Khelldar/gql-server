import * as express from 'express';
import * as cookieParser from 'cookie-parser';

import { logger } from './logger';
import { CONFIG } from './config';
import { server } from './GraphQL';

(async () => {
  logger.info({ CONFIG }, 'starting up!');

  // await migrate();

  const app = express();

  app.use(cookieParser());
  server.applyMiddleware({ app, path: '/graphql' });

  app.listen({ port: CONFIG.PORT }, () => {
    logger.info(`gql-server listening at :${CONFIG.PORT}...`);
  });
})();
