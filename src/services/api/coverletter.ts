import axios from 'axios';
import { Career } from 'types/career/careerDocument';
import { Coverletter } from 'types/career/coverletter';

const COVERLETTER_PATH = {
	DEFAULT: '/careers',
	REVISE: (id: string) => `${COVERLETTER_PATH.DEFAULT}/${id}/revise-docs`,
	DETAIL: (id: string) => `${COVERLETTER_PATH.DEFAULT}/${id}`,
	UPDATE: (id?: string) =>
		id ? `${COVERLETTER_PATH.DEFAULT}/cl/${id}` : `${COVERLETTER_PATH.DEFAULT}/cl`,
};

export const fetchCoverletterDetail = async <T = Coverletter>(
	id: string,
): Promise<Career<T>> => {
	try {
		const response = await axios.get<Career<T>>(COVERLETTER_PATH.DETAIL(id));
		return response.data;
	} catch (error) {
		throw new Error((error as Error).message);
	}
};

export const fetchCreateCoverletter = async (
	body: Coverletter,
): Promise<Career<Coverletter>> => {
	console.log('data: ', body);
	try {
		const response = await axios.post<Career<Coverletter>>(
			COVERLETTER_PATH.UPDATE(),
			body,
		);
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
		const response = await axios.patch<Career<Coverletter>>(
			COVERLETTER_PATH.UPDATE(id),
			body,
		);
		return response.data;
	} catch (error) {
		throw new Error((error as Error).message);
	}
};

export const fetchDeleteCoverletter = async (id: string): Promise<void> => {
	try {
		await axios.delete<void>(COVERLETTER_PATH.DETAIL(id));
	} catch (error) {
		throw new Error((error as Error).message);
	}
};
