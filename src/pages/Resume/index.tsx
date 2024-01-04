import { isEmpty } from '@utils/helpers';
import AddResume from 'pages/Resume/components/AddResume';
import styled, { css } from 'styled-components';
import { mockResume } from 'types/Resume/data';

import Empty from '@common/Empty';
import CareerBasicCard from '@components/resume/Card/CareerBasicCard';
import WhiteBoxWrapper from '@components/wrappers/WhiteBoxWrapper';
import useResume from './Resume.hook';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorBoundaryComponent from '@components/errors/ErrorBoundaryComponent';
import { Suspense } from 'react';
import { QueryErrorResetBoundary } from '@tanstack/react-query';

export default function Resume() {
	const resumes = [mockResume];
	const {resume} = useResume();
	console.log(resume);
	return (
		<>
			<h2 className='a11y-hidden'>나의 이력서</h2>
			<WhiteBoxWrapper type='div' customCss={resumeWrapperStyle}>
				{isEmpty(resumes) && <Empty name='이력서가' moveToLink={() => alert('hello')} />}
				<QueryErrorResetBoundary>
					{({reset}) => (
						<ErrorBoundary
						FallbackComponent={ErrorBoundaryComponent}
						onError={() => console.log("error!!!")}
						onReset={reset}
					>
						<Suspense>
							<section>
								<h3>이력서</h3>
								<ResumeList>
									<AddResume />
									{resumes.map(resume => (
										<CareerBasicCard key={resume._id} career={resume} />
									))}
								</ResumeList>
							</section>
						</Suspense>
					</ErrorBoundary>
					)}
				</QueryErrorResetBoundary>
				{/* <section>
					<h3>자기소개서</h3>
					<ResumeList>
						<AddResume />
						{resumes.map(resume => (
							<CareerBasicCard key={resume._id} career={resume} />
						))}
					</ResumeList>
				</section> */}
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
