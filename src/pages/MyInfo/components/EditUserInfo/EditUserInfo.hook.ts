import { useModal } from '@hooks/atoms/useModalAtom';
import { authQuery, userInfoUpdateMutation } from '@queries/user';
import { ChangeEvent } from 'react';
import { useController, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { UserInfoRequestProps } from 'types/auth';

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
			isAlarm: auth?.isAlarm || true,
		},
	});

	const {
		control,
		register,
		handleSubmit,
		formState: { isDirty },
	} = methods;

	const { field: isAlarmFields } = useController({
		control,
		name: 'isAlarm',
	});

	const submitEditUserInfo = () => {
		return handleSubmit((data: UserInfoRequestProps) => {
			updateUserInfoMutation
				.mutateAsync(data)
				.then(() => {
					toast.success('정보가 성공적으로 업데이트되었습니다.');
				})
				.catch(() => {
					toast.error('정보 업데이트에 실패했습니다.');
				});
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
			isAlarm: {
				checked: isAlarmFields.value,
				onChange: (e: ChangeEvent<HTMLInputElement>) =>
					isAlarmFields.onChange(e.target.checked),
				ref: isAlarmFields.ref,
				onBlur: isAlarmFields.onBlur,
			},
		},
		openModal,
		submitEditUserInfo,
		disableSubmit: !methods.watch('nickname') || !isDirty,
	};
}
