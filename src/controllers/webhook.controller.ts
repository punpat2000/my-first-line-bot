import type { Request, Response } from 'express';
import axios from 'axios';
import { REPLY_API } from '../api/endpoints';
import LINE_HEADER from '../config/header';
import type { WebHookEvent } from '../models/webhook-event.model';
import type { MessageEvent } from '../models/event.model';
import { toBinary } from '../utils';

const listenToWebhook = async (req: Request, res: Response) => {
	const body = req.body as WebHookEvent<MessageEvent>;
	const event = body.events[0];
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
				text: toBinary((event.message as any).text as string),
			},
			// {
			// 	type: 'text',
			// 	text: JSON.stringify(bo),
			// },
		],
	};
	return await axios.post(REPLY_API, body, { headers: LINE_HEADER });
}

export default listenToWebhook;
