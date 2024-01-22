import axios from 'axios';
import { Career } from 'types/CareerDocument';
import { CareersQueryProps } from 'types/Query/ResumeQuery';
import { Resume } from 'types/Resume';

const RESUME_PATH = {
	DEFAULT: '/careers',
	REVISE: (id: string) => `${RESUME_PATH.DEFAULT}/${id}/revise-docs`,
	DETAIL: (id: string) => `${RESUME_PATH.DEFAULT}/${id}`,
	PUBLIC: (id?: string) =>
		id ? `${RESUME_PATH.DEFAULT}/p-resumes/${id}` : `${RESUME_PATH.DEFAULT}/p-resumes`,
	UPDATE: (id?: string) =>
		id ? `${RESUME_PATH.DEFAULT}/resumes/${id}` : `${RESUME_PATH.DEFAULT}/resumes`,
};

export const fetchCareers = async (
	params?: CareersQueryProps,
): Promise<Career<Resume>[]> => {
	try {
		const response = await axios.get<Career<Resume>[]>(RESUME_PATH.DEFAULT, { params });
		return response.data;
	} catch (error) {
		throw new Error((error as Error).message);
	}
};

export const fetchReviseCareers = async (id: string): Promise<Career<Resume>[]> => {
	try {
		const response = await axios.get<Career<Resume>[]>(RESUME_PATH.REVISE(id));
		return response.data;
	} catch (error) {
		throw new Error((error as Error).message);
	}
};

export const fetchResumeDetail = async (id: string): Promise<Career<Resume>> => {
	try {
		const response = await axios.get<Career<Resume>>(RESUME_PATH.DETAIL(id));
		return response.data;
	} catch (error) {
		throw new Error((error as Error).message);
	}
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
