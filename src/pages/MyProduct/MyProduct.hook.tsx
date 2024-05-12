import { myProductQuery } from '@queries/product';
import { Product } from 'types/coach/product';
import { mockProduct } from 'types/coach/productData';

export default function useMyProduct() {
	const myProducts = myProductQuery();

	return {
		// myProducts: myProducts.data || [],
		myProducts: [mockProduct],
	};
}
