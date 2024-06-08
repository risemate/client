import Modal from './base/Modal';

interface SaveModalProps {
	title: string;
	queryKey: string;
	buttonFormId: string;
}

export default function SaveModal({ title, queryKey, buttonFormId }: SaveModalProps) {
	return (
		<Modal
			title={`${title} 저장`}
			confirm='저장'
			buttonFormId={buttonFormId}
			queryKey={queryKey}
		>
			{title}을(를) 해당 내용으로 저장하시겠습니까?
		</Modal>
	);
}
