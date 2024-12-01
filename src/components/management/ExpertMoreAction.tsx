import { useModal } from '@hooks/atoms/useModalAtom';
import usePendingItem from '@page/CoachManagement/components/Pending/PendingItem.hook';
import { authQuery } from '@queries/user';
import React from 'react';
import styled from 'styled-components';
import { CoachingExpertResponse, CoachingResponse } from 'types/coach/coaching';

import HelperText from '@common/HelperText';
import InputModal from '@components/modal/InputModal';

import Chat from './Chat';

const ExpertMoreAction: React.FC<{ data: CoachingResponse }> = ({ data }) => {
	const { timeRemain, navigateToResume, acceptModal, refuseModal, messageField } =
		usePendingItem(data);
	const { openModal: openChatModal } = useModal('coaching-community');
	const { data: auth } = authQuery();
	const isExpert = auth?._id === data.expert._id;
	return (
		<Wrap>
			<div className='btn_wrap'>
				{data.progressStatus === 'PENDING' && (
					<div>
						<p>요청메시지: 자소서첨삭해주세요 {/* data.chat[0] 의 데이터로 바꾸기 */}</p>
						<div>
							<Button onClick={acceptModal.open}>수락</Button>
							<Button onClick={refuseModal.open}>거절</Button>
						</div>
					</div>
				)}
				{data.progressStatus === 'REJECTED' && <p> 요청을 거절하였습니다. </p>}

				{data.progressStatus !== 'PENDING' && data.progressStatus !== 'REJECTED' && (
					<Button style={{ display: 'flex' }} onClick={openChatModal}>
						<HelperText position='topRight'>
							첨삭완료나 추가자료 요청시 메시지를 보낼수 있습니다. <br />
						</HelperText>
						메이트 챗
					</Button>
				)}
			</div>
			<InputModal
				title={`${data.selectedPackage} 수락`}
				confirm='수락'
				queryKey={acceptModal.queryKey}
				buttonFormId='accept-form'
				{...messageField}
			>
				첨삭 요청을 수락하시겠습니까?
			</InputModal>

			<InputModal
				title={`${data.selectedPackage} 거절`}
				confirm='거절'
				queryKey={refuseModal.queryKey}
				buttonFormId='refuse-form'
				{...messageField}
			>
				첨삭 요청을 거절하시겠습니까?
			</InputModal>
			<Chat data={data} />
		</Wrap>
	);
};

ExpertMoreAction.displayName = 'ExpertMoreAction';
export default React.memo(ExpertMoreAction);

const Button = styled.button`
	border: solid 1px #dbdbdb;
	padding: 5px 10px;
	border-radius: 10px;
	height: fit-content;
`;

const Wrap = styled.div`
	.btn_wrap {
		display: flex;
		justify-content: space-between;
		padding: 10px;
	}
`;
