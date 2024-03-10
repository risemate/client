import ResumeAiCard from 'pages/Ai/components/ResumeAiCard/ResumeAiCard';
import styled, { css } from 'styled-components';

import Banner from '@common/Banner';
import BasicCareerList from '@components/resume/BasicCareerList';
import WhiteBoxWrapper from '@components/wrappers/WhiteBoxWrapper';

import useAi from './index.hook';

export default function Ai() {
	const { resumes, coverLetters } = useAi();

	return (
		<AiWrapper>
			<Banner variant='navy'>
				AI 코치를 통해 빠르게 무료로 <br />
				이력서/자기소개서를 첨삭 받아보세요!
			</Banner>
			<WhiteBoxWrapper type='div' customCss={aiWrapperStyle}>
				<BasicCareerList title='이력서' resumes={resumes} CardComponent={ResumeAiCard} />
				<BasicCareerList
					title='자기소개서'
					resumes={coverLetters}
					CardComponent={ResumeAiCard}
				/>
			</WhiteBoxWrapper>
		</AiWrapper>
	);
}

const AiWrapper = styled.div`
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
