import { isKoreanSingleCharacter } from '@utils/helpers';
import { ChangeEvent, useCallback, useState } from 'react';

export default function useSearch(searchLimit: number, data: string[]) {
	const SEARCH_LIMIT = searchLimit;
	const [searchText, setSearchText] = useState('');
	const [suggestions, setSuggestions] = useState<string[]>(() => []);

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
			setSuggestions([]);
			return;
		}
		getSuggestion(keyword);
	};

	const handleSuggestionClick = useCallback(
		(keyword: string) => {
			setSearchText(keyword);
			getSuggestion(keyword);
		},
		[suggestions],
	);

	const resetSearchText = () => {
		setSearchText('');
		setSuggestions([]);
	};
	return {
		searchText,
		suggestions,
		inputChange,
		handleSuggestionClick,
		resetSearchText,
	};
}
