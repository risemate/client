import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import { isEmpty } from '@utils/helpers';
import { ErrorBoundary } from 'react-error-boundary';
import { useParams } from 'react-router-dom';
import styled, { css } from 'styled-components';

import Empty from '@common/Empty';
import ErrorBoundaryComponent from '@components/errors/ErrorBoundaryComponent';
import WhiteBoxWrapper from '@components/wrappers/WhiteBoxWrapper';

import BasicResumeList from '../BasicResumeList';
import useResume from '../ResumeList/ResumeList.hook';
import useReviseList from './ReviseList.hook';

export default function ReviseList() {
	const { parentId } = useParams();
	const { reviseResumes } = useReviseList(parentId || '');
	const { reset } = useQueryErrorResetBoundary();
	const { moveToRevise } = useResume();
	return (
		<>
			<h2 className='a11y-hidden'>첨삭 이력서 목록</h2>
			<WhiteBoxWrapper type='div' customCss={resumeWrapperStyle}>
				{isEmpty(reviseResumes) ? (
					<Empty name='이력서가' moveToLink={moveToRevise} />
				) : (
					<ErrorBoundary
						FallbackComponent={ErrorBoundaryComponent}
						onError={() => console.error('error!!!')}
						onReset={reset}
					>
						<BasicResumeList title='첨삭 이력서' resumes={reviseResumes} isRevise />
					</ErrorBoundary>
				)}
			</WhiteBoxWrapper>
		</>
	);
}

const resumeWrapperStyle = css`
	min-height: 500px;
	padding: 50px;
`;

const ResumeList = styled.ul`
	width: 100%;
	display: flex;
	gap: 20px;
	justify-content: start;
	flex-wrap: wrap;
`;
