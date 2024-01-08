import useResumeEdit from 'pages/ResumeEdit/ResumeEdit.hook';
import React from 'react';
import { useParams } from 'react-router-dom';

import Modal from '@components/modal/Modal';

export default function CreateModal() {
	const { id } = useParams();
	const {
		createModal: { isModal },
	} = useResumeEdit(id || '');
	return (
		<>
			{isModal && (
				<Modal title='이력서 생성' confirm='생성'>
					새로운 이력서를 해당 내용으로 생성하시겠습니까?
				</Modal>
			)}
		</>
	);
}
