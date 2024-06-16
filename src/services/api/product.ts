import { removeEmptyObjectField } from '@utils/hookform';
import axios from 'axios';
import { Product, ProductRequest } from 'types/coach/product';
import { PagingQueryProps, PagingQueryResponse } from 'types/query/query';

const PRODUCT_PATH = {
	DEFAULT: '/products',
	DETAIL: (id: string) => `${PRODUCT_PATH.DEFAULT}/${id}`,
	MY: () => `${PRODUCT_PATH.DEFAULT}/my`,
};

// 상품 관련
export const fetchCreateProduct = async (
	body: Partial<ProductRequest>,
): Promise<Product> => {
	const response = await axios.post<Product>(PRODUCT_PATH.DEFAULT, body);
	return response.data;
};

export const fetchUpdateProduct = async (
	id: string,
	body: Partial<ProductRequest>,
): Promise<Product> => {
	const response = await axios.patch<Product>(PRODUCT_PATH.DETAIL(id), body);
	return response.data;
};

export const fetchDeleteProduct = async (id: string): Promise<Product> => {
	const response = await axios.delete(PRODUCT_PATH.DETAIL(id));
	return response.data;
};

export const fetchProducts = async (
	params?: PagingQueryProps,
): Promise<PagingQueryResponse<Product>> => {
	const response = await axios.get<PagingQueryResponse<Product>>(PRODUCT_PATH.DEFAULT, {
		params: removeEmptyObjectField<PagingQueryProps>(params || {}),
	});
	return response.data;
};

export const fetchMyProduct = async () // careerType?: CareerType
	: Promise<Product[]> => {
	try {
		// const response = await axios.get<Product[]>(PRODUCT_PATH.MY(), { params: { careerType } });
		const response = await axios.get<Product[]>(PRODUCT_PATH.MY());
		return response.data;
	} catch (error) {
		throw new Error((error as Error).message);
	}
};

export const fetchProductDetail = async (id: string): Promise<Product> => {
	const response = await axios.get<Product>(PRODUCT_PATH.DETAIL(id));
	return response.data;
};
