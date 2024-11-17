import usePendingItem from '@page/CoachManagement/components/Pending/PendingItem.hook';
import React from 'react';
import styled from 'styled-components';
import { CoachingExpertResponse, CoachingResponse } from 'types/coach/coaching';

import InputModal from '@components/modal/InputModal';

interface PendingItemProps {
	pending: CoachingExpertResponse;
}

const CoachingConfirm: React.FC<{ pending: CoachingResponse }> = ({ pending }) => {
	const { timeRemain, navigateToResume, acceptModal, refuseModal, messageField } =
		usePendingItem(pending);

	return (
		<>
			<div>
				<Button onClick={acceptModal.open}>수락</Button>
				<Button onClick={refuseModal.open}>거절</Button>
			</div>
			<InputModal
				title={`${pending.selectedPackage} 수락`}
				confirm='수락'
				queryKey={acceptModal.queryKey}
				buttonFormId='accept-form'
				{...messageField}
			>
				@@님의 첨삭 요청을 수락하시겠습니까?
			</InputModal>

			<InputModal
				title={`${pending.selectedPackage} 거절`}
				confirm='거절'
				queryKey={refuseModal.queryKey}
				buttonFormId='refuse-form'
				{...messageField}
			>
				@@님의 첨삭 요청을 거절하시겠습니까?
			</InputModal>
		</>
	);
};

// React.memo를 사용할 때 displayName을 지정하여 디버깅을 쉽게 합니다.
CoachingConfirm.displayName = 'ProgressComp';
export default React.memo(CoachingConfirm);

const Button = styled.button`
	border: solid 1px #dbdbdb;
`;
