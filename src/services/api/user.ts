import axios from 'axios';
import { Auth } from 'types/User';

export const fetchAuth = async (): Promise<Auth> => {
	return await axios.get('');
};
