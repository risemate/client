import { expertCoachingListQuery } from '@queries/coaching';
import { CoachingExpertResponse } from 'types/coach/coaching';

export default function useCoachManagement() {
	const { data: coachinghist, ...res } = expertCoachingListQuery();
	// const progressQuery = userCoachingListQuery();
	// const completeQuery = userCoachingListQuery();
	return {
		// pendingList: pendingQuery.data || [],
		// progressList: progressQuery.data || [],
		// completeList: completeQuery.data || []
		pendingList: coachinghist
			? coachinghist?.filter(t => t.progressStatus === 'PENDING')
			: [],
		progressList: coachinghist
			? coachinghist?.filter(t => t.progressStatus === 'IN_PROGRESS')
			: [],
		completeList: coachinghist
			? coachinghist?.filter(t => t.progressStatus === 'COMPLETED')
			: [],
		data: coachinghist ? coachinghist : [],
		...res,
	};
}
