import { fetchAlarms } from '@api/alarms';
import { QueryKey, UseQueryOptions, useInfiniteQuery } from '@tanstack/react-query';

import { alarmKeys } from './queryKeys';

export const useAlarmQuery = (
	params?: { page?: number; pageSize?: number; isRead?: boolean },
	options?: UseQueryOptions<unknown, unknown, unknown, QueryKey> | undefined,
) => {
	return useInfiniteQuery(
		alarmKeys.base,
		({ pageParam = 1 }) => fetchAlarms({ ...params, page: pageParam }),
		{
			...(options as object),
			getNextPageParam: res => {
				if (res.totalPages === res.page) return null;
				const nextPageParam = res.page + 1;
				return nextPageParam;
			},
		},
	);
};
