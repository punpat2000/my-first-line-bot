import express from 'express';
import bodyParser from 'body-parser';
import listenToWebhook from './controllers/webhook.controller';
import validateSignature from './middlewares/validate-signature';
import confirmCommunication from './middlewares/confirm-communication';
import validateRequest from './middlewares/validate-request';

const app = express();
const port = process.env.PORT || 4000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(validateSignature);
app.use(confirmCommunication);
app.use(validateRequest);

app.post('/webhook', listenToWebhook);

export { app, port };
