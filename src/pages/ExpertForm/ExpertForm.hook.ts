import { careersQuery } from '@queries/career';
import { expertApplyMutation } from '@queries/expert';
import { ChangeEvent } from 'react';
import { useController, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ApplyExpertProps } from 'types/coach/expert';

interface FormMethodProps extends ApplyExpertProps {
	resumeShare: boolean;
}

export default function useExpertForm() {
	const navigate = useNavigate();
	const applyExpertMutation = expertApplyMutation();
	const resumes = careersQuery({ docType: 'BASIC', careerType: 'RESUME' });
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
			console.log('toastify: success');
			navigate('/my-info');
			reset();
		} else {
			console.log('toastify: fail');
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
		resumes: resumes.data || [],
	};
}
