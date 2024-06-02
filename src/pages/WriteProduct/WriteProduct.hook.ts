import { useSearchParam } from '@hooks/common/useSearchParam';
import {
	productCreateMutation,
	productDetailQuery,
	productUpdateMutation,
} from '@queries/product';
import { isEmpty } from '@utils/helpers';
import { KeyboardEvent } from 'react';
import { useForm } from 'react-hook-form';
import { ProductRequest } from 'types/coach/product';
import { defaultProduct } from 'types/coach/productData';

export default function useWriteProduct() {
	const { queryParam: productId } = useSearchParam<string>('id');
	const isNewProduct = isEmpty(productId);

	const productDetail = productDetailQuery(productId);
	const product = isNewProduct ? defaultProduct : productDetail.data;
	const productEditMethods = useForm<ProductRequest>({
		mode: 'onSubmit',
		values: product,
	});

	const createProductMutation = productCreateMutation();
	const updateProductMutation = productUpdateMutation();

	const { handleSubmit } = productEditMethods;
	const submitProduct = handleSubmit(data => {
		if (isNewProduct) {
			createProductMutation.mutate(data);
		} else {
			updateProductMutation.mutate(data);
		}
	});
	const preventEnter = (event: KeyboardEvent) => {
		if (event.key === 'Enter') event.preventDefault();
	};

	return { productEditMethods, submitProduct, preventEnter };
}
