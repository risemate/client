import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface RequestFormMessageProps {
	title?: string;
	children: ReactNode;
}

export default function RequestFormMessage({
	title = '추가 메시지',
	children,
}: RequestFormMessageProps) {
	return (
		<MessageSection>
			<h2>{title}</h2>
			{children}
		</MessageSection>
	);
}

const MessageSection = styled.section``;
