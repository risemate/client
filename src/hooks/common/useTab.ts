import { useState } from 'react';
import { TabItem } from 'types/Tab';

export default function useTab<T = string | number | undefined>(items: TabItem<T>[]) {
	const [currentTab, setCurrentTab] = useState<TabItem<T>>(items[0]);

	const changeTab = (item: TabItem<T>) => {
		setCurrentTab(item);
	};

	const isCurrentTab = (item: TabItem<T>) => {
		return currentTab.label === item.label && currentTab.value === item.value;
	};

	return { currentTab, changeTab, isCurrentTab };
}
