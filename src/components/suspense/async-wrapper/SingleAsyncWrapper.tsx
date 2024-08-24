import { QueryErrorResetBoundary } from '@tanstack/react-query';
import { ReactNode, Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import Spinner from '@common/Spinner';

import ErrorFallback from '../error-fallback/ErrorFallback';

interface SingleAsyncWrapperProps {
	height?: string;
	children: ReactNode;
}

export default function SingleAsyncWrapper({
	height,
	children,
}: SingleAsyncWrapperProps) {
	return (
		<QueryErrorResetBoundary>
			{({ reset }) => (
				<ErrorBoundary
					FallbackComponent={ErrorFallback}
					onError={e => console.error('Error caught by ErrorBoundary:', e)}
					onReset={reset}
				>
					<Suspense fallback={<Spinner height={height} />}>{children}</Suspense>
				</ErrorBoundary>
			)}
		</QueryErrorResetBoundary>
	);
}
