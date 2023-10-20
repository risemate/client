import { useState } from 'react';

export default function useTab(items: string[]) {
	const [currentTab, setCurrentTab] = useState(items[0]);

	const changeTab = (item: string) => {
		setCurrentTab(item);
	};

	const isCurrentTab = (item: string) => {
		return currentTab === item ? true : false;
	};

	return { currentTab, changeTab, isCurrentTab };
}
