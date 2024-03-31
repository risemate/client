import { productsQuery } from '@queries/product';
import { CareerType } from 'types/career/resume';

export default function useExperts(careerType: CareerType | undefined) {
	const products = productsQuery();
	return {
		experts: products.data?.data || [],
	};
}
