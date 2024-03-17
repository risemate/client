import React, { ChangeEvent } from 'react';
import { useController, useForm } from 'react-hook-form';

export default function useExpertForm() {
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
	};
}
