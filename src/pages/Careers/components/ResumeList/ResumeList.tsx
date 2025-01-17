import { useState } from 'react';
import { css } from 'styled-components';

import WhiteBoxWrapper from '@components/base-wrappers/WhiteBoxWrapper';
import Container from '@components/layout/Container';
import BasicCareerListWrapper from '@components/resume-view/BasicCareerList/BasicCareerListWrapper';
import SingleAsyncWrapper from '@components/suspense/async-wrapper/SingleAsyncWrapper';
import CareerSuspenseList from '@components/suspense/suspense-component/CareerSuspenseList';

import CareerBasicCard from './CareerBasicCard/CareerBasicCard';

export default function ResumeList() {
	const [selectedId, setSelectedId] = useState<string | null>(null);
	const updateSelectedId = (id: string | null) => setSelectedId(id);
	return (
		<Container backgroundColor='lightGrey' css={containerStyle} center padding>
			<h2 className='a11y-hidden'>이력서</h2>
			<WhiteBoxWrapper type='div' customCss={resumeWrapperStyle}>
				<BasicCareerListWrapper title='이력서' createTo='re' addNew>
					<SingleAsyncWrapper height='290px'>
						<CareerSuspenseList
							props={{ docType: 'BASIC', careerType: 'RESUME' }}
							createTo='re'
							CardComponent={CareerBasicCard}
							selectedId={selectedId}
							updateSelectedId={updateSelectedId}
						/>
					</SingleAsyncWrapper>
				</BasicCareerListWrapper>
			</WhiteBoxWrapper>
			<WhiteBoxWrapper type='div' customCss={resumeWrapperStyle}>
				<BasicCareerListWrapper title='자기소개서' createTo='co' addNew>
					<SingleAsyncWrapper height='290px'>
						<CareerSuspenseList
							props={{ docType: 'BASIC', careerType: 'COVERLETTER' }}
							CardComponent={CareerBasicCard}
							selectedId={selectedId}
							updateSelectedId={updateSelectedId}
						/>
					</SingleAsyncWrapper>
				</BasicCareerListWrapper>
			</WhiteBoxWrapper>
		</Container>
	);
}

const containerStyle = css`
	gap: 40px;
`;

const resumeWrapperStyle = css`
	min-height: 300px;
	padding: 50px;
	display: flex;
	flex-direction: column;
	section {
		display: flex;
		flex-direction: column;
		h3 {
			color: ${({ theme }) => theme.colors.navy};
			font-weight: bold;
			font-size: ${({ theme }) => theme.fontSizes.medium};
		}
		&:not(:last-child) {
			margin-bottom: 70px;
		}
	}
`;
