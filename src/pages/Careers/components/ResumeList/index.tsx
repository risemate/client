import CareerBasicCard from 'pages/Careers/components/ResumeList/CareerBasicCard';
import { css } from 'styled-components';

import WhiteBoxWrapper from '@components/base-wrappers/WhiteBoxWrapper';
import Container from '@components/layout/Container';

import BasicCareerList from '../../../../components/resume-view/BasicCareerList';
import useCareerList from './CareerList.hook';

export default function Resume() {
	const { resumes, coverLetters, to } = useCareerList();
	return (
		<Container backgroundColor='lightGrey' center padding>
			<h2 className='a11y-hidden' style={{ width: '100%', padding: '0 20px' }}>
				이력서
			</h2>
			<WhiteBoxWrapper type='div' customCss={resumeWrapperStyle}>
				<BasicCareerList
					title='이력서'
					resumes={resumes}
					createTo='re'
					CardComponent={CareerBasicCard}
					addNew
				/>
			</WhiteBoxWrapper>
			<WhiteBoxWrapper type='div' customCss={resumeWrapperStyle}>
				<BasicCareerList
					title='자기소개서'
					resumes={coverLetters}
					createTo='co'
					CardComponent={CareerBasicCard}
					addNew
				/>
			</WhiteBoxWrapper>
		</Container>
	);
}

const resumeWrapperStyle = css`
	min-height: 300px;
	padding: 50px;
	margin: 10px 0 40px;
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
