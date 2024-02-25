import { useCallback, useState } from 'react';
import { ResumeOrderType } from 'types/Resume';

export default function useWriteNavigation() {
	const [resumeOrder, setResumeOrder] = useState<ResumeOrderType[]>([
		{
			id: 1,
			name: 'coverLetter',
			label: '자기소개',
			isVisible: true,
		},
		{
			id: 2,
			name: 'techStacks',
			label: '기술 스택',
			isVisible: true,
		},
		{
			id: 3,
			name: 'workExperiences',
			label: '경력',
			isVisible: true,
		},
		{
			id: 4,
			name: 'projects',
			label: '프로젝트',
			isVisible: true,
		},
		{
			id: 5,
			name: 'educations',
			label: '교육',
			isVisible: true,
		},
		{
			id: 6,
			name: 'activities',
			label: '대외활동',
			isVisible: true,
		},
		{
			id: 7,
			name: 'certificates',
			label: '자격증',
			isVisible: true,
		},
	]);
	const moveItem = useCallback(
		(dragIndex: number, hoverIndex: number) => {
			const dragItem = resumeOrder[dragIndex];
			const newOrders = [...resumeOrder];
			newOrders.splice(dragIndex, 1);
			newOrders.splice(hoverIndex, 0, dragItem);
			setResumeOrder(newOrders);
		},
		[resumeOrder],
	);
	return {
		resumeOrder,
		moveItem,
	};
}
