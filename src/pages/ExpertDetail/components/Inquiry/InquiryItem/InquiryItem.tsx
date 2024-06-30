import { IconEdit } from '@icons';
import { maskString, sliceDate } from '@utils/helpers';
import styled from 'styled-components';
import { CS as InquiryType } from 'types/coach/product';

import DefaultImage from '@common/DefaultImage';

import InquiryAnswer from '../InquiryAnswer/InquiryAnswer';
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
			<InquiryAnswer
				csId={inquiry._id}
				isOpenInquiryInput={isOpenInquiryInput}
				onToggleInquiryInput={onToggleInquiryInput}
				isMyProduct={isMyProduct}
				answer={inquiry.answer}
			/>
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
