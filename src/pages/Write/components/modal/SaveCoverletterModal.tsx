import Modal from '@components/modal/base/Modal';

import useCoverletterWrite from '../WriteCoverletter/WirteCoverletter.hook';

export default function SaveCoverletterModal() {
	const { formId } = useCoverletterWrite();
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
