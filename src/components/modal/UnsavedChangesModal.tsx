import React from 'react';

// import { unstable_Blocker } from 'react-router';
import Modal from './base/Modal';

// interface UnsavedChangesModalProps {
// 	blocker: unstable_Blocker;
// }

// export default function UnsavedChangesModal({ blocker }: UnsavedChangesModalProps) {
// 	return (
// 		<Modal
// 			title='사이트에서 나가시겠습니까?'
// 			queryKey='unsavedChanges'
// 			confirm='나가기'
// 			onClick={() => blocker.proceed && blocker.proceed()}
// 			onCancel={() => blocker.reset && blocker.reset()}
// 		>
// 			변경사항이 저장되지 않을 수 있습니다.
// 		</Modal>
// 	);
// }

export default function UnsavedChangesModal() {
	return (
		<Modal title='사이트에서 나가시겠습니까?' queryKey='querykey'>
			변경사항이 저장되지 않을 수 있습니다.
		</Modal>
	);
}
