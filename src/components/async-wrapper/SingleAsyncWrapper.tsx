import { QueryErrorResetBoundary } from '@tanstack/react-query';
import { ReactNode, Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import Spinner from '@common/Spinner';

import ErrorFallback from './ErrorFallback';

interface SingleAsyncWrapperProps {
	children: ReactNode;
}

export default function SingleAsyncWrapper({ children }: SingleAsyncWrapperProps) {
	return (
		<QueryErrorResetBoundary>
			{({ reset }) => (
				<ErrorBoundary
					FallbackComponent={ErrorFallback}
					onError={e => console.error('Error caught by ErrorBoundary:', e)}
					onReset={reset}
				>
					<Suspense fallback={<Spinner />}>{children}</Suspense>
				</ErrorBoundary>
			)}
		</QueryErrorResetBoundary>
	);
}
