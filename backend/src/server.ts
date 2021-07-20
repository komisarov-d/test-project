import swaggerUi from 'swagger-ui-express';
import { Request, Response } from 'express';
import path from 'path';

import { env } from './env';
import app from './app';
import { connect } from './services/chatService';

const SwaggerParser = require('swagger-parser');

const socketIO = require('socket.io');

const { port } = env.app;

/* eslint-disable no-console */

new SwaggerParser().dereference('./src/swagger/swagger.yaml', (err: any, api: any) => {
	if (err) throw err;

	const applicationPort = process.env.port || port;

	app.use('/swagger', swaggerUi.serve, swaggerUi.setup(api));
	app.use('/*', (_req: Request, res: Response) => res.sendFile(path.join(__dirname, '../public', 'index.html')));

	const server = app.listen(applicationPort, () => {
		console.log(`Server is running at ${applicationPort}.`);
	});

	const io = socketIO(server, {
		cors: true,
		origins: ['localhost:3000']
	});

	io.on('connection', (socket: any) => connect(io, socket));
});

/* eslint-enable no-console */
