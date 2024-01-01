import axios from "axios"

const RESUME_PATH = {
    DEFAULT: '/careers',
    DETAIL: (id?: string) => id ? `${RESUME_PATH.DEFAULT}/resumes/${id}` : `${RESUME_PATH.DEFAULT}/resumes`
}

export const fetchCareers = async () => {
    return await axios.get(RESUME_PATH.DEFAULT);
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