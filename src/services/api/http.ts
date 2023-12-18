import axios, { AxiosInstance } from 'axios';

export default class HttpRequest {
	private axiosInstance: AxiosInstance;
	private token = localStorage.getItem('rm-checkpoint');
	constructor() {
		this.axiosInstance = axios.create({
			baseURL: process.env.REACT_APP_API_URL,
			headers: {
				Authorization: `Bearer ${this.token}`,
			},
		});
	}

	// private requestSettting() {
	//   this.axiosInstance.interceptors.request.use(
	//     (config: AxiosRequestConfig): AxiosRequestConfig => {
	//       config.headers = {
	//         Authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
	//       };
	//       return config;
	//     },
	//     (error: AxiosError): Promise<AxiosError> => {
	//       return Promise.reject(error);
	//     },
	//   );
	// }

	public async get<T>(endPoint: string, params?: object): Promise<T> {
		try {
			const response = await this.axiosInstance.get<T>(endPoint, params);
			return response.data;
		} catch (error) {
			console.error('error', error);
			throw error;
		}
	}

	public async post<T>(endPoint: string, body?: object): Promise<T> {
		try {
			const response = await this.axiosInstance.post<T>(endPoint, body);
			return response.data;
		} catch (error) {
			console.error('error', error);
			throw error;
		}
	}

	public async patch<T>(endPoint: string, body?: object): Promise<T> {
		try {
			const response = await this.axiosInstance.patch<T>(endPoint, body);
			return response.data;
		} catch (error) {
			console.error('error', error);
			throw error;
		}
	}

	public async delete<T>(endPoint: string, params?: object): Promise<T> {
		try {
			const response = await this.axiosInstance.delete<T>(endPoint, params);
			return response.data;
		} catch (error) {
			console.error('error', error);
			throw error;
		}
	}
}

export const http = new HttpRequest();
