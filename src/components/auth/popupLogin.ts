export async function popupLogin(provider = 'google') {
	return new Promise((resolve, _) => {
		const popup = window.open(
			`${process.env.REACT_APP_API_URL}/auth/login/${provider}`,
			'소셜 로그인',
			'width=600,height=400',
		);

		window.addEventListener('message', event => {
			if (event.data === 'success') {
				setTimeout(() => {
					popup?.close();
					resolve({ success: true, message: '' });
				}, 10);
			} else {
				setTimeout(() => {
					popup?.close();
					resolve({ success: false, message: event.data });
				}, 10);
			}
		});
	});
}
