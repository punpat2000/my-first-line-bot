export interface webHookEvent {
	destination: string;
	events: Event[];
}

export interface Event {
	type: 'message' | 'video' | 'join';
	mode: 'active' | 'standby';
	timeStamp: number;
	source: Source;
}

export interface MessageEvent extends Event {
	type: 'message';
	replyToken: string;
	message: {};
}

export interface Source {
	type: 'user' | 'group';
	userId: string;
}

export interface UserSource extends Source {
	type: 'user';
}

export interface GroupSource extends Source {
	type: 'group';
	roomId: string;
}
