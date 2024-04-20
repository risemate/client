import { useController, useFormContext } from 'react-hook-form';

export default function useProfile() {
	const { control } = useFormContext();
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

	return {
		productTitleField,
		productTitleError,
		subTitleField,
		descriptionField,
	};
}
