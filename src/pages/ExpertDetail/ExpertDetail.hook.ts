import { productDetailQuery } from '@queries/product';
import { removeNullValues } from '@utils/helpers';
import { FaL } from 'react-icons/fa6';
import { Package } from 'types/coach/product';
import { TabItem } from 'types/common/tab';

export default function useExpertDetail(id: string) {
	const { data, isLoading } = productDetailQuery(id);
	const tabItems: TabItem[] = [
		{ label: '서비스 설명', value: 'SERVICE' },
		{ label: '전문가 정보', value: 'INFO' },
		{ label: '후기', value: 'REVIEW' },
		{ label: '문의', value: 'INQUIRY' },
	];

	const compareTab = (currentTab: TabItem, tabItem: TabItem) => {
		if (currentTab.value === tabItem.value) return true;
		return false;
	};
	return {
		product: {
			...data,
			packages: data ? removeNullValues<Package>(data.packages, true) : {},
		},
		isLoading,
		tabItems,
		compareTab,
	};
}
