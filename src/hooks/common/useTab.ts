import { useState } from 'react';
import { TabItem } from 'types/Tab';

export default function useTab(items: TabItem[]) {
	const [currentTab, setCurrentTab] = useState(items[0]);

	const changeTab = (item: TabItem) => {
		setCurrentTab(item);
	};

	const isCurrentTab = (item: TabItem) => {
		return currentTab.label === item.label && currentTab.value === item.value;
	};

	return { currentTab, changeTab, isCurrentTab };
}
