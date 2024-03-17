import { PagingQueryResponse } from './query/query';

export type NotiType = 'CAREER' | 'PRODUCT' | 'PAYMENT' | 'ANY';
export interface Alarm {
	_id: string;
	user: string;
	notiType: NotiType;
	title: string;
	content: string;
	isRead: boolean;
	url: null | string;
	forExpert: boolean;
	createdAt: string;
	updatedAt: string;
	__v: 0;
}

export interface AlamPaginationResponse<T> extends PagingQueryResponse<T> {
	unReadCount: number;
}
