import { expertApplyMutation } from '@queries/expert';
import { ChangeEvent } from 'react';
import { useController, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ApplyExpertProps } from 'types/coach/expert';

interface FormMethodProps extends ApplyExpertProps {
	resumeShare: boolean;
}

export default function useExpertForm() {
	const navigate = useNavigate();
	const applyExpertMutation = expertApplyMutation();
	const expertFormMethods = useForm<FormMethodProps>({
		mode: 'onSubmit',
		defaultValues: {
			resumeShare: false,
			message: null,
			resumeId: null,
		},
	});
	const { control, register, watch, reset, handleSubmit } = expertFormMethods;

	const { field: resumeShareFields } = useController({
		control,
		name: 'resumeShare',
	});

	const { field: resumeIdFields } = useController({
		control,
		name: 'resumeId',
		rules: { required: true },
	});

	const checkRequiredField = watch('resumeShare') && watch('resumeId');

	const disableSubmit = () => {
		if (checkRequiredField) return false;
		return true;
	};

	const onSubmit = handleSubmit(async data => {
		if (!checkRequiredField) return;
		const requestBody = {
			message: data.message,
			resumeId: data.resumeId,
		};
		const { success } = await applyExpertMutation.mutateAsync(requestBody);
		if (success) {
			toast('전문가 신청이 성공적으로 제출되었습니다.');
			navigate('/my-info');
			reset();
		} else {
			toast('전문가 신청이 실패하였습니다.');
		}
	});

	const onCancel = () => navigate(-1);

	return {
		resumeShare: {
			checked: resumeShareFields.value,
			onChange: (e: ChangeEvent<HTMLInputElement>) =>
				resumeShareFields.onChange(e.target.checked),
			ref: resumeShareFields.ref,
			onBlur: resumeShareFields.onBlur,
		},
		message: register('message'),
		resumeId: {
			value: watch('resumeId'),
			update: (id: string | null) => resumeIdFields.onChange(id),
		},
		disableSubmit,
		onSubmit,
		onCancel,
	};
}
