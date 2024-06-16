import axios from 'axios';
import { CS, RequestAnswer } from 'types/coach/product';

const CS_PATH = {
	DEFAULT: '/products',
	CS: (id: string) => `${CS_PATH.DEFAULT}/${id}/cs`,
	CS_ANSWER: (id: string) => `${CS_PATH.DEFAULT}/cs/${id}/answer`,
	CS_USER: () => `${CS_PATH.DEFAULT}/cs/user`,
};

export const fetchCreateCs = async (body: RequestAnswer): Promise<CS> => {
	const response = await axios.post<CS>(CS_PATH.CS(body.id), body);
	return response.data;
};

export const fetchUpdateCs = async (body: RequestAnswer): Promise<CS> => {
	const response = await axios.patch<CS>(CS_PATH.CS(body.id), body);
	return response.data;
};

export const fetchCreateCsAsnwer = async (body: RequestAnswer): Promise<CS> => {
	const response = await axios.post<CS>(CS_PATH.CS_ANSWER(body.id), body);
	return response.data;
};

export const fetchUpdateCsAsnwer = async (body: RequestAnswer): Promise<CS> => {
	const response = await axios.patch<CS>(CS_PATH.CS_ANSWER(body.id), body);
	return response.data;
};

export const fetchUserCs = async (): Promise<CS[]> => {
	const response = await axios.get<CS[]>(CS_PATH.CS_USER());
	return response.data;
};

export const fetchCsList = async (id: string): Promise<CS[]> => {
	const response = await axios.get<CS[]>(CS_PATH.CS(id));
	return response.data;
};
