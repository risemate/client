import Modal from '@components/modal/base/Modal';

import useDocView from '../DocView.hook';

export default function DeleteModal() {
	const {
		deleteModal: { del },
	} = useDocView();
	return (
		<Modal title='이력서 삭제' confirm='삭제' onClick={del} queryKey='delete-resume'>
			해당 이력서를 삭제하시겠습니까?
		</Modal>
	);
}
