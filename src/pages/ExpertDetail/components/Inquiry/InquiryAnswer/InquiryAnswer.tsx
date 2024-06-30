import { isEmpty, maskString, sliceDate } from '@utils/helpers';
import styled from 'styled-components';
import { Answer, CS } from 'types/coach/product';

import Button from '@common/Button';

import InquiryForm from '../InquiryForm/InquiryForm';
import useInquiryAnswer from './InquiryAnswer.hook';

interface InquiryAsnwerProps {
	csId: string;
	isOpenInquiryInput: boolean;
	onToggleInquiryInput: () => void;
	isMyProduct: boolean;
	answer: Answer | null;
}

export default function InquiryAnswer({
	csId,
	isOpenInquiryInput,
	onToggleInquiryInput,
	isMyProduct,
	answer,
}: InquiryAsnwerProps) {
	const { createCsAnswer, updateCsAnswer, editState } =
		useInquiryAnswer(onToggleInquiryInput);
	return (
		<>
			{isMyProduct && isEmpty(answer) && (
				<Button
					variant='lightGrey'
					size='small'
					type='button'
					onClick={() => onToggleInquiryInput()}
				>
					{isOpenInquiryInput ? '취소' : '답글'}
				</Button>
			)}
			{isEmpty(answer) && isMyProduct && isOpenInquiryInput && (
				<InquiryForm isMyProduct={isMyProduct} submitCallback={createCsAnswer} />
			)}
			{answer && (
				<AnswerWrapper>
					<p>
						<span>{maskString(answer.expert.name, 2, '*')}</span>
						<span>({maskString(answer.expert.nickname, 2, '*')})</span>
						<span>| {sliceDate(answer.createdAt)}</span>
					</p>
					{editState.value ? (
						<InquiryForm
							isMyProduct={isMyProduct}
							submitCallback={updateCsAnswer}
							cs={{ _id: csId, content: answer.content } as CS}
						/>
					) : (
						<p>{answer.content}</p>
					)}
				</AnswerWrapper>
			)}
		</>
	);
}

const AnswerWrapper = styled.div`
	grid-column: 1 / 3;
	background: ${({ theme }) => theme.colors.lighterGrey};
	margin-top: 20px;
	padding: 15px 20px 15px 30px;
	border-radius: 5px;
	& > p:nth-of-type(1) {
		display: flex;
		gap: 8px;
		align-items: end;
		margin-bottom: 10px;
		& > span {
			color: ${({ theme }) => theme.colors.darkerGrey};
		}
		& > span:nth-of-type(3) {
			color: ${({ theme }) => theme.colors.darkGrey};
			font-size: ${({ theme }) => theme.fontSizes.small};
		}
	}
	& > p:nth-of-type(2) {
		line-height: 25px;
		color: ${({ theme }) => theme.colors.darkerGrey};
	}
`;
