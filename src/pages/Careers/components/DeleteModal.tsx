import Modal from '@components/modal/base/Modal';

interface DeleteModalProps {
	deleteResume: () => void;
}

export default function DeleteModal({ deleteResume }: DeleteModalProps) {
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
