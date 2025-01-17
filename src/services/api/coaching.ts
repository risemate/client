import axios from 'axios';
import { ReviseResume } from 'types/career/resume';
import {
	CHAT_ROLE,
	CoachingDecideRequest,
	CoachingRequest,
	CoachingResponse,
} from 'types/coach/coaching';

const COACHING_PATH = {
	DEFAULT: '/coaching',
	USER: () => `${COACHING_PATH.DEFAULT}/user`,
	USERID: (id: string) => `${COACHING_PATH.USER}/${id}`,
	EXPERT: () => `${COACHING_PATH.DEFAULT}/expert`,
	EXPERTID: (id: string) => `${COACHING_PATH.EXPERT}/${id}`,
	DECIDE: (id: string) => `${COACHING_PATH.DEFAULT}/${id}/decide`,
	COACHING: (id: string) => `${COACHING_PATH.DEFAULT}/${id}`,
	CHAT: (id: string) => `${COACHING_PATH.DEFAULT}/chat/${id}`,
	EXPERT_DONE: (id: string) => `${COACHING_PATH.DEFAULT}/expert/coaching-done/${id}`,
	USER_DONE: (id: string) => `${COACHING_PATH.DEFAULT}/user/coaching-done/${id}`,
};

export const fetchApplyCoaching = async (
	body: CoachingRequest,
): Promise<CoachingResponse> => {
	const response = await axios.post(COACHING_PATH.DEFAULT, body);
	return response.data;
};

export const fetchDecideCoaching = async (
	id: string,
	body: CoachingDecideRequest,
): Promise<CoachingResponse> => {
	const response = await axios.patch(COACHING_PATH.DECIDE(id), body);
	return response.data;
};

export const fetchUserCoachingList = async (): Promise<CoachingResponse[]> => {
	const response = await axios.get(COACHING_PATH.USER());
	return response.data;
};

export const fetchUserCoachingDetail = async (id: string): Promise<CoachingResponse> => {
	const response = await axios.get(COACHING_PATH.USERID(id));
	return response.data;
};

export const fetchUserCoachingAction = async (id: string): Promise<CoachingResponse> => {
	const response = await axios.patch(COACHING_PATH.USERID(id));
	return response.data;
};

export const fetchExpertCoachingList = async (): Promise<CoachingResponse[]> => {
	const response = await axios.get(COACHING_PATH.EXPERT());
	return response.data;
};

export const fetchExpertCoachingDetail = async (
	id: string,
): Promise<CoachingResponse> => {
	const response = await axios.get(COACHING_PATH.EXPERTID(id));
	return response.data;
};

export const fetchExpertCoachingAction = async (
	id: string,
): Promise<CoachingResponse> => {
	const response = await axios.patch(COACHING_PATH.EXPERTID(id));
	return response.data;
};

export const fetchCoachingCareer = async (
	id: string,
	body: Partial<ReviseResume>,
): Promise<CoachingResponse> => {
	const response = await axios.patch(COACHING_PATH.COACHING(id), body);
	return response.data;
};

export const fetchCoachingExpertDone = async (id: string, body: { message: string }) => {
	const response = await axios.patch(COACHING_PATH.EXPERT_DONE(id), body);
	return response.data;
};
export const fetchCoachingUserDone = async (id: string, body: { message: string }) => {
	const response = await axios.patch(COACHING_PATH.USER_DONE(id), body);
	return response.data;
};
export const fetchCoachingChat = async (
	id: string,
	body: { message: string; role: CHAT_ROLE },
) => {
	const response = await axios.patch(COACHING_PATH.CHAT(id), body);
	return response.data;
};
