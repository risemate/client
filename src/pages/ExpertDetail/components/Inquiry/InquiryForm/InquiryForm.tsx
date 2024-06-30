import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { CS, RequestAnswer } from 'types/coach/product';

import Button from '@common/Button';
import TextArea from '@components/input/TextArea';

import useInquiryForm from './InquiryForm.hook';

interface InquiryInputProps {
	isMyProduct: boolean;
	cs?: CS;
	submitCallback?: (data: RequestAnswer) => void;
}

export default function InquiryForm({
	isMyProduct,
	cs,
	submitCallback,
}: InquiryInputProps) {
	const { id } = useParams();
	const { submitForm, contentFields, checkEmpty } = useInquiryForm(
		id || '',
		isMyProduct,
		cs,
		submitCallback,
	);

	return (
		<StyledInquiryForm onSubmit={submitForm}>
			<TextArea
				placeholder={
					isMyProduct
						? '해당 문의에 대한 답변을 남겨보세요!'
						: '해당 서비스에 대헤 궁금한 점이 있다면 문의를 남겨보세요!'
				}
				{...contentFields}
				autoFocus
			/>
			<div>
				<Button variant='navy' size='small' type='submit' disabled={checkEmpty}>
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
