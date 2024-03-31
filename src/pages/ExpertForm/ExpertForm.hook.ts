import React, { ChangeEvent } from 'react';
import { useController, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

export default function useExpertForm() {
	const navigate = useNavigate();
	const { control, register, watch, handleSubmit } = useForm({
		mode: 'onSubmit',
		defaultValues: {
			resumeShare: false,
			message: null,
		},
	});

	const { field: resumeShareFields } = useController({
		control,
		name: 'resumeShare',
	});

	const disableSubmit = () => {
		if (watch('resumeShare')) return false;
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
		disableSubmit,
		onSubmit,
		onCancel,
	};
}
