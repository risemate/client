import techStackData from '@data/techstack.json';
import useSearch from '@hooks/useSearch';
import { KeyboardEvent } from 'react';
import { useController, useFieldArray, useFormContext } from 'react-hook-form';
import { Category } from 'types/coach/product';

export default function useCategory() {
	const { control } = useFormContext();
	const { field: rootCategoryField } = useController({
		control,
		name: 'category.rootCategory',
	});
	const { field: subCategoryField } = useController({
		control,
		name: 'category.subCategory',
	});
	const searchKeywordFieldArray = useFieldArray({
		control,
		name: 'searchKeyword',
	});
	const { field: searchKeywordField } = useController({
		control,
		name: 'searchKeyword',
	});
	const { searchText, suggestions, inputChange, handleEnterKeyword } = useSearch(
		20,
		techStackData.default,
		techStackData.keyword,
	);

	const appendKeyword = () => searchKeywordFieldArray.append(searchText);

	return {
		rootCategory: {
			options: Category,
			field: rootCategoryField,
		},
		subCategory: {
			options: Category,
			field: subCategoryField,
		},
		searchKeyword: {
			field: {
				items: searchKeywordField.value,
				removeSelectedItem: (index: number) => searchKeywordFieldArray.remove(index),
			},
			inputField: {
				title: '검색 키워드',
				searchText,
				inputChange,
				keyword: 'searchKeyword',
				suggestions,
				placeholder: '검색 키워드를 추가하세요.',
				handleEnter: (event: KeyboardEvent) => handleEnterKeyword(event, appendKeyword),
			},
		},
	};
}
