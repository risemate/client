import { isEmpty } from '@utils/helpers';
import { useController, useForm } from 'react-hook-form';
import { CS, RequestAnswer } from 'types/coach/product';

export default function useInquiryForm(
	id: string,
	isMyProduct: boolean,
	cs?: CS,
	submitCallback?: (data: RequestAnswer) => void,
) {
	const { control, reset, handleSubmit } = useForm<RequestAnswer>({
		mode: 'onSubmit',
		defaultValues: {
			id: cs ? cs._id : id,
			content: cs ? cs.content : '',
		},
	});

	const { field: contentFields } = useController({
		name: 'content',
		control,
		rules: { required: true },
	});

	const checkEmpty = isEmpty(contentFields.value);

	const submitForm = handleSubmit((data: RequestAnswer) => {
		submitCallback && submitCallback(data);
		reset();
	});
	return {
		contentFields,
		checkEmpty,
		submitForm,
	};
}
