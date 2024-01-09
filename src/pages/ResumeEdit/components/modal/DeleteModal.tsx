import useResumeEdit from 'pages/ResumeEdit/ResumeEdit.hook';
import { useParams } from 'react-router-dom';

import Modal from '@components/modal/Modal';

export default function DeleteModal() {
	const { id } = useParams();
	const {
		deleteModal: { deleteResume },
	} = useResumeEdit(id || '');
	return (
		<Modal
			title='이력서 삭제'
			confirm='삭제'
			onClick={deleteResume}
			queryKey='delete-resume'
		>
			해당 이력서를 삭제하시겠습니까?
		</Modal>
	);
}
