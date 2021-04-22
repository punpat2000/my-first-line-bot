import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import LINE_HEADER from "./header";
import hmacSHA256 from "crypto-js/hmac-sha256";
import Base64 from "crypto-js/enc-base64";
import axios from "axios";
import { REPLY_URL } from "./url";

const app = express();
const port = process.env.PORT || 4000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.post("/webhook", async (req: Request, res: Response) => {
	const { body, headers } = req;
	const signature = Base64.stringify(
		hmacSHA256(JSON.stringify(body), process.env.CHANNEL_SECRET!)
	);

	if (signature !== headers["x-line-signature"]) {
		return res.status(401).send("Unauthorized");
	}

	const reply_token = body.events[0].replyToken;
	const response = await reply(reply_token);
	res.status(200).send(response);
});
app.listen(port);

async function reply(reply_token: string) {
	const body = {
		replyToken: reply_token,
		messages: [
			{
				type: "text",
				text: "Hello",
			},
			{
				type: "text",
				text: "How are you?",
			},
		],
	};
	return await axios.post(REPLY_URL, body, { headers: LINE_HEADER });
}
