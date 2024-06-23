import { reviewCreateMutation, reviewUpdateMutation } from '@queries/review';
import { isEmpty } from '@utils/helpers';
import { useController, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { RequestReview, Review } from 'types/coach/product';

export default function useReviewForm(
	id: string,
	isMyProduct: boolean,
	review?: Review,
	updateCallback?: () => void,
) {
	const createReviewMutation = reviewCreateMutation();
	const updateReviewMutation = reviewUpdateMutation();
	const { control, reset, handleSubmit } = useForm<RequestReview>({
		mode: 'onSubmit',
		defaultValues: {
			id: review ? review._id : id,
			content: review ? review.content : '',
			score: review ? review.score : 0,
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
		rules: { required: true },
	});

	const checkEmpty = () => {
		if (isMyProduct) {
			return isEmpty(contentFields.value);
		}
		return isEmpty(contentFields.value) || scoreFields.value === 0;
	};

	const addReview = handleSubmit((data: RequestReview) => {
		if (review) {
			toast('댓글이 성공적으로 수정되었습니다');
			updateReviewMutation.mutate(data);
			updateCallback && updateCallback();
		} else {
			toast('댓글이 성공적으로 등록되었습니다.');
			createReviewMutation.mutate(data);
			reset();
		}
	});
	return {
		contentFields,
		scoreFields: {
			rating: scoreFields.value,
			onClick: (rating: number) => scoreFields.onChange(rating),
		},
		checkEmpty,

		addReview,
	};
}
