import { productDetailQuery } from '@queries/product';

export default function useExpertDetail(id: string) {
	const { data, isLoading } = productDetailQuery(id);
	return {
		product: {
			...data,
		},
		isLoading,
	};
}
