import { useModal } from '@hooks/atoms/useModalAtom';
import { authQuery, userInfoUpdateMutation } from '@queries/user';
import { useController, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AlarmOptionList, UserInfoRequestProps } from 'types/auth';

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
			alarmOptions: auth?.alarmOptions
		},
	});

	const {
		control,
		register,
		handleSubmit,
		formState: { isDirty },
	} = methods;

	const alarmOptionsFields = () => {
		return AlarmOptionList.reduce((acc, option) => {
			const { field } = useController({
				control,
				name: `alarmOptions.mail.${option.value}`,
			});

			acc[option.value] = {
				checked: field.value,
				onChange: (e: React.ChangeEvent<HTMLInputElement>) => field.onChange(e.target.checked),
				ref: field.ref,
				onBlur: field.onBlur,
			};

			return acc;
			// eslint-disable-next-line
		}, {} as Record<typeof AlarmOptionList[number]['value'], any>);
	};


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
			alarmOptions: alarmOptionsFields()
		},
		openModal,
		submitEditUserInfo,
		disableSubmit: !methods.watch('nickname') || !isDirty,
	};
}
