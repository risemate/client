import { formatDate } from '@utils/helpers';
import React from 'react';
import { CardComponentProps } from 'types/cardComponent';

import Button from '@common/Button';
import ResumeCardWrapper from '@components/resume-view/ResumeCardWrapper';

export default function ResumeFormCard({
	career,
	selectedId = null,
	updateSelectedId,
}: CardComponentProps) {
	const handleButtonClick = () => {
		if (updateSelectedId) {
			updateSelectedId(career._id);
		}
	};
	return (
		<ResumeCardWrapper selected={selectedId === career._id}>
			<ResumeCardWrapper.Title time={formatDate(career.createdAt).period}>
				{career.docTitle}
			</ResumeCardWrapper.Title>
			<ResumeCardWrapper.ButtonWrapper>
				<Button variant='border' size='full' to={`/my-info/docs/${career._id}`}>
					보기
				</Button>
				<Button variant='navy' size='full' onClick={handleButtonClick}>
					선택
				</Button>
			</ResumeCardWrapper.ButtonWrapper>
		</ResumeCardWrapper>
	);
}
