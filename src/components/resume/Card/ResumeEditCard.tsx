import React from 'react';
import styled from 'styled-components';
import { Variant } from 'types/Button';
import { Career } from 'types/CareerDocument';
import { Resume as ResumeType } from 'types/Resume';

import Button from '@common/Button';
import ResumeCardWrapper from '@components/wrappers/ResumeCardWrapper';

import useResumeCard from './ResumeCard.hook';

interface ResumeEditCardProps {
	resume: Career<ResumeType>;
}

export default function ResumeEditCard({ resume }: ResumeEditCardProps) {
	const { displayResume, displayEditResume } = useResumeCard(resume);
	return (
		<ResumeCardWrapper>
			<Tag $color={displayEditResume.tagInfo.color}>{displayEditResume.tagInfo.name}</Tag>
			<ResumeCardWrapper.Info>{displayResume.docTitle}</ResumeCardWrapper.Info>
			<InfoWrapper>{displayEditResume.resumeInfo}</InfoWrapper>
			<Button variant={displayEditResume.tagInfo.color} size='full'>
				보기
			</Button>
			<ResumeCardWrapper.Info time={displayResume.updatedAt}>
				최근 업데이트
			</ResumeCardWrapper.Info>
		</ResumeCardWrapper>
	);
}

const InfoWrapper = styled.div`
	width: 100%;
	border: 2px solid ${({ theme }) => theme.colors.darkGrey};
	border-radius: 10px;
	padding: 10px;
	color: ${({ theme }) => theme.colors.darkGrey};
	height: 60px;
`;

interface StyledTagProps {
	$color: Variant;
}

const Tag = styled.span<StyledTagProps>`
	position: absolute;
	top: 0;
	right: 0;
	padding: 10px 15px;
	border-radius: 0px 10px;
	color: white;
	font-size: ${({ theme }) => theme.fontSizes.small};
	background: ${({ theme, $color }) => theme.colors[$color]};
`;
