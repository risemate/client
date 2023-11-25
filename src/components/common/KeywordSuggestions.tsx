import { isEmpty } from '@utils/helpers';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

interface KeywordSuggestionProps {
	keyword: string;
	keywordList: string[];
	selectItems: string[];
	setSelectItems: React.Dispatch<React.SetStateAction<string[]>>;
	maxSuggestion?: number;
}

export default function KeywordSuggestions({
	keyword,
	keywordList,
	selectItems,
	setSelectItems,
	maxSuggestion = 20,
}: KeywordSuggestionProps) {
	const [suggestions, setSuggestions] = useState<string[]>([]);

	const getSuggestions = (keyword: string) => {
		const filteredData = keywordList.filter(item =>
			item.toLowerCase().includes(keyword.toLowerCase()),
		);
		return filteredData;
	};

	const onClickedSuggetionItem = (item: string) => {
		setSelectItems(pre => {
			if (pre.includes(item)) {
				return pre.filter(v => v !== item);
			} else return [...pre, item];
		});
	};

	useEffect(() => {
		if (!keyword) {
			return setSuggestions(['react', 'java', 'python', 'pytorch', 'tensorflow']);
		}
		setSuggestions(getSuggestions(keyword).slice(0, maxSuggestion));
	}, [keyword]);

	return (
		<StyledSuggestonsWrap>
			{isEmpty(suggestions) && <p>추천 검색어가 없습니다</p>}
			{suggestions.map((item, index) => (
				<Item
					key={index}
					type='button'
					onClick={() => onClickedSuggetionItem(item)}
					style={{ borderColor: selectItems.includes(item) ? 'blue' : '' }}
				>
					{item}
				</Item>
			))}
		</StyledSuggestonsWrap>
	);
}

const StyledSuggestonsWrap = styled.div`
	position: relative;
	background: white;
	border: 1px solid ${({ theme }) => theme.colors.grey};
	border-radius: 10px;
	${({ theme }) => theme.common.flexCenterColumn};
	gap: 10px;
	padding: 25px 10px;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	flex-wrap: wrap;
	font-size: ${({ theme }) => theme.fontSizes.small};
	z-index: 1;
`;

const Item = styled.button`
	padding: 5px 10px;
	border: solid 1px #5050504c;
	border-radius: 5px;
	white-space: pre;
	font-size: ${({ theme }) => theme.fontSizes.small};
	&:hover {
		background: ${({ theme }) => theme.colors.lightGrey};
	}
`;
