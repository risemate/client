import React from 'react';
import styled from 'styled-components';
import { Career } from 'types/CareerDocument';
import { Resume as ResumeType } from 'types/Resume';

import Button from '@common/Button';
import Toggle from '@components/input/Toggle';
import ResumeCardWrapper from '@components/wrappers/ResumeCardWrapper';

import useResumeCard from './ResumeCard.hook';

interface ResumeCardProps {
	resume: Career<ResumeType>;
	ai?: boolean;
}

export default function ResumeCard({ resume, ai = false }: ResumeCardProps) {
	const { displayResume, publicness, clickHandler } = useResumeCard(resume);

	return (
		<ResumeCardWrapper>
			<ResumeCardWrapper.Info time={displayResume.createdAt}>
				{displayResume.docTitle}
			</ResumeCardWrapper.Info>
			<Button variant='border' size='full' onClick={clickHandler.clickDefaultButton}>
				기본 이력서
			</Button>
			<Button variant='blue' size='full' onClick={clickHandler.clickEditingButton}>
				첨삭 중 이력서 (3)
			</Button>
			{/* <p>첨삭 받은 이력서가 없습니다.</p> */}
			{!ai && (
				<ToggleWrapper>
					<Toggle
						name='게시물 공개'
						checked={publicness.isPublic}
						onChange={publicness.updateIsPublic}
					/>
					<Toggle
						name='연락처 공개'
						checked={publicness.isContact}
						onChange={publicness.updateIsContact}
					/>
				</ToggleWrapper>
			)}
		</ResumeCardWrapper>
	);
}

const ToggleWrapper = styled.div`
	background: ${({ theme }) => theme.colors.lightGrey};
	width: 100%;
	border-radius: 10px;
	padding: 5px 20px;
	${({ theme }) => theme.common.flexCenter};
`;
