import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import { ReactNode, Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import Loader from '@common/Loader';

import ErrorBoundaryComponent from './ErrorBoundaryComponent';

interface SingleAsyncWrapperProps {
	children: ReactNode;
}

export default function SingleAsyncWrapper({ children }: SingleAsyncWrapperProps) {
	const { reset } = useQueryErrorResetBoundary();
	return (
		<ErrorBoundary
			FallbackComponent={ErrorBoundaryComponent}
			onError={e => console.error('error!!!', e)}
			onReset={reset}
		>
			<Suspense fallback={<Loader />}>{children}</Suspense>
		</ErrorBoundary>
	);
}
