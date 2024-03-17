import axios from 'axios';
import { AlamPaginationResponse, Alarm } from 'types/alarm';
import { PagingQueryProps } from 'types/query/query';

const ALARM_PATH = {
	DEFAULT: '/user-notis/a',
	READ_ALL: `/user-notis/a/read`,
	READ: (id: string) => `/user-notis/a/read/${id}`,
};

export const fetchAlarms = async (
	params?: PagingQueryProps,
): Promise<AlamPaginationResponse<Alarm>> => {
	try {
		const response = await axios.get<AlamPaginationResponse<Alarm>>(ALARM_PATH.DEFAULT, {
			params,
		});
		return response.data;
	} catch (error) {
		throw new Error((error as Error).message);
	}
};

export const fetchReadAlarms = async (): Promise<AlamPaginationResponse<Alarm>> => {
	try {
		const response = await axios.patch<AlamPaginationResponse<Alarm>>(
			ALARM_PATH.READ_ALL,
		);
		return response.data;
	} catch (error) {
		throw new Error((error as Error).message);
	}
};

export const fetchReadAlarm = async (
	id: string,
): Promise<AlamPaginationResponse<Alarm>> => {
	try {
		const response = await axios.patch<AlamPaginationResponse<Alarm>>(
			ALARM_PATH.READ(id),
		);
		return response.data;
	} catch (error) {
		throw new Error((error as Error).message);
	}
};
