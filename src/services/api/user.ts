import { Auth } from 'types/User';

export const fetchAuth = async (): Promise<Auth> => {
	return (await fetch('')).json();
};
