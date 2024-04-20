import { IconCloseSharp } from '@icons';
import React from 'react';
import styled from 'styled-components';

interface SearchListProps {
	items: string[] | null;
	removeSelectedItem: (index: number) => void;
}

export default function SearchList({ items, removeSelectedItem }: SearchListProps) {
	return (
		<StyledSearchList>
			{items &&
				items.map((item: string, index: number) => (
					<li key={index}>
						{item}
						<button type='button' onClick={() => removeSelectedItem(index)}>
							<IconCloseSharp />
						</button>
					</li>
				))}
		</StyledSearchList>
	);
}

const StyledSearchList = styled.ul`
	display: flex;
	gap: 10px;
	margin: 20px 0;
	flex-wrap: wrap;
	li {
		width: fit-content;
		background: ${({ theme }) => theme.colors.grey};
		border-radius: 50px;
		padding: 8px 15px;
		color: white;
		display: flex;
		align-items: center;
		white-space: pre;
	}
	button {
		color: white;
		height: 16px;
		margin-left: 3px;
	}
`;
