import CareerBasicCard from 'pages/Careers/components/ResumeList/CareerBasicCard/CareerBasicCard';
import { css } from 'styled-components';

import WhiteBoxWrapper from '@components/base-wrappers/WhiteBoxWrapper';
import Container from '@components/layout/Container';

import BasicCareerList from '../../../../components/resume-view/BasicCareerList';
import useCareerList from './ResumeList.hook';

export default function ResumeList() {
	const { resumes, coverLetters, to, selectedId } = useCareerList();
	return (
		<Container backgroundColor='lightGrey' center padding>
			<h2 className='a11y-hidden'>이력서</h2>
			<WhiteBoxWrapper type='div' customCss={resumeWrapperStyle}>
				<BasicCareerList
					title='이력서'
					resumes={resumes}
					createTo='re'
					CardComponent={CareerBasicCard}
					selectedId={selectedId.value}
					updateSelectedId={selectedId.update}
					addNew
				/>
			</WhiteBoxWrapper>
			<WhiteBoxWrapper type='div' customCss={resumeWrapperStyle}>
				<BasicCareerList
					title='자기소개서'
					resumes={coverLetters}
					createTo='co'
					CardComponent={CareerBasicCard}
					selectedId={selectedId.value}
					updateSelectedId={selectedId.update}
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
