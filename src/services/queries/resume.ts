//TODO: path is working, need to change later
import { RESUME_KEYS } from "../queries/queryKeys";
import { fetchCareers } from "../api/resume";
import { useQuery } from "@tanstack/react-query";
import { Career } from "types/CareerDocument";
import { UseQueryOptionsType } from "types/Query/Query";
import { CareersQueryProps } from "types/Query/ResumeQuery";
import { Resume } from "types/Resume";

// Personal Resumes
export const careersQuery = async (params: CareersQueryProps, options?: UseQueryOptionsType<Career<Resume>>[]) => {
    return useQuery({
        queryKey: RESUME_KEYS.CAREERS(params),
        queryFn: () => fetchCareers(params),
        ...options,
    })
}

// export const fetchEditingCareers = async (id: string) => {
//     return await axios.get(RESUME_PATH.EDITING(id));
// }

// export const fetchResumeDetail = async (id: string) => {
//     return await axios.get(RESUME_PATH.DETAIL(id));
// }

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
// export const fetchPublicCareers = async (params: {page?: number, pageSize?: number}) => {
//     return await axios.get(RESUME_PATH.PUBLIC(), {params});
// }

// export const fetchPublicResumeDetail = async (id: string) => {
//     return await axios.get(RESUME_PATH.PUBLIC(id))
// }