import config from './config';

const LINE_HEADER = {
	Authorization: `Bearer ${config.CHANNEL_ACCESS_TOKEN!}`,
	'Content-Type': 'application/json',
};

export default LINE_HEADER;
