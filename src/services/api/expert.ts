import axios from 'axios';
import { Career, CareerExpert } from 'types/career/careerDocument';
import { ApplyExpertResponse, ExpertResumeType } from 'types/coach/expert';
import { ApplyExpertProps } from 'types/coach/expert';

const EXPERT_PATH = {
	DEFAULT: '/experts',
	APPLY: () => `${EXPERT_PATH.DEFAULT}/applicate`,
	CREATE: () => `${EXPERT_PATH.DEFAULT}/career`,
};

// 신청
export const fetchApplyExpert = async (
	body: ApplyExpertProps,
): Promise<ApplyExpertResponse> => {
	const response = await axios.post(EXPERT_PATH.APPLY(), body);
	return response.data;
};

export const fetchExpertResume = async (): Promise<CareerExpert<ExpertResumeType>> => {
	const response = await axios.get<CareerExpert<ExpertResumeType>>(EXPERT_PATH.DEFAULT);
	return response.data;
};

export const fetchCreateExpertResume = async (
	body: ExpertResumeType,
): Promise<Career<ExpertResumeType>> => {
	const response = await axios.post<Career<ExpertResumeType>>(EXPERT_PATH.CREATE(), body);
	return response.data;
};

export const fetchUpdateExpertResume = async (
	body: Partial<ExpertResumeType>,
): Promise<Career<ExpertResumeType>> => {
	const response = await axios.patch<Career<ExpertResumeType>>(
		EXPERT_PATH.CREATE(),
		body,
	);
	return response.data;
};
