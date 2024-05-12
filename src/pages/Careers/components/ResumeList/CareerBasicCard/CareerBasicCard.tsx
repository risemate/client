import { IconTrash } from '@icons';
import { formatDate } from '@utils/helpers';
import styled from 'styled-components';
import { CardComponentProps } from 'types/cardComponent';
import { Career } from 'types/career/careerDocument';
import { Resume } from 'types/career/resume';

import Button from '@common/Button';
import Toggle from '@components/input/Toggle';
import CardWrapper from '@components/resume-view/ResumeCardWrapper/ResumeCardWrapper';

import DeleteModal from '../../../../../components/modal/DeleteModal';
import useCareerBasicCard from './CareerBasicCard.hook';

export default function CareerBasicCard({
	careerType = 'RESUME',
	career,
	selectedId = null,
	updateSelectedId,
}: CardComponentProps<Career<Resume>>) {
	const {
		isPublic,
		isContact,
		updateIsPublic,
		updateIsContact,
		deleteModal,
		deleteResume,
	} = useCareerBasicCard(career, selectedId, updateSelectedId);

	return (
		<CardWrapper>
			<CardWrapper.Title time={formatDate(career.createdAt).period}>
				{career.docTitle}
			</CardWrapper.Title>
			<CardWrapper.ButtonWrapper>
				<Button
					variant='border'
					size='full'
					to={`/write?redirect=${careerType === 'RESUME' ? 're' : 'co'}&id=${career._id}`}
				>
					수정
				</Button>
				<Button variant='border' size='full' to={`${career._id}`}>
					보기
				</Button>
			</CardWrapper.ButtonWrapper>
			<Button
				variant='blue'
				size='full'
				to={`${career._id}/revise-docs`}
				disabled={career.childrenDocCount === 0}
			>
				첨삭 중 문서 ({career.childrenDocCount})
			</Button>

			<ToggleWrapper>
				<Toggle name='게시물 공개' checked={isPublic} onChange={updateIsPublic} />
				<Toggle name='연락처 공개' checked={isContact} onChange={updateIsContact} />
			</ToggleWrapper>
			<DeleteButton type='button' onClick={deleteModal.open}>
				<span>삭제</span>
				<IconTrash />
			</DeleteButton>
			<DeleteModal
				title='이력서'
				queryKey={deleteModal.queryKey}
				deleteResume={deleteResume}
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
