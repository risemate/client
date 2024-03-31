import { productDetailQuery } from '@queries/product';

export default function useExpertDetail(id: string) {
	const { data } = productDetailQuery(id);
	return {
		product: {
			...data,
		},
	};
}
