import type { Request, Response } from 'express';
import axios from 'axios';
import { REPLY_URL } from '../api/url';
import LINE_HEADER from '../config/header';
import type { MessageEvent } from '../models/webhook-event.model';

export const listenToWebhook = async (req: Request, res: Response) => {
	const { body } = req;
	const reply_token = (body.events[0] as MessageEvent).replyToken;
	try {
		const response = await reply(reply_token);
		res.status(200).send(response.data);
	} catch (err) {
		console.error(err);
		res.sendStatus(400);
	}
};

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
