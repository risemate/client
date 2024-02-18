import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import React, { Suspense, ReactNode } from 'react';
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
			onError={() => console.error('error!!!')}
			onReset={reset}
		>
			<Suspense fallback={<Loader />}>{children}</Suspense>
		</ErrorBoundary>
	);
}
