import { isEmpty } from '@utils/helpers';
import { useController, useForm } from 'react-hook-form';
import { RequestReview, Review } from 'types/coach/product';

export default function useReviewForm(
	id: string,
	isMyProduct: boolean,
	review?: Review,
	submitCallback?: (data: RequestReview) => void,
) {
	const { control, reset, handleSubmit } = useForm<RequestReview>({
		mode: 'onSubmit',
		defaultValues: {
			id: review ? review._id : id,
			content: review ? review?.content : '',
			score: review ? review?.score : 0,
		},
	});

	const { field: contentFields } = useController({
		name: 'content',
		control,
		rules: { required: true },
	});

	const { field: scoreFields } = useController({
		name: 'score',
		control,
	});

	const checkEmpty = () => {
		if (isMyProduct) {
			return isEmpty(contentFields.value);
		}
		return isEmpty(contentFields.value) || scoreFields.value === 0;
	};

	const submitForm = handleSubmit((data: RequestReview) => {
		submitCallback && submitCallback(data);
		reset();
	});
	return {
		contentFields,
		scoreFields: {
			rating: scoreFields.value,
			onClick: (rating: number) => scoreFields.onChange(rating),
		},
		checkEmpty,

		submitForm,
	};
}
