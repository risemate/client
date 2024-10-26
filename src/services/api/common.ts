import axios from 'axios';
import { Career } from 'types/career/careerDocument';
import { Resume } from 'types/career/resume';

export const CAREER_PATH = {
	DEFAULT: '/careers',
	REVISE: (id: string) => `${CAREER_PATH.DEFAULT}/${id}/revise-docs`,
	DETAIL: (id: string) => `${CAREER_PATH.DEFAULT}/${id}`,
	PUBLIC: (id?: string) =>
		id ? `${CAREER_PATH.DEFAULT}/p/${id}` : `${CAREER_PATH.DEFAULT}/p`,
	UPDATE: (id?: string) =>
		id ? `${CAREER_PATH.DEFAULT}/resumes/${id}` : `${CAREER_PATH.DEFAULT}/resumes`,
};

export const fetchCareerDetail = async <T = Resume>(path: string): Promise<Career<T>> => {
	try {
		const response = await axios.get<Career<T>>(path);
		return response.data;
	} catch (error) {
		throw error;
	}
};
