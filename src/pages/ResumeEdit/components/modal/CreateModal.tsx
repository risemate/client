import useResumeEdit from 'pages/ResumeEdit/ResumeEdit.hook';
import { useParams } from 'react-router-dom';

import Modal from '@components/modal/Modal';

export default function CreateModal() {
	const { id } = useParams();
	const { formId } = useResumeEdit(id || '');
	return (
		<Modal
			title='이력서 생성'
			confirm='생성'
			buttonFormId={formId}
			queryKey='create-resume'
		>
			이력서를 해당 내용으로 생성하시겠습니까?
		</Modal>
	);
}
