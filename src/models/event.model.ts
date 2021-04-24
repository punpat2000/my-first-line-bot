import type { Source } from './source.model';

export enum Type {
	MESSAGE = 'message',
	VIDEO = 'video',
	JOIN = 'join',
}

export enum Mode {
	ACTIVE = 'active',
	STANDBY = 'standby'
}

export interface Event<T extends Source = Source> {
	type: Type,
	mode: Mode,
	timeStamp: number,
	source: T,
}

export interface MessageEvent extends Event {
	type: Type.MESSAGE;
	replyToken: string;
	message: {};
}
