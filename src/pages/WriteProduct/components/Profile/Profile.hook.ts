import { useEffect, useRef } from 'react';
import { useController, useFormContext } from 'react-hook-form';

export default function useProfile() {
	const { control, watch, setValue } = useFormContext();
	// 컴포넌트가 처음 렌더링될 때 초기값 설정
	const initialCoverImage = useRef<string | undefined>(undefined);
	useEffect(() => {
		if (!initialCoverImage.current) {
			initialCoverImage.current = watch('coverImage');
		}
	}, []);
	const {
		field: productTitleField,
		fieldState: { error: productTitleError },
	} = useController({
		control,
		name: 'productTitle',
		rules: { required: true },
	});
	const { field: subTitleField } = useController({
		control,
		name: 'subTitle',
	});
	const { field: descriptionField } = useController({
		control,
		name: 'description',
	});

	const coverImageField = {
		initialImageUrl: initialCoverImage.current,
		imageUrl: watch('coverImage'),
		updateImageUrl: (newUrl: string) =>
			setValue('coverImage', newUrl, { shouldDirty: true }),
	};

	return {
		productTitleField,
		productTitleError,
		subTitleField,
		descriptionField,
		coverImageField,
	};
}
