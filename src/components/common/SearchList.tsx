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
	border: 1px solid ${({ theme }) => theme.colors.grey};
	border-radius: 10px;
	${({ theme }) => theme.common.flexCenterColumn};
	gap: 10px;
	padding: 10px;
	li {
		width: 100%;
		font-size: ${({ theme }) => theme.fontSizes.small};
		button {
			width: 100%;
			padding: 5px 0;
			&:hover {
				background: ${({ theme }) => theme.colors.lightGrey};
			}
		}
	}
`;
