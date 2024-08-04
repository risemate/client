import { CoachingExpertResponse } from 'types/coach/coaching';

import Empty from '@common/Empty';

import PendingItem from './PendingItem';

interface PendingProps {
	pendingList: CoachingExpertResponse[];
}

export default function Pending({ pendingList }: PendingProps) {
	if (pendingList.length === 0) {
		return <Empty>현재 대기 중인 첨삭 신청이 없습니다.</Empty>;
	}
	return (
		<>
			{pendingList.map(pending => (
				<PendingItem key={pending._id} pending={pending} />
			))}
		</>
	);
}
