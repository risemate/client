import axios from 'axios';
import { Career } from 'types/career/careerDocument';
import { Resume } from 'types/career/resume';
import { AiQueryProps } from 'types/query/queryProps';

const AI_PATH = {
	DEFAULT: '/ai',
};

export const fetchReviseAi = async (body: AiQueryProps): Promise<Career<Resume>> => {
	try {
		const response = await axios.post<Career<Resume>>(AI_PATH.DEFAULT, body);
		return response.data;
	} catch (error) {
		throw error;
	}
};

export const fetchReviseAiAgain = async (body: AiQueryProps): Promise<Career<Resume>> => {
	try {
		const response = await axios.put<Career<Resume>>(AI_PATH.DEFAULT, body);
		return response.data;
	} catch (error) {
		throw error;
	}
};
