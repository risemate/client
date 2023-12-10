import { LoginResponse } from 'types/User';

export async function popupLogin(provider = 'google'): Promise<LoginResponse> {
	// eslint-disable-next-line
	return new Promise((resolve, _) => {
		window.open(
			`${process.env.REACT_APP_API_URL}/auth/login/${provider}`,
			'소셜 로그인',
			'width=600,height=400',
		);

		window.addEventListener('message', event => {
			const data = JSON.parse(JSON.stringify(event.data));
			setTimeout(() => {
				resolve(data);
			}, 10);
		});
	});
}
