import type { Request, Response, NextFunction } from 'express';
import type { WebHookEvent } from '../models/webhook-event.model';

/**
 * Check whether the request contains an empty array. If so, the middleware chain is stopped.
 */
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

export { confirmCommunication };
