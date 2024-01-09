import Modal from '@components/modal/Modal';

export default function CreateModal() {
	return (
		<Modal title='이력서 생성' confirm='생성' queryKey='create-resume'>
			이력서를 해당 내용으로 생성하시겠습니까?
		</Modal>
	);
}
