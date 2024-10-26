import axios from 'axios';
import { Career } from 'types/career/careerDocument';
import { Resume, ReviseResume } from 'types/career/resume';
import { CareersQueryProps } from 'types/query/queryProps';

const CAREER_PATH = {
	DEFAULT: '/careers',
	REVISE: (id: string) => `${CAREER_PATH.DEFAULT}/${id}/revise-docs`,
	DETAIL: (id: string) => `${CAREER_PATH.DEFAULT}/${id}`,
	PUBLIC: () => `${CAREER_PATH.DEFAULT}/p`,
	UPDATE: (id?: string) =>
		id ? `${CAREER_PATH.DEFAULT}/resumes/${id}` : `${CAREER_PATH.DEFAULT}/resumes`,
};

export const fetchCareers = async (
	params?: CareersQueryProps,
): Promise<Career<Resume>[]> => {
	try {
		const response = await axios.get<Career<Resume>[]>(CAREER_PATH.DEFAULT, { params });
		return response.data;
	} catch (error) {
		throw error;
	}
};

export const fetchReviseCareers = async (id: string): Promise<Career<ReviseResume>[]> => {
	try {
		const response = await axios.get<Career<ReviseResume>[]>(CAREER_PATH.REVISE(id));
		return response.data;
	} catch (error) {
		throw error;
	}
};

export const fetchResumeDetail = async <T = Resume>(id: string): Promise<Career<T>> => {
	try {
		const response = await axios.get<Career<T>>(CAREER_PATH.DETAIL(id));
		return response.data;
	} catch (error) {
		throw error;
	}
};

export const fetchCreateResume = async (body: Resume): Promise<Career<Resume>> => {
	try {
		const response = await axios.post<Career<Resume>>(CAREER_PATH.UPDATE(), body);
		return response.data;
	} catch (error) {
		throw error;
	}
};

export const fetchUpdateResume = async (
	id: string,
	body: Partial<Resume>,
): Promise<Career<Resume>> => {
	try {
		const response = await axios.patch<Career<Resume>>(CAREER_PATH.UPDATE(id), body);
		return response.data;
	} catch (error) {
		throw error;
	}
};

export const fetchDeleteResume = async (id: string): Promise<void> => {
	try {
		await axios.delete<void>(CAREER_PATH.DETAIL(id));
	} catch (error) {
		throw error;
	}
};
