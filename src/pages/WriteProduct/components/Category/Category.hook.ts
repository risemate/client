import techStackData from '@data/techstack.json';
import useSearch from '@hooks/useSearch';
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
	const thirdCategoryFieldArray = useFieldArray({
		control,
		name: 'category.thirdCategory',
	});
	const { field: thirdCategoryField } = useController({
		control,
		name: 'category.thirdCategory',
	});
	const { searchText, suggestions, inputChange } = useSearch(
		20,
		techStackData.default,
		techStackData.keyword,
	);
	return {
		rootCategory: {
			options: Category,
			field: rootCategoryField,
		},
		subCategory: {
			options: Category,
			field: subCategoryField,
		},
		thirdCategory: {
			field: {
				items: thirdCategoryField.value,
				removeSelectedItem: (index: number) => thirdCategoryFieldArray.remove(index),
			},
			inputField: {
				searchText,
				inputChange,
				keyword: 'category.thirdCategory',
				suggestions,
				placeholder: '카테고리를 검색하세요.',
			},
		},
	};
}
