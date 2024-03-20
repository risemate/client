import { isEmpty } from '@utils/helpers';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

import Button from '@common/Button';
import TextArea from '@components/input/TextArea';

interface InquiryInputProps {
	isMyProduct: boolean;
}

export default function InquiryForm({ isMyProduct }: InquiryInputProps) {
	type AddInquiryType = {
		content: string;
		isSecret: boolean;
	};
	const reviewInput: AddInquiryType = {
		content: '',
		isSecret: false,
	};

	const { register, watch, setValue, reset, handleSubmit } = useForm({
		mode: 'onSubmit',
		defaultValues: reviewInput,
	});

	const checkEmpty = () => isEmpty(watch('content'));
	// eslint-disable-next-line
	const updateIsSecret = (isSecret: boolean) => setValue('isSecret', isSecret);

	const addInquiry = (data: AddInquiryType) => {
		reset();
	};

	return (
		<StyledInquiryForm onSubmit={handleSubmit(addInquiry)}>
			<TextArea
				placeholder={
					isMyProduct
						? '해당 문의에 대한 답변을 남겨보세요!'
						: '해당 서비스에 대헤 궁금한 점이 있다면 문의를 남겨보세요!'
				}
				{...register('content')}
				autoFocus
			/>
			<div>
				<Button variant='navy' size='small' type='submit' disabled={checkEmpty()}>
					{isMyProduct ? '답변 남기기' : '문의하기'}
				</Button>
			</div>
		</StyledInquiryForm>
	);
}

const StyledInquiryForm = styled.form`
	position: relative;
	& > div {
		position: absolute;
		right: 10px;
		bottom: 10px;
		display: flex;
		gap: 10px;
		align-items: center;
	}
`;
