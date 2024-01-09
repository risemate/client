import { formatDate } from '@utils/helpers';
import styled from 'styled-components';
import { Career } from 'types/CareerDocument';

import Button from '@common/Button';
import Toggle from '@components/input/Toggle';
import CardWrapper from '@components/wrappers/ResumeCardWrapper';

import useCareerBasicCard from './CareerBasicCard.hook';

interface ResumeCardProps {
	career: Career;
}

export default function CareerBasicCard({ career }: ResumeCardProps) {
	const { isPublic, isContact, updateIsPublic, updateIsContact } =
		useCareerBasicCard(career);

	return (
		<CardWrapper>
			<CardWrapper.Info time={formatDate(career.createdAt).period}>
				{career.docTitle}
			</CardWrapper.Info>
			<ButtonGorup>
				<Button variant='border' size='full' to={`${career._id}/edit`}>
					수정
				</Button>
				<Button variant='border' size='full' to={`${career._id}`}>
					보기
				</Button>
			</ButtonGorup>
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
		</CardWrapper>
	);
}

const ToggleWrapper = styled.div`
	background: ${({ theme }) => theme.colors.lightGrey};
	width: 100%;
	border-radius: 10px;
	padding: 5px 20px;
	${({ theme }) => theme.common.flexCenter};
`;

const ButtonGorup = styled.div`
	display: flex;
	gap: 10px;
	width: 100%;
`;
