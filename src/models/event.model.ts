import type { Source } from './source.model';

type eventType = 'message' | 'video' | 'join';

type Mode = 'active' | 'standy';

export interface Event<T extends Source = Source> {
	type: eventType;
	mode: Mode;
	timeStamp: number;
	source: T;
}

export interface MessageEvent extends Event {
	type: 'message';
	replyToken: string;
	message: {};
}
