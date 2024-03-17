import { LoginResponse } from 'types/auth';

export async function popupLogin(provider = 'google'): Promise<LoginResponse> {
	return new Promise((resolve, _) => {
		const handleMessage = (event: MessageEvent<any>) => {
			const data = JSON.parse(JSON.stringify(event.data)) as LoginResponse;

			if (data.accessToken) {
				// 이벤트 리스너를 제거합니다.
				window.removeEventListener('message', handleMessage);
				resolve(data);
			}
		};

		window.addEventListener('message', handleMessage);

		window.open(
			`${process.env.REACT_APP_API_URL}/auth/login/${provider}`,
			'소셜 로그인',
			'width=600,height=400',
		);
	});
}
