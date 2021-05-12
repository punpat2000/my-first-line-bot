// import axios, { AxiosRequestConfig } from 'axios';
// import { PUSH_API } from '../api/endpoints';
// import config from '../config/config';

// export default class Client {
// 	public pushMessage(
// 		to: string,
// 		messages: [],
// 		notificationDisabled: boolean = false
// 	) {
// 		axios.post(PUSH_API, {
// 			to,
// 			messages,
// 			notificationDisabled,
// 		},
//     {
//       'Content-Type': 'application/json',
//       Authorization: `Bearer ${config.CHANNEL_ACCESS_TOKEN!}`
//     });
// 	}

//   private generateRequestConfig(): Partial<AxiosRequestConfig> {
//     const config: Partial<AxiosRequestConfig> = { headers: {} };
//     if (this.requestOption.retryKey) {
//       config.headers["X-Line-Retry-Key"] = this.requestOption.retryKey;
//     }

//     // clear requestOption
//     this.requestOption = {};
//     return config;
//   }
// }
