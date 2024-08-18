import { ReactNode, Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import Spinner from '@common/Spinner';

import GlobalErrorFallback from './GlobalErrorFallback';

interface GloablAsyncWrapperProps {
	children: ReactNode;
}

export default function GlobalAsyncWrapper({ children }: GloablAsyncWrapperProps) {
	return (
		<ErrorBoundary
			FallbackComponent={GlobalErrorFallback}
			onError={e => console.error('Error caught by ErrorBoundary:', e)}
		>
			<Suspense fallback={<Spinner />}>{children}</Suspense>
		</ErrorBoundary>
	);
}
