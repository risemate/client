import ResumeAiCard from 'pages/Ai/components/ResumeAiCard/ResumeAiCard';
import { useState } from 'react';
import styled, { css } from 'styled-components';

import Banner from '@common/Banner';
import WhiteBoxWrapper from '@components/base-wrappers/WhiteBoxWrapper';
import BasicCareerListWrapper from '@components/resume-view/BasicCareerList/BasicCareerListWrapper';
import SingleAsyncWrapper from '@components/suspense/async-wrapper/SingleAsyncWrapper';
import CareerSuspenseList from '@components/suspense/suspense-component/CareerSuspenseList';

export default function Ai() {
	const [selectedId, setSelectedId] = useState<string | null>(null);
	const updateSelectedId = (id: string | null) => setSelectedId(id);

	return (
		<AiWrapper>
			<Banner variant='navy'>
				AI 코치를 통해 빠르게 무료로 <br />
				이력서/자기소개서를 첨삭 받아보세요!
			</Banner>
			<WhiteBoxWrapper type='div' customCss={aiWrapperStyle}>
				<BasicCareerListWrapper title='이력서'>
					<SingleAsyncWrapper height='224px'>
						<CareerSuspenseList
							props={{ docType: 'BASIC', careerType: 'RESUME' }}
							CardComponent={ResumeAiCard}
							selectedId={selectedId}
							updateSelectedId={updateSelectedId}
						/>
					</SingleAsyncWrapper>
				</BasicCareerListWrapper>
				<BasicCareerListWrapper title='자기소개서'>
					<SingleAsyncWrapper height='224px'>
						<CareerSuspenseList
							props={{ docType: 'BASIC', careerType: 'COVERLETTER' }}
							CardComponent={ResumeAiCard}
							selectedId={selectedId}
							updateSelectedId={updateSelectedId}
						/>
					</SingleAsyncWrapper>
				</BasicCareerListWrapper>
			</WhiteBoxWrapper>
		</AiWrapper>
	);
}

const AiWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	/* gap: 20px; */
	width: 100%;
`;
const aiWrapperStyle = css`
	padding: 50px;
	display: flex;
	flex-direction: column;
	gap: 30px;
	min-height: ${({ theme }) => theme.heights.bannerContentHeight};
	& > button {
		align-self: center;
	}
`;
