import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { useNavigate, useParams } from 'react-router-dom';
import { mockResume } from 'types/Resume/data';

import Loader from '@common/Loader';
import ResumeNav from '@common/ResumeNav';
import ErrorBoundaryComponent from '@components/errors/ErrorBoundaryComponent';
import ResumeTemplate from '@components/resume/ViewTemplate/ResumeView';

import useDocView from '../DocView.hook';

export default function ResumeView() {
	const { id } = useParams();
	const { reset } = useQueryErrorResetBoundary();
	// TODO: params undefined 처리
	const { resumeDetail } = useDocView(id || 'error');
	console.log(resumeDetail);
	const navigate = useNavigate();
	const resumeNavItems = [
		{ name: '이력서 수정', onClick: () => navigate(`edit`) },
		{ name: 'AI 첨삭 받기', onClick: () => alert('hi') },
		{ name: '전문가 찾아보기', onClick: () => alert('hi') },
	];

	return (
		<ErrorBoundary
			FallbackComponent={ErrorBoundaryComponent}
			onError={() => console.error('error!!!')}
			onReset={reset}
		>
			<Suspense fallback={<Loader />}>
				{/* TODO: 해결 */}
				{resumeDetail && <ResumeTemplate career={resumeDetail.doc} />}
			</Suspense>
			<ResumeNav resumeNavItems={resumeNavItems} />
		</ErrorBoundary>
	);
}
