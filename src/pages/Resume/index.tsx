import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import { isEmpty } from '@utils/helpers';
import AddResume from 'pages/Resume/components/AddResume';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import styled, { css } from 'styled-components';

import Empty from '@common/Empty';
import Loader from '@common/Loader';
import ErrorBoundaryComponent from '@components/errors/ErrorBoundaryComponent';
import CareerBasicCard from '@components/resume/Card/CareerBasicCard';
import WhiteBoxWrapper from '@components/wrappers/WhiteBoxWrapper';

import useResume from './Resume.hook';

export default function Resume() {
	// const {showBoundary} = useErrorBoundary();
	const { reset } = useQueryErrorResetBoundary();
	const { resumes, coverLetters } = useResume();
	return (
		<>
			<h2 className='a11y-hidden'>나의 이력서</h2>
			<WhiteBoxWrapper type='div' customCss={resumeWrapperStyle}>
				<Suspense>
					{isEmpty(resumes) && (
						<Empty name='이력서가' moveToLink={() => alert('hello')} />
					)}
					<ErrorBoundary
						FallbackComponent={ErrorBoundaryComponent}
						onError={() => console.log('error!!!')}
						onReset={reset}
					>
						<section>
							<h3>이력서</h3>
							<Suspense fallback={<Loader />}>
								<ResumeList>
									<AddResume />
									{resumes.map(resume => (
										<CareerBasicCard key={resume._id} career={resume} />
									))}
								</ResumeList>
							</Suspense>
						</section>
					</ErrorBoundary>
					<section>
						<h3>자기소개서</h3>
						<Suspense fallback={<Loader />}>
							<ResumeList>
								<AddResume />
								{coverLetters.map(resume => (
									<CareerBasicCard key={resume._id} career={resume} />
								))}
							</ResumeList>
						</Suspense>
					</section>
				</Suspense>
			</WhiteBoxWrapper>
		</>
	);
}

const resumeWrapperStyle = css`
	min-height: 500px;
	padding: 50px;
	section {
		display: flex;
		flex-direction: column;
		h3 {
			color: ${({ theme }) => theme.colors.navy};
			font-weight: bold;
			font-size: ${({ theme }) => theme.fontSizes.medium};
			margin-bottom: 30px;
		}
		&:not(:last-child) {
			margin-bottom: 70px;
		}
	}
`;

const ResumeList = styled.ul`
	width: 100%;
	display: flex;
	gap: 20px;
	justify-content: start;
	overflow-x: hidden;
`;
