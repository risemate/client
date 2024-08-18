import {
	QueryErrorResetBoundary,
	useQueryErrorResetBoundary,
} from '@tanstack/react-query';
import { ReactNode, Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import Spinner from '@common/Spinner';

import ErrorBoundaryComponent from './ErrorBoundaryComponent';

interface SingleAsyncWrapperProps {
	children: ReactNode;
}

export default function SingleAsyncWrapper({ children }: SingleAsyncWrapperProps) {
	const { reset } = useQueryErrorResetBoundary();
	return (
		<QueryErrorResetBoundary>
			<ErrorBoundary
				FallbackComponent={ErrorBoundaryComponent}
				onError={e => console.error('error!!!', e)}
				onReset={reset}
			>
				<Suspense fallback={<Spinner />}>{children}</Suspense>
			</ErrorBoundary>
		</QueryErrorResetBoundary>
	);
}
