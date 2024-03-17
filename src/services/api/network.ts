import axios from 'axios';
import { Career } from 'types/career/careerDocument';
import { Resume } from 'types/career/resume';
import { NetworkPagingQuery, PagingQueryResponse } from 'types/query/query';

const NETWORK_PATH = {
	DEFAULT: '/careers/p',
	DETAIL: (id: string) => `/careers/p/${id}`,
};

export const fetchPublicCareers = async (
	params?: NetworkPagingQuery,
): Promise<PagingQueryResponse<Career>> => {
	try {
		const queryParams = {
			...(params?.careerType !== undefined && { careerType: params?.careerType }),
		};
		const response = await axios.get<PagingQueryResponse<Career>>(NETWORK_PATH.DEFAULT, {
			params: queryParams,
		});
		return response.data;
	} catch (error) {
		throw new Error((error as Error).message);
	}
};

export const fetchPublicResumeDetail = async (id: string): Promise<Career<Resume>> => {
	try {
		const response = await axios.get<Career<Resume>>(NETWORK_PATH.DETAIL(id));
		return response.data;
	} catch (error) {
		throw new Error((error as Error).message);
	}
};
