import useResumeWrite from 'pages/Write/components/WriteResume/WirteResume.hook';

import Modal from '@components/modal/base/Modal';

export default function SaveCoverletterModal() {
	const { formId } = useResumeWrite();
	return (
		<Modal
			title='자기소개서 저장'
			confirm='저장'
			buttonFormId={formId}
			queryKey='save-coverletter'
		>
			자기소개서를 해당 내용으로 저장하시겠습니까?
		</Modal>
	);
}
