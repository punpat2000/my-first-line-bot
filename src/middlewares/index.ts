import { confirmCommunication } from './confirm-communication';
import { validateRequest } from './validate-request';
import { validateSignature } from './validate-signature';

export * from './confirm-communication';
export * from './validate-request';
export * from './validate-signature';

export const middlewares = [
  validateRequest,
  validateSignature,
  confirmCommunication,
];
