import useResumeWrite from 'pages/Write/components/WriteResume/WirteResume.hook';

import Modal from '@components/modal/base/Modal';

export default function CreateModal() {
	const { formId } = useResumeWrite();
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
