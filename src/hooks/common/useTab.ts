import { useState } from 'react';
import { TabItem } from 'types/Tab';

import { useSearchParam } from './useSearchParam';

export default function useTab<T = string | number | undefined>(
	items: TabItem<T>[],
	isParam?: boolean,
) {
	const [currentTab, setCurrentTab] = useState<TabItem<T>>(items[0]);
	const { queryParam, changeParam } = useSearchParam<T>('tab');

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
