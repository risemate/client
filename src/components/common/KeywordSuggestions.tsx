import { isEmpty } from '@utils/helpers';
import React from 'react';
import { useFormContext } from 'react-hook-form';
import styled from 'styled-components';

interface KeywordSuggestionProps {
	keyword: string;
	suggestions: string[];
}

export default function KeywordSuggestions({
	keyword,
	suggestions,
}: KeywordSuggestionProps) {
	const { getValues, setValue } = useFormContext();

	const onClickedSuggetionItem = (item: string) => {
		const storedList = getValues(keyword);
		if (storedList.includes(item)) {
			setValue(keyword, [...storedList.filter((store: string) => store !== item)]);
		} else {
			setValue(keyword, [...storedList, item]);
		}
	};

	return (
		<SuggestonsWrapper>
			{isEmpty(suggestions) && <p>추천 검색어가 없습니다</p>}
			{suggestions.map((item, index) => (
				<SuggestionItemButton
					key={index}
					type='button'
					onClick={() => onClickedSuggetionItem(item)}
					$selected={getValues(keyword).includes(item)}
				>
					{item}
				</SuggestionItemButton>
			))}
		</SuggestonsWrapper>
	);
}

const SuggestonsWrapper = styled.div`
	width: 100%;
	background: white;
	border: 0.5px solid ${({ theme }) => theme.colors.grey};
	border-radius: 10px;
	display: flex;
	flex-wrap: wrap;
	gap: 10px;
	padding: 20px;
	color: ${({ theme }) => theme.colors.darkGrey};
`;

const SuggestionItemButton = styled.button<{ $selected: boolean }>`
	color: ${({ theme }) => theme.colors.darkGrey};
	border-radius: 50px;
	border: 1px solid ${({ theme }) => theme.colors.grey};
	padding: 5px 15px;
	&:hover {
		background: ${({ theme }) => theme.colors.grey};
	}
	background: ${({ theme, $selected }) => ($selected ? theme.colors.lightGrey : 'white')};
`;
