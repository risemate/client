import axios from 'axios';
import { Career } from 'types/CareerDocument';
import { Resume } from 'types/Resume';

const RESUME_PATH = {
	DEFAULT: '/careers',
	REVISE: (id: string) => `${RESUME_PATH.DEFAULT}/${id}/revise-docs`,
	DETAIL: (id: string) => `${RESUME_PATH.DEFAULT}/${id}`,
	UPDATE: (id?: string) =>
		id ? `${RESUME_PATH.DEFAULT}/cl/${id}` : `${RESUME_PATH.DEFAULT}/cl`,
};

export const fetchCreateResume = async (body: Resume): Promise<Career<Resume>> => {
	try {
		const response = await axios.post<Career<Resume>>(RESUME_PATH.UPDATE(), body);
		return response.data;
	} catch (error) {
		throw new Error((error as Error).message);
	}
};

export const fetchUpdateResume = async (
	id: string,
	body: Partial<Resume>,
): Promise<Career<Resume>> => {
	try {
		const response = await axios.patch<Career<Resume>>(RESUME_PATH.UPDATE(id), body);
		return response.data;
	} catch (error) {
		throw new Error((error as Error).message);
	}
};

export const fetchDeleteResume = async (id: string): Promise<void> => {
	try {
		await axios.delete<void>(RESUME_PATH.DETAIL(id));
	} catch (error) {
		throw new Error((error as Error).message);
	}
};
