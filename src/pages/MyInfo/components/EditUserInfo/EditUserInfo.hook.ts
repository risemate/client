import { useAuth } from '@queries/hooks/useAuth';
import { useForm } from 'react-hook-form';
import { Auth } from 'types/User';

export default function useEditUserInfo() {
	const { data: auth } = useAuth();
	const methods = useForm<Auth>({
		mode: 'onSubmit',
		values: auth,
	});

	const { register, handleSubmit } = methods;

	const submitEditUserInfo = () => {
		return handleSubmit((data: Auth) => {
			console.log(data);
		});
	};

	return {
		methods,
		registerAuth: {
			name: register('name'),
			nickname: register('nickname'),
			email: register('email'),
			picture: register('picture'),
		},
		submitEditUserInfo,
	};
}
