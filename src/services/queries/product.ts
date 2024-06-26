import {
	fetchCreateProduct,
	fetchDeleteProduct,
	fetchMyProduct,
	fetchProductDetail,
	fetchProducts,
	fetchUpdateProduct,
} from '@api/product';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Product, ProductRequest } from 'types/coach/product';
import {
	NetworkPagingQuery,
	PagingQueryResponse,
	UseMutationOptionsType,
	UseMutationResultType,
	UseQueryOptionsType,
	UseQueryResultType,
} from 'types/query/query';

import { productKeys } from './queryKeys';

// 상품 보기
export const myProductQuery = (
	// careerType?: CareerType,
	options?: UseQueryOptionsType<Product[]>,
): UseQueryResultType<Product[]> => {
	return useQuery({
		queryKey: productKeys.base,
		queryFn: () => fetchMyProduct(),
		...options,
	});
};

export const productsQuery = (
	params?: NetworkPagingQuery,
	options?: UseQueryOptionsType<PagingQueryResponse<Product>>,
): UseQueryResultType<PagingQueryResponse<Product>> => {
	return useQuery({
		queryKey: productKeys.pagingParam(params),
		queryFn: () => fetchProducts(params),
		...options,
	});
};

export const productDetailQuery = (
	id: string,
	options?: UseQueryOptionsType<Product, 'enabled'>,
): UseQueryResultType<Product> => {
	return useQuery({
		queryKey: productKeys.id(id),
		queryFn: () => fetchProductDetail(id),
		enabled: !!id,
		...options,
	});
};

// 상품 포스팅
export const productCreateMutation = (
	options?: UseMutationOptionsType<Product, ProductRequest, 'onSuccess'>,
): UseMutationResultType<Product, ProductRequest> => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (body: ProductRequest) => fetchCreateProduct(body),
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: productKeys.base,
				refetchType: 'active',
			});
		},
		...options,
	});
};

export const productUpdateMutation = (
	options?: UseMutationOptionsType<Product, ProductRequest, 'onSuccess'>,
): UseMutationResultType<Product, ProductRequest> => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (body: ProductRequest) => fetchUpdateProduct(body._id, body),
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: productKeys.base,
				refetchType: 'active',
			});
		},
		...options,
	});
};

export const productDeleteMutation = (
	options?: UseMutationOptionsType<Product, string, 'onSuccess'>,
): UseMutationResultType<Product, string> => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (id: string) => fetchDeleteProduct(id),
		onSuccess: data => {
			queryClient.invalidateQueries({
				queryKey: productKeys.id(data._id),
				refetchType: 'active',
			});
		},
		...options,
	});
};
