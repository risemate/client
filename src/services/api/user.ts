import axios from 'axios';
import { Auth } from 'types/User';

export const fetchAuth = async (): Promise<Auth> => {
	try {
		const response = await axios.get<Auth>('auth');
		return response.data;
	} catch (error) {
		throw new Error((error as Error).message);
	}
};
