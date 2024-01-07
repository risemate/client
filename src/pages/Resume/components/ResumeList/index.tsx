import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import { isEmpty } from '@utils/helpers';
import { ErrorBoundary } from 'react-error-boundary';
import { css } from 'styled-components';

import Empty from '@common/Empty';
import ErrorBoundaryComponent from '@components/errors/ErrorBoundaryComponent';
import WhiteBoxWrapper from '@components/wrappers/WhiteBoxWrapper';

import BasicResumeList from '../BasicResumeList';
import useResumeList from './ResumeList.hook';

export default function Resume() {
	// const {showBoundary} = useErrorBoundary();
	const { reset } = useQueryErrorResetBoundary();
	const { resumes, coverLetters, moveToNewResume } = useResumeList();
	return (
		<>
			<h2 className='a11y-hidden'>나의 이력서</h2>
			<WhiteBoxWrapper type='div' customCss={resumeWrapperStyle}>
				{isEmpty(resumes) ? (
					<Empty name='이력서가' moveToLink={moveToNewResume} />
				) : (
					<ErrorBoundary
						FallbackComponent={ErrorBoundaryComponent}
						onError={() => console.error('error!!!')}
						onReset={reset}
					>
						<BasicResumeList title='이력서' resumes={resumes} />
						<BasicResumeList title='자기소개서' resumes={coverLetters} />
					</ErrorBoundary>
				)}
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
