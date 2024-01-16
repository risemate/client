import axios from 'axios';
import { Career } from 'types/CareerDocument';
import { PagingQueryProps, PagingQueryResponse } from 'types/Query/Query';
import { Resume } from 'types/Resume';

const NETWORK_PATH = {
	DEFAULT: '/careers/p',
	DETAIL: (id: string) => `/careers/p/${id}`,
};

export const fetchPublicCareers = async (
	params?: PagingQueryProps,
): Promise<PagingQueryResponse<Career>> => {
	try {
		const response = await axios.get<PagingQueryResponse<Career>>(NETWORK_PATH.DEFAULT, {
			params,
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
