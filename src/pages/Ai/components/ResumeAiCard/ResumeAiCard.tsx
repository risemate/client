import { formatDate } from '@utils/helpers';
import styled from 'styled-components';
import { CardComponentProps } from 'types/cardComponent';

import Button from '@common/Button';
import Modal from '@components/modal/base/Modal';
import CardWrapper from '@components/resume-view/ResumeCardWrapper';

import useResumeAiCard from './ResumeAiCard.hook';

export default function ResumeAiCard({
	career,
	selectedId = null,
	updateSelectedId,
}: CardComponentProps) {
	const {
		clickRevision,
		hasRevise,
		isRevising,
		modalContent,
		proceedAiRevise,
		toDoc,
		toRevision,
	} = useResumeAiCard(career, selectedId, updateSelectedId);
	return (
		<CardWrapper>
			<CardWrapper.Title time={formatDate(career.createdAt).period}>
				{career.docTitle}
			</CardWrapper.Title>
			<CardWrapper.ButtonWrapper>
				<Button variant='border' size='full' to={toDoc}>
					원문 보기
				</Button>
				{hasRevise && (
					<Button variant='border' size='full' to={toRevision}>
						AI 첨삭 보기
					</Button>
				)}
			</CardWrapper.ButtonWrapper>
			<Button variant='blue' size='full' onClick={clickRevision} disabled={isRevising}>
				Ai 첨삭받기
			</Button>
			{isRevising && (
				<NoticeText>첨삭이 진행 중입니다. 완료되면 알림이 전송됩니다.</NoticeText>
			)}
			<Modal title='AI 첨삭' queryKey='ai-revise' onClick={proceedAiRevise}>
				{modalContent}
			</Modal>
		</CardWrapper>
	);
}

const NoticeText = styled.span`
	color: ${({ theme }) => theme.colors.darkGrey};
	font-size: ${({ theme }) => theme.fontSizes.small};
`;
