import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface RequestFormNoteProps {
	title?: string;
	children: ReactNode;
}

export default function RequestFormNote({
	title = '참고 사항',
	children,
}: RequestFormNoteProps) {
	return (
		<NoteSection>
			<h2>{title}</h2>
			{children}
		</NoteSection>
	);
}

const NoteSection = styled.section`
	color: ${({ theme }) => theme.colors.darkGrey};
	line-height: 25px;
	font-size: ${({ theme }) => theme.fontSizes.small};
	& > ul {
		padding-bottom: 10px;
	}
`;
