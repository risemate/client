import {
	Complete as CompleteType,
	Pending as PendingType,
	Progress as ProgressType,
} from 'types/coach/managment';

import ManagementWrapper from '@components/management/ManagementWrapper';

import Complete from './components/Complete';
import Pending from './components/Pending';
import Progress from './components/Progress';

export default function CoachManagement() {
	const pendingList: PendingType[] = [{ temp: 1 }, { temp: 1 }, { temp: 1 }];
	const progressList: ProgressType[] = [{ temp: 1 }, { temp: 1 }, { temp: 1 }];
	const completeList: CompleteType[] = [{ temp: 1 }, { temp: 1 }, { temp: 1 }];
	return (
		<ManagementWrapper
			waitingContent={<WaitingContent pendingList={pendingList} />}
			inProgressContent={<InProgressContent progressList={progressList} />}
			completeContent={<CompleteContent completeList={completeList} />}
			isCoach
		/>
	);
}

const WaitingContent = ({ pendingList }: { pendingList: PendingType[] }) => {
	return (
		<>
			{pendingList.map((pending, index) => (
				<li key={index}>
					<Pending pending={pending} />
				</li>
			))}
		</>
	);
};

const InProgressContent = ({ progressList }: { progressList: ProgressType[] }) => {
	return (
		<>
			{progressList.map((progress, index) => (
				<li key={index}>
					<Progress progress={progress} />
				</li>
			))}
		</>
	);
};

const CompleteContent = ({ completeList }: { completeList: CompleteType[] }) => {
	return (
		<>
			{completeList.map((complete, index) => (
				<li key={index}>
					<Complete complete={complete} />
				</li>
			))}
		</>
	);
};
