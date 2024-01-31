import { useLocation, useParams } from 'react-router-dom';

import Modal from '@components/modal/Modal';

import useDocView from '../DocView.hook';

export default function DeleteModal() {
	const { id } = useParams();
	const { pathname } = useLocation();
	const {
		deleteModal: { deleteResume },
	} = useDocView(id || '', pathname);
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
