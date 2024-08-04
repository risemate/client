import ManagementWrapper from '@components/management/ManagementWrapper';

import useCoachManagement from './CoachManagement.hook';
import Complete from './components/Complete';
import Pending from './components/Pending/Pending';
import Progress from './components/Progress';

export default function CoachManagement() {
	const { pendingList, progressList, completeList } = useCoachManagement();
	return (
		<ManagementWrapper
			waitingContent={<Pending pendingList={pendingList} />}
			inProgressContent={<Progress progressList={progressList} />}
			completeContent={<Complete completeList={completeList} />}
			isCoach
		/>
	);
}
