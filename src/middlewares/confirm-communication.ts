import type { Request, Response, NextFunction } from 'express';
import type { WebHookEvent } from '../models/webhook-event.model';

const confirmCommunication = (
	req: Request,
	res: Response,
	next: NextFunction
): void => {
	if ((req.body as WebHookEvent).events.length === 0) {
		res.sendStatus(200);
		return;
	}
	next();
};

export default confirmCommunication;