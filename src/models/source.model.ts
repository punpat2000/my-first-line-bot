export interface Source {
	type: 'user' | 'group' | 'room';
	userId: string;
}

export interface UserSource extends Source {
	type: 'user',
}

export interface GroupSource extends Source {
	type: 'group',
	groupId: string,
}

export interface RoomSource extends Source {
	type: 'room',
	roomId: string,
}