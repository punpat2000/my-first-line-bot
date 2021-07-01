import express from 'express';
import listenToWebhook from './controllers/webhook.controller';
import { middlewares } from './middlewares';

const app = express();
const port = process.env.PORT || 4000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(middlewares);

app.post('/webhook', listenToWebhook);

export { app, port };
