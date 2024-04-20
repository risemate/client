import useClickOutside from '@hooks/common/useClickOutside';
import React, { ChangeEvent, useRef, useState } from 'react';
import styled from 'styled-components';

import KeywordSuggestions from '@common/KeywordSuggestions';
import Input from '@components/input/Input';

interface SearchInputProps {
	searchText: string;
	inputChange: (event: ChangeEvent<HTMLInputElement>) => void;
	keyword: string;
	suggestions: string[];
	placeholder?: string;
}

export default function SearchInput({
	searchText,
	inputChange,
	keyword,
	suggestions,
	placeholder = '검색하세요.',
}: SearchInputProps) {
	const [isSearchOpen, setIsSearchOpen] = useState(false);
	const searchRef = useRef<HTMLDivElement | null>(null);
	const openSearchList = () => setIsSearchOpen(true);
	const closeSearchList = () => setIsSearchOpen(false);
	useClickOutside([searchRef], closeSearchList);
	return (
		<InputWrapper ref={searchRef}>
			<Input
				value={searchText}
				onChange={inputChange}
				onFocus={openSearchList}
				placeholder={placeholder}
			/>
			{isSearchOpen && (
				<SuggestionWrapper>
					<KeywordSuggestions keyword={keyword} suggestions={suggestions} />
				</SuggestionWrapper>
			)}
		</InputWrapper>
	);
}

const InputWrapper = styled.div`
	position: relative;
`;

const SuggestionWrapper = styled.div`
	width: 100%;
	position: absolute;
	margin-top: 20px;
	z-index: 1;
`;
