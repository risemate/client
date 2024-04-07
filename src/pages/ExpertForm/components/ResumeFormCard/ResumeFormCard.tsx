import { formatDate } from '@utils/helpers';
import React from 'react';
import { Career } from 'types/career/careerDocument';
import { Resume as ResumeType } from 'types/career/resume';

import Button from '@common/Button';
import ResumeCardWrapper from '@components/resume-view/ResumeCardWrapper';

import useResumeFormCard from './ResumeFormCard.hook';

interface ResumeFormCardProps {
	career: Career<ResumeType>;
	selected?: boolean;
}

export default function ResumeFormCard({
	career,
	selected = false,
}: ResumeFormCardProps) {
	const { onClick } = useResumeFormCard(career);
	return (
		<ResumeCardWrapper selected={selected}>
			<ResumeCardWrapper.Title time={formatDate(career.createdAt).period}>
				{career.docTitle}
			</ResumeCardWrapper.Title>
			<ResumeCardWrapper.ButtonWrapper>
				<Button variant='border' size='full' to={`/my-info/docs/${career._id}`}>
					보기
				</Button>
				<Button variant='navy' size='full' onClick={onClick}>
					선택
				</Button>
			</ResumeCardWrapper.ButtonWrapper>
		</ResumeCardWrapper>
	);
}
