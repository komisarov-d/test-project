import Knex from 'knex';
import cors from 'cors';
import { Model } from 'objection';
import bodyParser from 'body-parser';
import passport from 'passport';
import express, { Express, RequestHandler } from 'express';
import path from 'path';
import knexConfig from '../knexfile';
import routes from './api/routes';
import { errorHandlerMiddleware } from './api/middlewares';
import { AppEnvironment } from './common/enums';

import './config/passportConfig';

const knex = Knex(knexConfig[process.env.NODE_ENV || AppEnvironment.DEVELOPMENT]);

Model.knex(knex);

const app: Express = express();

app.use(bodyParser.json() as RequestHandler);
app.use(bodyParser.urlencoded({ extended: true }) as RequestHandler);

app.use(cors());

app.use('/api/v1/', routes);
app.use(passport.initialize());
app.use(errorHandlerMiddleware);

app.use(express.static(path.join(__dirname, '../public')));

app.on('close', async () => {
	await knex.destroy();
});

export default app;
