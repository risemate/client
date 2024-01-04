import axios from "axios"
import { CareersQueryProps, PublicCareersQueryProps } from "types/Query/ResumeQuery";

const RESUME_PATH = {
    DEFAULT: '/careers',
    EDITING: (id: string) => `${RESUME_PATH.DEFAULT}/${id}/revise-docs`,
    DETAIL: (id?: string) => id ? `${RESUME_PATH.DEFAULT}/resumes/${id}` : `${RESUME_PATH.DEFAULT}/resumes`,
    PUBLIC: (id?: string) => id ? `${RESUME_PATH.DEFAULT}/p-resumes/${id}` : `${RESUME_PATH.DEFAULT}/p-resumes`,
}

// Personal Resumes
export const fetchCareers = async (params?: CareersQueryProps) => {
    const response = await axios.get(RESUME_PATH.DEFAULT, {params});
    // console.log(response.data);
    return response?.data;
}

export const fetchEditingCareers = async (id: string) => {
    return await axios.get(RESUME_PATH.EDITING(id));
}

export const fetchResumeDetail = async (id: string) => {
    return await axios.get(RESUME_PATH.DETAIL(id));
}

export const fetchCreateResume = async () => {
    return await axios.post(RESUME_PATH.DETAIL());
}

export const fetchUpdateResume = async (id: string) => {
    return await axios.patch(RESUME_PATH.DETAIL(id));
}

export const fetchDeleteResume = async (id: string) => {
    return await axios.delete(RESUME_PATH.DETAIL(id));
}

// Public Resumes
export const fetchPublicCareers = async (params: PublicCareersQueryProps) => {
    return await axios.get(RESUME_PATH.PUBLIC(), {params});
}

export const fetchPublicResumeDetail = async (id: string) => {
    return await axios.get(RESUME_PATH.PUBLIC(id))
}