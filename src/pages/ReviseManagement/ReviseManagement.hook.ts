import { userCoachingListQuery } from '@queries/coaching';
import { CoachingResponse } from 'types/coach/coaching';

export default function useReviseManagement() {
	const temp: CoachingResponse[] = [];
	const { data } = userCoachingListQuery();
	// const progressQuery = userCoachingListQuery();
	// const completeQuery = userCoachingListQuery();
	return {
		// pendingList: pendingQuery.data || [],
		// progressList: progressQuery.data || [],
		// completeList: completeQuery.data || []
		pendingList: data ? data.filter(t => t.progressStatus === 'PENDING') : [],
		progressList: data ? data.filter(t => t.progressStatus === 'IN_PROGRESS') : [],
		completeList: data ? data.filter(t => t.progressStatus === 'COMPLETED') : [],
	};
}
