import { isEmpty } from '@utils/helpers';
import React from 'react';
import styled from 'styled-components';

interface SearchListProps {
	suggestions: string[];
	handleSuggestionClick: (keyword: string) => void;
}

export default function SearchList({
	suggestions,
	handleSuggestionClick,
}: SearchListProps) {
	return (
		<StyledSearchList>
			{isEmpty(suggestions) && <li>추천 검색어가 없습니다</li>}
			{suggestions.map((suggestion, index) => (
				<li key={index}>
					<button type='button' onClick={() => handleSuggestionClick(suggestion)}>
						{suggestion}
					</button>
				</li>
			))}
		</StyledSearchList>
	);
}

const StyledSearchList = styled.ul`
	background: white;
	border: 0.5px solid ${({ theme }) => theme.colors.grey};
	border-radius: 10px;
	display: flex;
	flex-wrap: wrap;
	gap: 10px;
	padding: 20px;
	color: ${({ theme }) => theme.colors.darkGrey};
	li {
		button {
			color: ${({ theme }) => theme.colors.darkGrey};
			border-radius: 50px;
			border: 1px solid ${({ theme }) => theme.colors.grey};
			padding: 5px 10px;
			&:hover {
				background: ${({ theme }) => theme.colors.lightGrey};
			}
		}
	}
`;
