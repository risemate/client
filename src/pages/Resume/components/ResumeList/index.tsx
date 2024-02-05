import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import { isEmpty } from '@utils/helpers';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { css } from 'styled-components';

import Empty from '@common/Empty';
import Loader from '@common/Loader';
import ErrorBoundaryComponent from '@components/errors/ErrorBoundaryComponent';
import Container from '@components/layout/Container';
import WhiteBoxWrapper from '@components/wrappers/WhiteBoxWrapper';

import BasicResumeList from '../BasicResumeList';
import useResumeList from './ResumeList.hook';

export default function Resume() {
	const { reset } = useQueryErrorResetBoundary();
	const { resumes, coverLetters, moveToNewResume } = useResumeList();
	return (
		<Container backgroundColor='lightGrey' center>
			<h2 className='a11y-hidden'>나의 이력서</h2>
			<WhiteBoxWrapper type='div' customCss={resumeWrapperStyle}>
				<ErrorBoundary
					FallbackComponent={ErrorBoundaryComponent}
					onError={() => console.error('error!!!')}
					onReset={reset}
				>
					<Suspense fallback={<Loader />}>
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
					</Suspense>
				</ErrorBoundary>
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
