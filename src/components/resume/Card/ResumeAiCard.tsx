import { formatDate } from '@utils/helpers';
import { Career } from 'types/CareerDocument';
import { Resume as ResumeType } from 'types/Resume';

import Button from '@common/Button';
import CardWrapper from '@components/wrappers/ResumeCardWrapper';

import { SummaryText } from './ReviseCareerCard';

interface ResumeCardProps {
	career: Career<ResumeType>;
}

export default function ResumeAiCard({ career }: ResumeCardProps) {
	return (
		<CardWrapper>
			<CardWrapper.Info time={formatDate(career.createdAt).period}>
				{career.docTitle}
			</CardWrapper.Info>
			<SummaryText>{career.description}</SummaryText>
			<Button variant='border' size='full' to={`/my-info/docs/${career._id}`}>
				보기
			</Button>
			<Button variant='blue' size='full'>
				Ai 첨삭받기
			</Button>
			{/* <p>첨삭 받은 이력서가 없습니다.</p> */}
		</CardWrapper>
	);
}
