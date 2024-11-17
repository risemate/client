import { Profile as ProfileType } from 'types/career/resume';
import {
	PackageDetail,
	PackageProviderOption,
	ProductRequest,
	Product as ProductType,
} from 'types/coach/product';

export const defaultProviderOptions: PackageProviderOption = {
	name: '',
	description: '',
};

export const defaultPackage: PackageDetail = {
	packageName: 'BASIC',
	price: null,
	packageTitle: '',
	description: '',
	providerOptions: [defaultProviderOptions, defaultProviderOptions],
	_id: '6562b04c461c70f74b259dd5',
};

export const convertToProfile = ({
	productTitle,
	subTitle,
	coverImage,
}: Partial<ProductType>): ProfileType => {
	return {
		name: productTitle || '',
		email: '',
		phoneNumber: '',
		profileImage: coverImage || '',
		position: subTitle || '',
		job: '',
		birthday: '',
		links: [],
	};
};

export type Profile = {
	name: string;
	email: string;
	phoneNumber: string;
	profileImage: string;
	position: string;
	description: string;
};

export const defaultProduct: ProductRequest = {
	_id: '',
	productTitle: '',
	subTitle: '',
	coverImage: '',
	images: [],
	description: '',
	searchKeyword: [],
	careerTypes: ['RESUME'],
	packages: {
		BASIC: defaultPackage,
		ADVANCED: defaultPackage,
		PREMIUM: defaultPackage,
	},
	public: false,
	// defaultPrice: null,
};
