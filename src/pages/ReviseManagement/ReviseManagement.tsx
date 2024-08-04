import ManagementWrapper from '@components/management/ManagementWrapper';

import Complete from './components/Complete';
import Pending from './components/Pending/Pending';
import Progress from './components/Progress';
import useReviseManagement from './ReviseManagement.hook';

export default function ReviseManagement() {
	const { pendingList, progressList, completeList } = useReviseManagement();
	return (
		<ManagementWrapper
			waitingContent={<Pending pendingList={pendingList} />}
			inProgressContent={<Progress progressList={progressList} />}
			completeContent={<Complete completeList={completeList} />}
		/>
	);
}
