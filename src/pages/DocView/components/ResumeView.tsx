import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { useParams } from 'react-router-dom';

import Loader from '@common/Loader';
import ResumeNav from '@common/ResumeNav';
import ErrorBoundaryComponent from '@components/errors/ErrorBoundaryComponent';
import ResumeTemplate from '@components/resume/ViewTemplate/ResumeView';

import useDocView from '../DocView.hook';

export default function ResumeView() {
	const { id } = useParams();
	const { reset } = useQueryErrorResetBoundary();
	const { resumeDetail, resumeViewNavItems } = useDocView(id || '');

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
			<ResumeNav resumeNavItems={resumeViewNavItems} />
		</ErrorBoundary>
	);
}
