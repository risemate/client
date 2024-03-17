import { useModal } from '@hooks/atoms/useModalAtom';
import { authQuery, userInfoUpdateMutation } from '@queries/user';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { UserInfoRequestProps } from 'types/user';

export default function useEditUserInfo() {
	const { data: auth } = authQuery();
	const updateUserInfoMutation = userInfoUpdateMutation();
	const { openModal, closeModal } = useModal('user-info-update');
	const navigate = useNavigate();
	const methods = useForm<UserInfoRequestProps>({
		mode: 'onSubmit',
		values: {
			name: auth?.name || null,
			nickname: auth?.nickname || null,
			email: auth?.email || null,
			picture: auth?.picture || null,
		},
	});

	const { register, handleSubmit } = methods;

	const submitEditUserInfo = () => {
		return handleSubmit((data: UserInfoRequestProps) => {
			updateUserInfoMutation.mutate(data);
			navigate('/my-info');
			closeModal();
		});
	};

	return {
		methods,
		registerAuth: {
			name: register('name', { required: true }),
			nickname: register('nickname', { required: true }),
			email: register('email'),
			picture: register('picture'),
		},
		openModal,
		submitEditUserInfo,
		disableSubmit: !methods.watch('name') || !methods.watch('nickname'),
	};
}
