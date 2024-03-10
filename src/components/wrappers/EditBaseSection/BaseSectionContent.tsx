import { ReactNode } from 'react';
import { UseFieldArraySwap } from 'react-hook-form';
import styled from 'styled-components';

import EditButton from '@components/wrappers/EditBaseSection/EditButton';

interface ContentProps {
	title?: string;
	children: ReactNode;
	gridColumn?: '1' | '2' | '3';
	editButton?: {
		index: number;
		remove: () => void;
		swap: UseFieldArraySwap;
		length: number;
	};
}

export default function BaseSectionContent({
	title,
	children,
	gridColumn,
	editButton,
}: ContentProps) {
	return (
		<ContentArticle>
			{title && <h4>{title}</h4>}
			<ContentList $gridColumn={gridColumn}>{children}</ContentList>
			{editButton && (
				<EditButton
					index={editButton.index}
					remove={editButton.remove}
					swap={editButton.swap}
					length={editButton.length}
				/>
			)}
		</ContentArticle>
	);
}

const ContentArticle = styled.article`
	position: relative;
	h4 {
		color: ${({ theme }) => theme.colors.navy};
		font-weight: bold;
		margin-bottom: 20px;
	}
`;

interface StyledListProps {
	$gridColumn?: '1' | '2' | '3';
}

const ContentList = styled.ul<StyledListProps>`
	display: grid;
	gap: 20px;
	${({ $gridColumn }) => {
		switch ($gridColumn) {
			case '2':
				return 'grid-template-columns: repeat(2, 1fr)';
			case '3':
				return 'grid-template-columns: repeat(3, 1fr)';
		}
	}};
`;
