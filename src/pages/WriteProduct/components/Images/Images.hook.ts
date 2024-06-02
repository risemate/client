import { useCallback } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';

import { FileInfoType } from '@common/ImageUpload';

export default function useImages() {
	const { control, watch } = useFormContext();

	const { swap, append, remove } = useFieldArray({
		control,
		name: 'images',
	});

	const images = watch('images') as FileInfoType[];

	const setImages = async (files: FileInfoType[]) => {
		append(files);
	};

	const moveItem = useCallback(
		(dragIndex: number, hoverIndex: number) => {
			swap(dragIndex, hoverIndex);
		},
		[images, swap],
	);
	return {
		images,
		moveItem,
		setImages,
		remove: (index: number) => remove(index),
	};
}
