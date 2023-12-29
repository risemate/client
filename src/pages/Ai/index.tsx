import { useModal } from '@hooks/atoms/useModalAtom';
import React, { useState } from 'react';
import styled, { css } from 'styled-components';

import Banner from '@common/Banner';
import Button from '@common/Button';
import Modal from '@components/modal/Modal';
import ResumeCard from '@components/resume/Card/ResumeCard';
import WhiteBoxWrapper from '@components/wrappers/WhiteBoxWrapper';

export default function Ai() {
	const { openModal, isModal } = useModal();
	const [selectedResumeId, setSelectedResumeId] = useState<number | null>(null);
	const resumeList = [1, 2, 3, 4];
	const selectResume = (index: number) => {
		if (selectedResumeId === index) {
			setSelectedResumeId(null);
		} else {
			setSelectedResumeId(index);
		}
	};
	return (
		<>
			<Banner variant='default'>
				AI 코치를 통해 빠르게 무료로 <br />
				이력서/자기소개서를 첨삭 받아보세요!
			</Banner>
			<WhiteBoxWrapper type='div' customCss={aiWrapperStyle}>
				<AiSection>
					<h3>이력서</h3>
					<ul>
						{resumeList.map((resume, index) => (
							<li key={index}>
								<SelectedButton
									onClick={() => selectResume(index)}
									$selected={selectedResumeId === index}
								>
									{/* <ResumeCard ai /> */}
								</SelectedButton>
							</li>
						))}
					</ul>
				</AiSection>
				<AiSection>
					<h3>자기소개서</h3>
					<ul>
						{resumeList.map((resume, index) => (
							<li key={index}>
								<SelectedButton
									onClick={() => selectResume(index + resumeList.length)}
									$selected={selectedResumeId === index + resumeList.length}
								>
									{/* <ResumeCard ai /> */}
								</SelectedButton>
							</li>
						))}
					</ul>
				</AiSection>
				<Button
					variant='mint'
					size='medium'
					disabled={selectedResumeId === null}
					onClick={() => openModal()}
				>
					Ai 첨삭 받기
				</Button>
			</WhiteBoxWrapper>
			{isModal && (
				<Modal title='AI 첨삭'>
					AI을 첨삭을 받으시겠습니까? <br /> 시간은 약 15~30분 정도 소요됩니다.
				</Modal>
			)}
		</>
	);
}

const aiWrapperStyle = css`
	min-height: 500px;
	padding: 50px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	& > button {
		align-self: center;
	}
`;

const AiSection = styled.section`
	h3 {
		color: ${({ theme }) => theme.colors.navy};
		font-weight: bold;
		font-size: ${({ theme }) => theme.fontSizes.medium};
		margin-bottom: 30px;
	}
	ul {
		width: 100%;
		display: flex;
		gap: 20px;
		justify-content: start;
		overflow-x: scroll;
		padding: 10px;
	}
	&:not(:last-child) {
		margin-bottom: 70px;
	}
`;

const SelectedButton = styled.button<{ $selected: boolean }>`
	width: fit-content;
	border-radius: 10px;
	transition: all 0.2s ease-out;
	outline: ${({ $selected, theme }) =>
		$selected ? `3px solid ${theme.colors.mint}` : 'none'};
	&:hover {
		outline: 3px solid ${({ theme }) => theme.colors.mint};
	}
`;
