import useResumeEdit from 'pages/ResumeEdit/ResumeEdit.hook';
import { useParams } from 'react-router-dom';

import Modal from '@components/modal/base/Modal';

export default function UpdateModal() {
	const { id } = useParams();
	const { formId } = useResumeEdit(id || '');
	return (
		<Modal
			title='이력서 수정'
			confirm='저장'
			buttonFormId={formId}
			queryKey='update-resume'
		>
			해당 이력서를 현재 상태로 저장하시겠습니까?
		</Modal>
	);
}
