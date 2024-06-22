import { useEffect, useState } from 'react';
import { TabItem } from 'types/common/tab';

import { useSearchParam } from './useSearchParam';

export default function useTab<T = string | number | undefined>(
	items: TabItem<T>[],
	isParam?: boolean,
) {
	const { queryParam, changeParam } = useSearchParam<T>('tab');
	const [currentTab, setCurrentTab] = useState<TabItem<T>>(items[0]);

	useEffect(() => {
		const initializeTab = (): TabItem<T> => {
			if (queryParam) {
				return items.find(item => item.value === queryParam) || items[0];
			}
			return items[0];
		};
		setCurrentTab(initializeTab());
	}, [queryParam]);

	const changeTab = (item: TabItem<T>) => {
		setCurrentTab(item);
		if (isParam) {
			changeParam((item.value as string) || 'ALL');
		}
	};

	const isCurrentTab = (item: TabItem<T>) => {
		if (isParam) {
			return queryParam === item.value || currentTab.value === item.value;
		} else {
			return currentTab.value === item.value;
		}
	};

	return { currentTab, changeTab, isCurrentTab };
}
