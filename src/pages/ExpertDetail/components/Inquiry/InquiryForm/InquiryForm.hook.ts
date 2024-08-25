import { isEmpty } from '@utils/helpers';
import { ChangeEvent } from 'react';
import { useController, useForm } from 'react-hook-form';
import { CS, RequestAnswer } from 'types/coach/product';

export default function useInquiryForm(
	id: string,
	isMyProduct: boolean,
	cs?: CS,
	submitCallback?: (data: RequestAnswer) => void,
) {
	const { control, reset, handleSubmit } = useForm<RequestAnswer & { secret: boolean }>({
		mode: 'onSubmit',
		defaultValues: {
			id: cs ? cs._id : id,
			content: cs ? cs.content : '',
			secret: false,
		},
	});

	const { field: contentFields } = useController({
		name: 'content',
		control,
		rules: { required: true },
	});

	const { field: secretFields } = useController({
		control,
		name: 'secret',
	});

	const checkEmpty = isEmpty(contentFields.value);

	const submitForm = handleSubmit((data: RequestAnswer) => {
		submitCallback && submitCallback(data);
		reset();
	});
	return {
		contentFields,
		secretFields: {
			checked: secretFields.value,
			onChange: (e: ChangeEvent<HTMLInputElement>) =>
				secretFields.onChange(e.target.checked),
			ref: secretFields.ref,
			onBlur: secretFields.onBlur,
		},
		checkEmpty,
		submitForm,
	};
}
