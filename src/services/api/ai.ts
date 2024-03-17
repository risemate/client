import axios from 'axios';
import { Career } from 'types/career/careerDocument';
import { Resume } from 'types/career/resume';
import { AiQueryProps } from 'types/Query/QueryProps';

const AI_PATH = {
	DEFAULT: '/ai',
	AGAIN: '/careerId/ai',
};

export const fetchReviseAi = async (params: AiQueryProps): Promise<Career<Resume>> => {
	try {
		const response = await axios.get<Career<Resume>>(AI_PATH.DEFAULT, { params });
		return response.data;
	} catch (error) {
		throw new Error((error as Error).message);
	}
};

export const fetchReviseAiAgain = async (
	params: AiQueryProps,
): Promise<Career<Resume>> => {
	try {
		const response = await axios.get<Career<Resume>>(AI_PATH.AGAIN, { params });
		return response.data;
	} catch (error) {
		throw new Error((error as Error).message);
	}
};
