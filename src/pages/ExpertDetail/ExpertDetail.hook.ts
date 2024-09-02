import { expertResumeQuery } from '@queries/expert';
import { productDetailQuery } from '@queries/product';
import { authQuery } from '@queries/user';
import { removeNullValues } from '@utils/helpers';
import { useRef } from 'react';
import { Package } from 'types/coach/product';
import { TabItem } from 'types/common/tab';

export default function useExpertDetail(id: string) {
	const { data: productDetail } = productDetailQuery(id);
	const { data: expert } = expertResumeQuery();
	const { data: authData } = authQuery();
	const tabItems: TabItem[] = [
		{ label: '서비스 설명', value: 'SERVICE' },
		{ label: '전문가 정보', value: 'INFO' },
		{ label: '후기', value: 'REVIEW' },
		{ label: '문의', value: 'INQUIRY' },
	];
	const isMyProduct = productDetail?.expert === authData?._id;

	const inquiryRef = useRef<HTMLTextAreaElement>(null);
	const moveToInquiryInput = () => {
		if (inquiryRef.current) {
			inquiryRef.current.focus();
			inquiryRef.current.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return {
		product: {
			...productDetail,
			packages: productDetail
				? removeNullValues<Package>(productDetail.packages, true)
				: {},
		},
		expert,
		tabItems,
		isMyProduct,
		focusInquiry: {
			ref: inquiryRef,
			focus: moveToInquiryInput,
		},
	};
}
