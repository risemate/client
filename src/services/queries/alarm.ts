import { fetchAlarms } from '@api/alarms';
import { useInfiniteQuery } from '@tanstack/react-query';
import { AlamPaginationResponse, Alarm } from 'types/alarm';
import { UseInfiniteQueryOptionsType } from 'types/query/query';

import { alarmKeys } from './queryKeys';

export const alarmQuery = (
	params?: { page?: number; pageSize?: number; isRead?: boolean },
	options?: UseInfiniteQueryOptionsType<
		AlamPaginationResponse<Alarm>,
		'initialPageParam' | 'getNextPageParam'
	>,
) => {
	return useInfiniteQuery({
		queryKey: alarmKeys.base,
		queryFn: ({ pageParam = 1 }) => fetchAlarms({ ...params, page: pageParam }),
		initialPageParam: 1,
		...(options as object),
		getNextPageParam: res => {
			if (res.totalPages === res.page) return null;
			const nextPageParam = res.page + 1;
			return nextPageParam;
		},
	});
};
