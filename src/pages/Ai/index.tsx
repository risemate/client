import { useModal } from '@hooks/atoms/useModalAtom';
import styled, { css } from 'styled-components';
import { mockResume } from 'types/Resume/data';

import Banner from '@common/Banner';
import Modal from '@components/modal/Modal';
import ResumeAiCard from '@components/resume/Card/ResumeAiCard';
import WhiteBoxWrapper from '@components/wrappers/WhiteBoxWrapper';

export default function Ai() {
	const { openModal, isModal } = useModal();
	const resumes = [mockResume, mockResume, mockResume];

	return (
		<Wrap>
			<Banner variant='default'>
				AI 코치를 통해 빠르게 무료로 <br />
				이력서/자기소개서를 첨삭 받아보세요!
			</Banner>
			<WhiteBoxWrapper type='div' customCss={aiWrapperStyle}>
				<AiSection>
					<h3>이력서</h3>
					<ul>
						{resumes.map((resume, index) => (
							<li key={index}>
								<ResumeAiCard career={resume} />
							</li>
						))}
					</ul>
				</AiSection>
				<AiSection>
					<h3>자기소개서</h3>
					<ul>
						{resumes.map((resume, index) => (
							<li key={index}>{/* <ResumeCard ai /> */}</li>
						))}
					</ul>
				</AiSection>
			</WhiteBoxWrapper>
			{isModal && (
				<Modal title='AI 첨삭'>
					AI을 첨삭을 받으시겠습니까? <br /> 시간은 약 15~30분 정도 소요됩니다.
				</Modal>
			)}
		</Wrap>
	);
}

const Wrap = styled.div`
	min-height: 90vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20px;
	width: 100%;
`;
const aiWrapperStyle = css`
	padding: 50px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	& > button {
		align-self: center;
	}
`;

const AiSection = styled.section`
	min-height: 250px;
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
		overflow-x: hidden;
		padding: 10px;
	}
	&:not(:last-child) {
		margin-bottom: 70px;
	}
`;
