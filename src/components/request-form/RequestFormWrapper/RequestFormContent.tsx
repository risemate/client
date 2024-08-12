import { ReactNode } from 'react';
import styled from 'styled-components';

interface RequestFormContentProps {
	title?: string;
	children: ReactNode;
}

export default function RequestFormContent({ title, children }: RequestFormContentProps) {
	return (
		<ContentSection>
			{title && <h2>{title}</h2>}
			{children}
		</ContentSection>
	);
}

const ContentSection = styled.section``;
