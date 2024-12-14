import { expertCoachingListQuery, userCoachingListQuery } from '@queries/coaching';

export default function useCoachingManagement({
	isExpert = false,
}: {
	isExpert?: boolean;
}) {
	const { data: coachinghist, ...res } = isExpert
		? expertCoachingListQuery()
		: userCoachingListQuery();
	return {
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
