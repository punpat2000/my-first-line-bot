import express from 'express';
import type { Request, Response } from 'express';
import bodyParser from 'body-parser';
import hmacSHA256 from 'crypto-js/hmac-sha256';
import Base64 from 'crypto-js/enc-base64';
import axios from 'axios';
import { REPLY_URL } from './url';
import LINE_HEADER from './header';

const app = express();
const port = process.env.PORT || 4000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.post('/webhook', async (req: Request, res: Response) => {
	const { body, headers } = req;
	const signature = Base64.stringify(
		hmacSHA256(JSON.stringify(body), process.env.CHANNEL_SECRET!)
	);

	if (signature !== headers['x-line-signature']) {
		return res.status(401).send('Unauthorized');
	}

	console.log('authorized!');

	const reply_token = body.events[0].replyToken;
	try {
		const response = await reply(reply_token);
		res.status(200).send(response.data);
	} catch (err) {
		console.error(err);
		res.sendStatus(400);
	}
});
app.listen(port);

/**
 * @param  {string} Returns any response from LINE reply API.
 */
async function reply(reply_token: string) {
	const body = {
		replyToken: reply_token,
		messages: [
			{
				type: 'text',
				text: 'Hello',
			},
			{
				type: 'text',
				text: 'How are you?',
			},
		],
	};
	return await axios.post(REPLY_URL, body, { headers: LINE_HEADER });
}
