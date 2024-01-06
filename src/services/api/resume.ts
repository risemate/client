import axios from 'axios';
import { Career } from 'types/CareerDocument';
import { CareersQueryProps, PublicCareersQueryProps } from 'types/Query/ResumeQuery';
import { Resume } from 'types/Resume';

const RESUME_PATH = {
	DEFAULT: '/careers',
	REVISE: (id: string) => `${RESUME_PATH.DEFAULT}/${id}/revise-docs`,
	DETAIL: (id: string) => `${RESUME_PATH.DEFAULT}/${id}`,
	PUBLIC: (id?: string) =>
		id ? `${RESUME_PATH.DEFAULT}/p-resumes/${id}` : `${RESUME_PATH.DEFAULT}/p-resumes`,
};

// Personal Resumes
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

// export const fetchCreateResume = async () => {
//     return await axios.post(RESUME_PATH.DETAIL());
// }

// export const fetchUpdateResume = async (id: string) => {
//     return await axios.patch(RESUME_PATH.DETAIL(id));
// }

// export const fetchDeleteResume = async (id: string) => {
//     return await axios.delete(RESUME_PATH.DETAIL(id));
// }

// // Public Resumes
// export const fetchPublicCareers = async (params: PublicCareersQueryProps) => {
//     return await axios.get(RESUME_PATH.PUBLIC(), {params});
// }

// export const fetchPublicResumeDetail = async (id: string) => {
//     return await axios.get(RESUME_PATH.PUBLIC(id))
// }
