import { fetchProductDetail, fetchProducts } from '@api/product';
import { useQuery } from '@tanstack/react-query';
import { Product } from 'types/coach/product';
import {
	PagingQueryProps,
	PagingQueryResponse,
	UseQueryOptionsType,
	UseQueryResultType,
} from 'types/query/query';

import { productKeys } from './queryKeys';

export const productsQuery = (
	params?: PagingQueryProps,
	options?: UseQueryOptionsType<PagingQueryResponse<Product>>,
): UseQueryResultType<PagingQueryResponse<Product>> => {
	return useQuery({
		queryKey: productKeys.base,
		queryFn: () => fetchProducts(params),
		...options,
	});
};

export const productDetailQuery = (
	id: string,
	options?: UseQueryOptionsType<Product>,
): UseQueryResultType<Product> => {
	return useQuery({
		queryKey: productKeys.id(id),
		queryFn: () => fetchProductDetail(id),
		...options,
	});
};
