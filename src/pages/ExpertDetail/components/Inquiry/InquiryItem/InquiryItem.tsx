import { IconEdit } from '@icons';
import { isEmpty, maskString, sliceDate } from '@utils/helpers';
import styled from 'styled-components';
import { CS as InquiryType } from 'types/coach/product';

import Button from '@common/Button';
import DefaultImage from '@common/DefaultImage';

import InquiryForm from '../InquiryForm/InquiryForm';
import useInquiryitem from './InquiryItem.hook';

interface InquiryItemProps {
	inquiry: InquiryType;
	isMyProduct: boolean;
	isOpenInquiryInput: boolean;
	onToggleInquiryInput: () => void;
}

export default function InquiryItem({
	inquiry,
	isMyProduct,
	isOpenInquiryInput,
	onToggleInquiryInput,
}: InquiryItemProps) {
	const { isMyCS, editState, updateCS } = useInquiryitem(inquiry.user._id);
	return (
		<StyledItem>
			<DefaultImage
				size='tiny'
				variant='grey'
				shape='circle'
				image={inquiry.user.picture}
			/>
			<p>{maskString(inquiry.user.nickname, 2, '*')}</p>
			<div>
				<span>{sliceDate(inquiry.createdAt)}</span>
			</div>
			{isMyCS && (
				<ButtonWrapper>
					<button type='button' onClick={editState.change}>
						<IconEdit />
					</button>
				</ButtonWrapper>
			)}
			{editState.value ? (
				<InquiryForm isMyProduct={isMyProduct} cs={inquiry} submitCallback={updateCS} />
			) : (
				<p>{inquiry.content}</p>
			)}
			{isMyProduct && isEmpty(inquiry.answer) && (
				<Button
					variant='lightGrey'
					size='small'
					type='button'
					onClick={() => onToggleInquiryInput()}
				>
					{isOpenInquiryInput ? '취소' : '답글'}
				</Button>
			)}
			{isEmpty(inquiry.answer) && isMyProduct && isOpenInquiryInput && (
				<InquiryForm isMyProduct={isMyProduct} />
			)}
			{inquiry.answer && (
				<StyledAnswer>
					<p>
						<span>{maskString(inquiry.answer.expert.name, 2, '*')}</span>
						<span>({maskString(inquiry.answer.expert.nickname, 2, '*')})</span>
						<span>| {sliceDate(inquiry.answer.createdAt)}</span>
					</p>
					<p>{inquiry.answer.content}</p>
				</StyledAnswer>
			)}
		</StyledItem>
	);
}

const StyledItem = styled.li`
	display: grid;
	grid-template-columns: 50px auto 50px;
	gap: 0 5px;
	& > div:nth-of-type(1) {
		grid-column: 1 / 2;
		grid-row: 1 / 3;
	}
	& > p:nth-of-type(1) {
		grid-column: 2 / 3;
		color: ${({ theme }) => theme.colors.darkGrey};
	}
	& > div:nth-of-type(2) {
		grid-column: 2 / 3;
		display: flex;
		align-items: end;
		gap: 5px;
		& > span {
			color: ${({ theme }) => theme.colors.darkGrey};
			font-size: ${({ theme }) => theme.fontSizes.small};
		}
	}
	& > p:nth-of-type(2) {
		grid-column: 1 / 3;
		margin-top: 20px;
		line-height: 25px;
		color: ${({ theme }) => theme.colors.darkerGrey};
	}
	& > form,
	& > button {
		grid-column: 1 / 3;
		text-align: center;
		margin-top: 15px;
	}
	& > button {
		margin: 15px auto 0;
	}
`;

const StyledAnswer = styled.div`
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

const ButtonWrapper = styled.div`
	display: flex;
	gap: 10px;
	svg {
		color: ${({ theme }) => theme.colors.grey};
		width: 18px;
		height: 18px;
		&:hover {
			color: ${({ theme }) => theme.colors.darkGrey};
		}
	}
`;
