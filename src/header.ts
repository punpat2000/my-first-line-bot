const LINE_HEADER = {
	Authorization: `Bearer ${process.env.CHANNEL_SECRET!}`,
	"Content-Type": "application/json",
};

export default LINE_HEADER;
