import express from 'express';
import bodyParser from 'body-parser';
import listenToWebhook from './controllers/webhook.controller';
import { middlewares } from './middlewares';

const app = express();
const port = process.env.PORT || 4000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(middlewares);

app.post('/webhook', listenToWebhook);

export { app, port };
