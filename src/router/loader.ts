import { redirect } from 'react-router-dom';

export const signLoader = () => {
	const token = true;
	if (!token) {
		return redirect('/');
	}
	return null;
};
