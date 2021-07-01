import type { Request, Response, NextFunction } from 'express';

/**
 * Check whether the request contains an empty array. If so, the middleware chain is stopped.
 */
const validateRequest = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const isInvalid = typeof req.body.events[0].message.text === 'undefined';
  if (isInvalid) {
    res.sendStatus(200);
    return;
  }
  next();
};

export { validateRequest };
