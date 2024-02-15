import { isEmpty } from '@utils/helpers';
import { css } from 'styled-components';

import Empty from '@common/Empty';
import SingleAsyncWrapper from '@components/async-wrapper/SingleAsyncWrapper';
import Container from '@components/layout/Container';
import WhiteBoxWrapper from '@components/wrappers/WhiteBoxWrapper';

import BasicResumeList from '../BasicResumeList';
import useResumeList from './ResumeList.hook';

export default function Resume() {
	const { resumes, coverLetters, moveToNewResume } = useResumeList();
	return (
		<Container backgroundColor='lightGrey' center padding>
			<h2 className='a11y-hidden'>나의 이력서</h2>
			<WhiteBoxWrapper type='div' customCss={resumeWrapperStyle}>
				<SingleAsyncWrapper>
					{isEmpty(resumes) && isEmpty(coverLetters) ? (
						<Empty btnText='새 이력서 작성하기' onClick={moveToNewResume}>
							아직 작성하신 이력서/자기소개서가 없습니다
						</Empty>
					) : (
						<>
							<BasicResumeList title='이력서' resumes={resumes} />
							<BasicResumeList title='자기소개서' resumes={coverLetters} />
						</>
					)}
				</SingleAsyncWrapper>
			</WhiteBoxWrapper>
		</Container>
	);
}

const resumeWrapperStyle = css`
	min-height: 775px;
	padding: 50px;
	margin: 75px 0;
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
