import { useController, useFormContext } from 'react-hook-form';

export default function usePackage() {
	const { control, register } = useFormContext();

	// const { field: basicPackageField } = useController({
	//     control,
	//     name: 'packages.BASIC'
	// })
	// const { field: advancedPackageField } = useController({
	//     control,
	//     name: 'packagaes.ADVANCED'
	// })
	// const { field: premiumPackageField } = useController({
	//     control,
	//     name: 'packages.PREMIUM'
	// })
	return {
		basicPackage: {
			packageTitle: register('packages.BASIC.packageTitle'),
			price: register('packages.BASIC.price'),
			description: register('packages.BASIC.description'),
		},
		advancedPackage: {
			packageTitle: register('packages.ADVANCED.packageTitle'),
			price: register('packages.ADVANCED.price'),
			description: register('packages.ADVANCED.description'),
		},
		premiumPackage: {
			packageTitle: register('packages.PREMIUM.packageTitle'),
			price: register('packages.PREMIUM.price'),
			description: register('packages.PREMIUM.description'),
		},
	};
}
