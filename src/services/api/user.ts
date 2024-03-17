import axios from 'axios';
import { Auth, UserInfoRequestProps } from 'types/user';

export const fetchAuth = async (): Promise<Auth> => {
	try {
		const response = await axios.get<Auth>('auth');
		return response.data;
	} catch (error) {
		throw new Error((error as Error).message);
	}
};

export const fetchUpdateUserInfo = async (body: UserInfoRequestProps): Promise<Auth> => {
	try {
		const response = await axios.patch<Auth>('users', body);
		return response.data;
	} catch (error) {
		throw new Error((error as Error).message);
	}
};
