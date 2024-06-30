import { csCreateMutation, csListQuery } from '@queries/cs';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { RequestAnswer } from 'types/coach/product';

export default function useInquiry(id: string) {
	const { data } = csListQuery(id);
	const createCsMutation = csCreateMutation();
	const [openInquiryInputs, setOpenInquiryInputs] = useState<boolean[]>(
		Array(data?.length).fill(false),
	);

	useEffect(() => {
		if (data) {
			setOpenInquiryInputs(Array(data.length).fill(false));
		}
	}, [data]);

	const handleToggleInquiryInput = (index: number) => {
		setOpenInquiryInputs(prev => prev.map((state, i) => (i === index ? !state : false)));
	};

	const createCs = async (data: RequestAnswer) => {
		await createCsMutation.mutateAsync(data).then(() => {
			toast('문의가 성공적으로 등록되었습니다.');
		});
	};

	return { cs: data || [], openInquiryInputs, handleToggleInquiryInput, createCs };
}
