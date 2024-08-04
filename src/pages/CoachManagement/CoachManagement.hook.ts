// import { expertCoachingListQuery } from "@queries/coaching";
import { CoachingExpertResponse } from 'types/coach/coaching';

export default function useCoachManagement() {
	const temp: CoachingExpertResponse[] = [
		{
			_id: '66af487c0828b9a4a9c49468',
			careerType: 'RESUME',
			user: '650d44a6398de0dbd2eb30bd',
			payment: '66af487c0828b9a4a9c49462',
			expert: '658e7f6542cab3e1bc35ec5b',
			product: '66aecc939bee2ff2884771ec',
			originDoc: '663776d3a702984d436f7ddd',
			reviseDoc: '66af487c0828b9a4a9c49466',
			selectedPackage: 'BASIC',
			price: 1000,
			discountRate: 0,
			coin: 0,
			paidAmount: 1000,
			progressStatus: 'PENDING',
			expertCompleted: [],
			userCompleted: [],
			createdAt: '2024-08-04T09:23:08.998Z',
			updatedAt: '2024-08-04T09:23:08.998Z',
		},
		{
			_id: '66af487c0828b9a4a9c49468',
			careerType: 'RESUME',
			user: '650d44a6398de0dbd2eb30bd',
			payment: '66af487c0828b9a4a9c49462',
			expert: '658e7f6542cab3e1bc35ec5b',
			product: '66aecc939bee2ff2884771ec',
			originDoc: '663776d3a702984d436f7ddd',
			reviseDoc: '66af487c0828b9a4a9c49466',
			selectedPackage: 'BASIC',
			price: 1000,
			discountRate: 0,
			coin: 0,
			paidAmount: 1000,
			progressStatus: 'IN_PROGRESS',
			expertCompleted: [],
			userCompleted: [],
			createdAt: '2024-08-04T09:23:08.998Z',
			updatedAt: '2024-08-04T09:23:08.998Z',
		},
		{
			_id: '66af487c0828b9a4a9c49468',
			careerType: 'RESUME',
			user: '650d44a6398de0dbd2eb30bd',
			payment: '66af487c0828b9a4a9c49462',
			expert: '658e7f6542cab3e1bc35ec5b',
			product: '66aecc939bee2ff2884771ec',
			originDoc: '663776d3a702984d436f7ddd',
			reviseDoc: '66af487c0828b9a4a9c49466',
			selectedPackage: 'BASIC',
			price: 1000,
			discountRate: 0,
			coin: 0,
			paidAmount: 1000,
			progressStatus: 'COMPLETED',
			expertCompleted: [],
			userCompleted: [],
			createdAt: '2024-08-04T09:23:08.998Z',
			updatedAt: '2024-08-04T09:23:08.998Z',
		},
	];
	// const pendingQuery = expertCoachingListQuery();
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
