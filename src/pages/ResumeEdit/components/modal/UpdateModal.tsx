import useResumeEdit from 'pages/ResumeEdit/ResumeEdit.hook';
import React from 'react';
import { useParams } from 'react-router-dom';

import Modal from '@components/modal/Modal';

export default function UpdateModal() {
	const { id } = useParams();
	const {
		formId,
		updateModal: { isModal },
	} = useResumeEdit(id || '');
	return (
		<>
			{isModal && (
				<Modal title='이력서 수정' confirm='수정' buttonFormId={formId}>
					해당 이력서를 현재 상태로 수정하시겠습니까?
				</Modal>
			)}
		</>
	);
}
