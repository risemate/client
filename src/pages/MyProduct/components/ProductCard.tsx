import { IconTrash } from '@icons';
import styled from 'styled-components';
import { CardComponentProps } from 'types/cardComponent';
import { Product } from 'types/coach/product';

import Button from '@common/Button';
import Toggle from '@components/input/Toggle';
import DeleteModal from '@components/modal/DeleteModal';
import CardWrapper from '@components/resume-view/ResumeCardWrapper/ResumeCardWrapper';

import useProductCard from './ProductCard.hook';

export default function ProductCard({
	career,
	selectedId = null,
	updateSelectedId,
}: CardComponentProps<Product>) {
	const { isPublic, updateIsPublic, deleteModal, deleteProduct } = useProductCard(
		career,
		selectedId,
		updateSelectedId,
	);
	return (
		<CardWrapper>
			<CardWrapper.Title>{career.productTitle}</CardWrapper.Title>
			<CardWrapper.ButtonWrapper>
				<Button variant='border' size='full' to={`/write?redirect=pr&id=${career._id}`}>
					수정
				</Button>
				<Button variant='border' size='full' to={`${career._id}`}>
					보기
				</Button>
			</CardWrapper.ButtonWrapper>
			<ToggleWrapper>
				<Toggle name='게시물 공개' checked={isPublic} onChange={updateIsPublic} />
			</ToggleWrapper>
			<DeleteButton type='button' onClick={deleteModal.open}>
				<span>삭제</span>
				<IconTrash />
			</DeleteButton>
			<DeleteModal
				title='상품'
				queryKey={deleteModal.queryKey}
				deleteResume={deleteProduct}
			/>
		</CardWrapper>
	);
}

const DeleteButton = styled.button`
	align-self: end;
	font-size: ${({ theme }) => theme.fontSizes.input};
	color: ${({ theme }) => theme.colors.grey};
	& > span {
		padding-right: 5px;
	}
	svg {
		width: 11px;
		height: 11px;
	}
	&:hover {
		color: ${({ theme }) => theme.colors.darkGrey};
	}
`;

const ToggleWrapper = styled.div`
	background: ${({ theme }) => theme.colors.lightGrey};
	width: 100%;
	border-radius: 10px;
	padding: 5px 20px;
	${({ theme }) => theme.common.flexCenter};
`;
