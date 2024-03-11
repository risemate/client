import React, { ReactNode } from 'react';

interface RequestFormConsentProps {
	children: ReactNode;
}

export default function RequestFormConsent({ children }: RequestFormConsentProps) {
	return <div>{children}</div>;
}
