const LINE_HEADER = {
	Authorization: `Bearer ${process.env.CHANNEL_ACCESS_TOKEN!}`,
	'Content-Type': 'application/json',
};

export default LINE_HEADER;
