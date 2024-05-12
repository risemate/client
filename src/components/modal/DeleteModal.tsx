import Modal from '@components/modal/base/Modal';

interface DeleteModalProps {
	title: string;
	queryKey: string;
	deleteResume: () => void;
}

export default function DeleteModal({ title, queryKey, deleteResume }: DeleteModalProps) {
	return (
		<Modal
			title={`${title} 삭제`}
			confirm='삭제'
			onClick={deleteResume}
			queryKey={queryKey}
		>
			해당 {title}를(을) 삭제하시겠습니까?
		</Modal>
	);
}
