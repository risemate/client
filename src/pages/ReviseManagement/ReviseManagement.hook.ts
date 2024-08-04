// import { userCoachingListQuery } from "@queries/coaching";
import { CoachingResponse } from 'types/coach/coaching';

export default function useReviseManagement() {
	const temp: CoachingResponse[] = [
		{
			_id: '66af0f1ef327cb4db9506359',
			careerType: 'RESUME',
			user: '650d44a6398de0dbd2eb30bd',
			payment: '66af0f1ef327cb4db9506353',
			expert: '658e7f6542cab3e1bc35ec5b',
			product: '66aecc939bee2ff2884771ec',
			originDoc: '660610302bda7ab27e8a1829',
			reviseDoc: '66af0f1ef327cb4db9506357',
			selectedPackage: 'BASIC',
			price: null,
			discountRate: null,
			coin: null,
			paidAmount: 0,
			progressStatus: 'PENDING',
			createdAt: '2024-08-04T05:18:22.505Z',
			updatedAt: '2024-08-04T05:18:22.505Z',
		},
		{
			_id: '66af1034f327cb4db9506371',
			careerType: 'RESUME',
			user: '650d44a6398de0dbd2eb30bd',
			payment: '66af1034f327cb4db950636b',
			expert: '658e7f6542cab3e1bc35ec5b',
			product: '66aecc939bee2ff2884771ec',
			originDoc: '660610302bda7ab27e8a1829',
			reviseDoc: '66af1034f327cb4db950636f',
			selectedPackage: 'BASIC',
			price: null,
			discountRate: null,
			coin: null,
			paidAmount: 0,
			progressStatus: 'COMPLETED',
			createdAt: '2024-08-04T05:23:00.614Z',
			updatedAt: '2024-08-04T05:23:00.614Z',
		},
		{
			_id: '66af168c664498265ce5eb03',
			careerType: 'RESUME',
			user: '650d44a6398de0dbd2eb30bd',
			payment: '66af168b664498265ce5eafd',
			expert: '658e7f6542cab3e1bc35ec5b',
			product: '66aecc939bee2ff2884771ec',
			originDoc: '660610302bda7ab27e8a1829',
			reviseDoc: '66af168c664498265ce5eb01',
			selectedPackage: 'BASIC',
			price: null,
			discountRate: null,
			coin: null,
			paidAmount: 0,
			progressStatus: 'IN_PROGRESS',
			createdAt: '2024-08-04T05:50:04.229Z',
			updatedAt: '2024-08-04T06:05:31.768Z',
		},
	];
	// const pendingQuery = userCoachingListQuery();
	// const progressQuery = userCoachingListQuery();
	// const completeQuery = userCoachingListQuery();
	return {
		// pendingList: pendingQuery.data || [],
		// progressList: progressQuery.data || [],
		// completeList: completeQuery.data || []
		pendingList: temp.filter(t => t.progressStatus === 'PENDING'),
		progressList: temp.filter(t => t.progressStatus === 'IN_PROGRESS'),
		completeList: temp.filter(t => t.progressStatus === 'COMPLETED'),
	};
}
