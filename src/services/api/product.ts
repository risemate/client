import { removeEmptyObjectField } from '@utils/hookform';
import axios from 'axios';
import { CS, Product, RequestAnswer, RequestReview, Review } from 'types/coach/product';
import { PagingQueryProps, PagingQueryResponse } from 'types/query/query';

const PRODUCT_PATH = {
	DEFAULT: '/products',
	DETAIL: (id: string) => `${PRODUCT_PATH}/${id}`,
	CS: (id: string) => `${PRODUCT_PATH}/${id}/cs`,
	CS_ANSWER: (id: string) => `${PRODUCT_PATH}/cs/${id}/answer`,
	CS_USER: () => `${PRODUCT_PATH}/cs/user`,
	REVIEW: (id: string) => `${PRODUCT_PATH}/${id}/review`,
	REVIEW_EDIT: (id: string) => `${PRODUCT_PATH}/reviews/${id}`,
	REVIEW_ANSWER: (id: string) => `${PRODUCT_PATH}/reviews/${id}/answer`,
	REVIEW_LIST: (id: string) => `${PRODUCT_PATH}/${id}/reviews`,
	REVIEW_USER: () => `${PRODUCT_PATH}/reviews/user`,
};

// 상품 관련
export const fetchCreateProduct = async (body: Product): Promise<Product> => {
	const response = await axios.post<Product>(PRODUCT_PATH.DEFAULT, body);
	return response.data;
};

export const fetchUpdateProduct = async (
	id: string,
	body: Partial<Product>,
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

export const fetchProductDetail = async (id: string): Promise<Product> => {
	const response = await axios.get<Product>(PRODUCT_PATH.DETAIL(id));
	return response.data;
};

// 상품에 대한 CS 관련
export const fetchCreateCs = async (id: string, body: RequestAnswer): Promise<CS> => {
	const response = await axios.post<CS>(PRODUCT_PATH.CS(id), body);
	return response.data;
};

export const fetchUpdateCs = async (id: string, body: RequestAnswer): Promise<CS> => {
	const response = await axios.patch<CS>(PRODUCT_PATH.CS(id), body);
	return response.data;
};

export const fetchCreateCsAsnwer = async (
	id: string,
	body: RequestAnswer,
): Promise<CS> => {
	const response = await axios.post<CS>(PRODUCT_PATH.CS_ANSWER(id), body);
	return response.data;
};

export const fetchUpdateCsAsnwer = async (
	id: string,
	body: RequestAnswer,
): Promise<CS> => {
	const response = await axios.patch<CS>(PRODUCT_PATH.CS_ANSWER(id), body);
	return response.data;
};

export const fetchUserCs = async (): Promise<CS[]> => {
	const response = await axios.get<CS[]>(PRODUCT_PATH.CS_USER());
	return response.data;
};

export const fetchCsList = async (id: string): Promise<CS[]> => {
	const response = await axios.get<CS[]>(PRODUCT_PATH.CS(id));
	return response.data;
};

// 상품에 대한 리뷰 관련
export const fetchCreateReview = async (
	id: string,
	body: RequestReview,
): Promise<Review> => {
	const response = await axios.post<Review>(PRODUCT_PATH.REVIEW(id), body);
	return response.data;
};

export const fetchUpdateReivew = async (
	id: string,
	body: Partial<RequestReview>,
): Promise<Review> => {
	const response = await axios.patch<Review>(PRODUCT_PATH.REVIEW_EDIT(id), body);
	return response.data;
};

export const fetchCreateReviewAnswer = async (
	id: string,
	body: RequestAnswer,
): Promise<Review> => {
	const response = await axios.post<Review>(PRODUCT_PATH.REVIEW_ANSWER(id), body);
	return response.data;
};

export const fetchUpdateReivewAnswer = async (
	id: string,
	body: RequestAnswer,
): Promise<Review> => {
	const response = await axios.patch<Review>(PRODUCT_PATH.REVIEW_ANSWER(id), body);
	return response.data;
};

export const fetchUserReivew = async (): Promise<Review[]> => {
	const response = await axios.get<Review[]>(PRODUCT_PATH.REVIEW_USER());
	return response.data;
};
