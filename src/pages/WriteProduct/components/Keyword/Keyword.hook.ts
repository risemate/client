import techStackData from '@data/techstack.json';
import useSearch from '@hooks/useSearch';
import { useController, useFieldArray, useFormContext } from 'react-hook-form';

export default function useKeyword() {
	const { control } = useFormContext();
	const { field: searchKeywordField } = useController({
		control,
		name: 'searchKeyword',
	});
	const searchKeywordFieldArray = useFieldArray({
		control,
		name: 'searchKeyword',
	});
	const { searchText, suggestions, inputChange } = useSearch(
		20,
		techStackData.default,
		techStackData.keyword,
	);
	return {
		searchKeyword: {
			field: {
				items: searchKeywordField.value,
				removeSelectedItem: (index: number) => searchKeywordFieldArray.remove(index),
			},
			inputField: {
				searchText,
				inputChange,
				keyword: 'searchKeyword',
				suggestions,
				placeholder: '검색 키워드를 검색하세요.',
			},
		},
	};
}
