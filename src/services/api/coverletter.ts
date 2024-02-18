import axios from 'axios';
import { Career } from 'types/CareerDocument';
import { Coverletter } from 'types/Coverletter';

const RESUME_PATH = {
	DEFAULT: '/careers',
	REVISE: (id: string) => `${RESUME_PATH.DEFAULT}/${id}/revise-docs`,
	DETAIL: (id: string) => `${RESUME_PATH.DEFAULT}/${id}`,
	UPDATE: (id?: string) =>
		id ? `${RESUME_PATH.DEFAULT}/cl/${id}` : `${RESUME_PATH.DEFAULT}/cl`,
};

export const fetchCoverletterDetail = async <T = Coverletter>(
	id: string,
): Promise<Career<T>> => {
	try {
		const response = await axios.get<Career<T>>(RESUME_PATH.DETAIL(id));
		return response.data;
	} catch (error) {
		throw new Error((error as Error).message);
	}
};

export const fetchCreateCoverletter = async (
	body: Coverletter,
): Promise<Career<Coverletter>> => {
	try {
		const response = await axios.post<Career<Coverletter>>(RESUME_PATH.UPDATE(), body);
		return response.data;
	} catch (error) {
		throw new Error((error as Error).message);
	}
};

export const fetchUpdateCoverletter = async (
	id: string,
	body: Partial<Coverletter>,
): Promise<Career<Coverletter>> => {
	try {
		const response = await axios.patch<Career<Coverletter>>(RESUME_PATH.UPDATE(id), body);
		return response.data;
	} catch (error) {
		throw new Error((error as Error).message);
	}
};

export const fetchDeleteCoverletter = async (id: string): Promise<void> => {
	try {
		await axios.delete<void>(RESUME_PATH.DETAIL(id));
	} catch (error) {
		throw new Error((error as Error).message);
	}
};
