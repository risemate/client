import { productCreateMutation, productUpdateMutation } from '@queries/product';
import { KeyboardEvent } from 'react';
import { useForm } from 'react-hook-form';
import { Product } from 'types/coach/product';
import { defaultProduct } from 'types/coach/productData';

export default function useWriteProduct() {
	const createProductMutation = productCreateMutation();
	const createUpdateMutation = productUpdateMutation();
	const productInfo = defaultProduct;
	const productEditMethods = useForm<Partial<Product>>({
		mode: 'onSubmit',
		values: productInfo,
	});
	const { handleSubmit } = productEditMethods;
	const submitProduct = handleSubmit(data => {
		// createProductMutation.mutate(data);
	});
	const preventEnter = (event: KeyboardEvent) => {
		if (event.key === 'Enter') event.preventDefault();
	};

	return { productEditMethods, submitProduct, preventEnter };
}
