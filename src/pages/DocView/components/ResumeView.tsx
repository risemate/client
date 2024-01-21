import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { useLocation, useParams } from 'react-router-dom';

import Loader from '@common/Loader';
import ResumeNav from '@common/ResumeNav';
import ErrorBoundaryComponent from '@components/errors/ErrorBoundaryComponent';
import ResumeTemplate from '@components/resume/ViewTemplate/ResumeView';

import useDocView from '../DocView.hook';

export default function ResumeView() {
	const { id } = useParams();
	const { pathname } = useLocation();
	const { reset } = useQueryErrorResetBoundary();
	const { resumeDetail, resumeViewNavItems, isNetwork } = useDocView(id || '', pathname);
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
			{isNetwork || <ResumeNav resumeNavItems={resumeViewNavItems} />}
		</ErrorBoundary>
	);
}
