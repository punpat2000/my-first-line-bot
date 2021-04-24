import hmacSHA256 from 'crypto-js/hmac-sha256';
import Base64 from 'crypto-js/enc-base64';
import type { Request, Response, NextFunction } from 'express';
import config from '../config/config';

const validateSignature = (
	req: Request,
	res: Response,
	next: NextFunction
): void => {
	const { body, headers } = req;
	const signature = Base64.stringify(
		hmacSHA256(JSON.stringify(body), config.CHANNEL_SECRET!)
	);

	if (signature !== headers['x-line-signature']) {
		res.status(403).send('Unauthorized');
		throw new Error('Unauthorized');
	}

	console.log('authorized!');
	next();
};

export default validateSignature;
