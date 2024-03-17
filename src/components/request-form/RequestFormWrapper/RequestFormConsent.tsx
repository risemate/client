import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface RequestFormConsentProps {
	title?: string;
	children: ReactNode;
}

export default function RequestFormConsent({
	title = '공유 동의',
	children,
}: RequestFormConsentProps) {
	return (
		<ConsentSection>
			<h2>{title}</h2>
			{children}
		</ConsentSection>
	);
}

const ConsentSection = styled.section``;
