import axios, { AxiosInstance } from 'axios';

export default class Http {
	private axiosInstance: AxiosInstance;
	constructor(BASE_URL: string) {
		this.axiosInstance = axios.create({
			baseURL: BASE_URL,
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
