import { formatDate } from '@utils/helpers';
import styled from 'styled-components';
import { Career } from 'types/CareerDocument';
import { Resume as ResumeType } from 'types/Resume';

import Button from '@common/Button';
import Modal from '@components/modal/base/Modal';
import CardWrapper from '@components/wrappers/ResumeCardWrapper';

import useResumeAiCard from './ResumeAiCard.hook';

interface ResumeCardProps {
	career: Career<ResumeType>;
}

export default function ResumeAiCard({ career }: ResumeCardProps) {
	const { openModal, hasRevise, isRevising, modalContent, proceedAiRevise } =
		useResumeAiCard();
	return (
		<CardWrapper>
			<CardWrapper.Title time={formatDate(career.createdAt).period}>
				{career.docTitle}
			</CardWrapper.Title>
			<ViewButtonWrapper>
				<Button variant='border' size='full' to={`/my-info/docs/${career._id}`}>
					원문 보기
				</Button>
				{hasRevise && (
					<Button variant='border' size='full' to={`/my-info/docs/${career._id}`}>
						AI 첨삭 보기
					</Button>
				)}
			</ViewButtonWrapper>
			<Button variant='blue' size='full' onClick={openModal} disabled={isRevising}>
				Ai 첨삭받기
			</Button>
			{isRevising && (
				<NoticeText>첨삭이 진행 중입니다. 완료되면 알림이 전송됩니다.</NoticeText>
			)}
			<Modal
				title='AI 첨삭'
				queryKey='ai-revise'
				onClick={() => proceedAiRevise(career._id)}
			>
				{modalContent}
			</Modal>
		</CardWrapper>
	);
}

const ViewButtonWrapper = styled.div`
	display: flex;
	width: 100%;
	gap: 10px;
`;

const NoticeText = styled.span`
	color: ${({ theme }) => theme.colors.darkGrey};
	font-size: ${({ theme }) => theme.fontSizes.small};
`;
