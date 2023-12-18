import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface ContentItemProps {
	children: ReactNode;
	gridColumn?: '1' | '1/2' | '1/3' | '1/4' | '2/3' | '2/4' | '3/4';
}

export default function BaseSectionContentItem({
	children,
	gridColumn,
}: ContentItemProps) {
	return <ContentItem $gridColumn={gridColumn}>{children}</ContentItem>;
}

interface StyledItemProps {
	$gridColumn?: '1' | '1/2' | '1/3' | '1/4' | '2/3' | '2/4' | '3/4';
}

const ContentItem = styled.li<StyledItemProps>`
	${({ $gridColumn }) => $gridColumn && `grid-column: ${$gridColumn}`}
`;
