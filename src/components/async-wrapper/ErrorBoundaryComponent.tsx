import React from 'react';
import { FallbackProps } from 'react-error-boundary';

export default function ErrorBoundaryComponent({
	error,
	resetErrorBoundary,
}: FallbackProps) {
	return (
		<div>
			<div>
				<h1>error</h1>
				<p>{error.message}</p>
				<button onClick={resetErrorBoundary}>reload page</button>
			</div>
		</div>
	);
}
