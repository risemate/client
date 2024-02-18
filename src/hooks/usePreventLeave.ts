import { useEffect } from 'react';
import { useBlocker } from 'react-router';

import { useModal } from './atoms/useModalAtom';

interface PreventLeaveProps {
	isTrigger?: boolean;
	isModal?: boolean;
	preventEvent?: () => void;
}

const usePreventLeave = ({
	isTrigger = true,
	isModal = true,
	preventEvent,
}: PreventLeaveProps = {}) => {
	const { openModal } = useModal('unsavedChanges');
	// SPA 내 router 변경 및 뒤로가기 금지
	const blocker = useBlocker(
		({ currentLocation, nextLocation }) =>
			currentLocation.pathname !== nextLocation.pathname,
	);

	// 새로고침 / 주소 이동 방지
	const handleBeforeUnload = (e: BeforeUnloadEvent) => {
		e.preventDefault();
		e.returnValue = false;
		return 'unload';
	};

	// 화면 이탈 방지 이벤트 추가 및 삭제
	useEffect(() => {
		if (isTrigger) {
			window.addEventListener('beforeunload', handleBeforeUnload);
		}
		return () => {
			if (isTrigger) {
				window.removeEventListener('beforeunload', handleBeforeUnload);
			}
		};
	}, []);

	useEffect(() => {
		if (blocker.state === 'blocked' && isTrigger) {
			preventEvent && preventEvent();
			isModal && openModal();
		}
	}, [blocker]);
	return { blocker };
};

export default usePreventLeave;
