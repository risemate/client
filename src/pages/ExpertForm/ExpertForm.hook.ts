import { careersQuery } from '@queries/career';
import { ChangeEvent } from 'react';
import { useController, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

export default function useExpertForm() {
	const navigate = useNavigate();
	const resumes = careersQuery({ docType: 'BASIC', careerType: 'RESUME' });
	const expertFormMethods = useForm({
		mode: 'onSubmit',
		defaultValues: {
			resumeShare: false,
			message: null,
			resumeId: null,
		},
	});
	const { control, register, watch, handleSubmit } = expertFormMethods;

	const { field: resumeShareFields } = useController({
		control,
		name: 'resumeShare',
	});

	const { field: resumeIdFields } = useController({
		control,
		name: 'resumeId',
	});

	const disableSubmit = () => {
		if (watch('resumeShare') && watch('resumeId')) return false;
		return true;
	};

	const onSubmit = handleSubmit(data => {
		console.log(data);
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
