import { productDetailQuery } from '@queries/product';
import { authQuery } from '@queries/user';
import { removeNullValues } from '@utils/helpers';
import { Package } from 'types/coach/product';
import { TabItem } from 'types/common/tab';

export default function useExpertDetail(id: string) {
	const { data, isLoading } = productDetailQuery(id);
	const { data: authData } = authQuery();
	const tabItems: TabItem[] = [
		{ label: '서비스 설명', value: 'SERVICE' },
		{ label: '전문가 정보', value: 'INFO' },
		{ label: '후기', value: 'REVIEW' },
		{ label: '문의', value: 'INQUIRY' },
	];
	const isMyProduct = data?.expert === authData?._id;

	return {
		product: {
			...data,
			packages: data ? removeNullValues<Package>(data.packages, true) : {},
		},
		isLoading,
		tabItems,
		isMyProduct,
	};
}
