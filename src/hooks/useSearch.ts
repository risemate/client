import { isKoreanSingleCharacter } from '@utils/helpers';
import { ChangeEvent, useCallback, useState } from 'react';

export default function useSearch(
	searchLimit: number,
	defaultValues: string[],
	data: string[],
) {
	const SEARCH_LIMIT = searchLimit;
	const [searchText, setSearchText] = useState('');
	const [suggestions, setSuggestions] = useState<string[]>(defaultValues);

	const getSuggestion = async (keyword: string) => {
		const filteredData = data.filter(item =>
			item.toLowerCase().includes(keyword.toLowerCase()),
		);
		setSuggestions(filteredData.slice(0, SEARCH_LIMIT));
	};

	const inputChange = (event: ChangeEvent<HTMLInputElement>) => {
		const keyword = event.target.value;
		setSearchText(keyword);
		if (isKoreanSingleCharacter(keyword)) return;
		if (!keyword) {
			setSuggestions(defaultValues);
		} else {
			getSuggestion(keyword);
		}
	};

	const handleSuggestionClick = useCallback(
		(callback: () => void) => {
			resetSearchText();
			callback();
		},
		[suggestions],
	);

	const resetSearchText = () => {
		setSearchText('');
		setSuggestions(defaultValues);
	};

	return {
		searchText,
		suggestions,
		inputChange,
		handleSuggestionClick,
		resetSearchText,
	};
}
