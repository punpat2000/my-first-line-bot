import type { Request, Response } from 'express';
import axios from 'axios';
import { REPLY_URL } from '../api/url';
import LINE_HEADER from '../config/header';
import type { WebHookEvent } from '../models/webhook-event.model';
import type { MessageEvent } from '../models/event.model';

const listenToWebhook = async (req: Request, res: Response) => {
	const body = req.body as WebHookEvent;

	if (body.events.length === 0) {
		res.sendStatus(200);
		return;
	}

	const event = body.events[0] as MessageEvent;
	try {
		const response = await reply(event);
		res.status(200).send(response.data);
	} catch (err) {
		console.error(err);
		res.sendStatus(400);
	}
};

/**
 * @param  {string} Returns any response from LINE reply API.
 */
async function reply(event: MessageEvent) {
	const body = {
		replyToken: event.replyToken,
		messages: [
			{
				type: 'text',
				text: ((event.message as any).text as string)
					.split('')
					.reverse()
					.join(''),
			},
		],
	};
	return await axios.post(REPLY_URL, body, { headers: LINE_HEADER });
}

export default listenToWebhook;
