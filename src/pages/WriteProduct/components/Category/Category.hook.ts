import techStackData from '@data/techstack.json';
import useSearch from '@hooks/useSearch';
import { ChangeEvent, KeyboardEvent } from 'react';
import { useController, useFieldArray, useFormContext } from 'react-hook-form';
import { Category } from 'types/coach/product';

export default function useCategory() {
	const { control } = useFormContext();
	const { field: careerTypesField } = useController({
		control,
		name: 'careerTypes',
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
		careerTypes: {
			options: Category,
			field: {
				...careerTypesField,
				onChange: (e: ChangeEvent<HTMLSelectElement>) => {
					const categoryMap: { [key: string]: string[] } = {
						'이력서': ['RESUME'],
						'자기소개서': ['COVERLETTER'],
						'이력서/자기소개서': ['RESUME', 'COVERLETTER'],
					};

					const newCategory = categoryMap[e.target.value] || [];
					careerTypesField.onChange(newCategory);
				}
			},
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
