import axios from 'axios';
import { RequestAnswer, RequestReview, Review } from 'types/coach/product';

const REVIEW_PATH = {
	DEFAULT: '/products',
	REVIEW: (id: string) => `${REVIEW_PATH.DEFAULT}/${id}/review`,
	REVIEW_EDIT: (id: string) => `${REVIEW_PATH.DEFAULT}/reviews/${id}`,
	REVIEW_ANSWER: (id: string) => `${REVIEW_PATH.DEFAULT}/reviews/${id}/answer`,
	REVIEW_LIST: (id: string) => `${REVIEW_PATH.DEFAULT}/${id}/reviews`,
	REVIEW_USER: () => `${REVIEW_PATH.DEFAULT}/reviews/user`,
};

export const fetchCreateReview = async (body: RequestReview): Promise<Review> => {
	const response = await axios.post<Review>(REVIEW_PATH.REVIEW(body.id), body);
	return response.data;
};

export const fetchUpdateReview = async (body: RequestReview): Promise<Review> => {
	const response = await axios.patch<Review>(REVIEW_PATH.REVIEW_EDIT(body.id), body);
	return response.data;
};

export const fetchCreateReviewAnswer = async (body: RequestAnswer): Promise<Review> => {
	const response = await axios.post<Review>(REVIEW_PATH.REVIEW_ANSWER(body.id), body);
	return response.data;
};

export const fetchUpdateReviewAnswer = async (body: RequestAnswer): Promise<Review> => {
	const response = await axios.patch<Review>(REVIEW_PATH.REVIEW_ANSWER(body.id), body);
	return response.data;
};

export const fetchUserReview = async (): Promise<Review[]> => {
	const response = await axios.get<Review[]>(REVIEW_PATH.REVIEW_USER());
	return response.data;
};
