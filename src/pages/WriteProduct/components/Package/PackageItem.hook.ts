import { useFieldArray, useFormContext } from 'react-hook-form';
import {
	PackageCategory,
	PackageDetail,
	PackageProviderOption,
} from 'types/coach/product';
import { defaultProviderOptions } from 'types/coach/productData';

export default function usePackageItem(category: PackageCategory) {
	const { control, register } = useFormContext();
	const inputName = (detail: keyof PackageDetail) => `packages.${category}.${detail}`;
	const providerOptionsInput = (index: number, detail: keyof PackageProviderOption) =>
		inputName('providerOptions') + `.${index}.${detail}`;

	const providerOptionsFields = useFieldArray({
		control,
		name: `packages.${category}.providerOptions`,
	});

	const disableAdd = providerOptionsFields.fields.length >= 10;

	return {
		packageTitle: register(inputName('packageTitle')),
		price: register(inputName('price')),
		description: register(inputName('description')),
		providerOptions: {
			fields: providerOptionsFields.fields,
			name: (index: number) => register(providerOptionsInput(index, 'name')),
			description: (index: number) =>
				register(providerOptionsInput(index, 'description')),
			append: () => providerOptionsFields.append(defaultProviderOptions),
			remove: (index: number) => providerOptionsFields.remove(index),
		},
		disableAdd,
	};
}
