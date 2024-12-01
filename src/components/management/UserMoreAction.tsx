import { useModal } from '@hooks/atoms/useModalAtom';
import usePendingItem from '@page/CoachManagement/components/Pending/PendingItem.hook';
import { authQuery } from '@queries/user';
import React from 'react';
import styled from 'styled-components';
import { CoachingExpertResponse, CoachingResponse } from 'types/coach/coaching';

import HelperText from '@common/HelperText';
import InputModal from '@components/modal/InputModal';

import Chat from './Chat';

const UserMoreAction: React.FC<{ data: CoachingResponse }> = ({ data }) => {
	const { acceptModal, refuseModal, messageField } = usePendingItem(data);
	const { openModal: openChatModal } = useModal('coaching-community');
	const { data: auth } = authQuery();
	// const isExpert = auth?._id === data.expert._id;
	return (
		<Wrap>
			<div className='btn_wrap'>
				{data.progressStatus === 'PENDING' && (
					<>
						<p> 승인 대기중입니다. </p>
						<Button>
							{' '}
							<HelperText position='topRight'>
								승인되면 취소 불가
								<br />
							</HelperText>
							취소 (준비중)
						</Button>
					</>
				)}
				{data.progressStatus === 'REJECTED' && (
					<div>
						<p> 첨삭 요청이 거절 되었습니다. </p>
						<p>받은 메시지: 시간없음{/* data.chat[1] 의 데이터로 바꾸기 */}</p>
					</div>
				)}

				{data.progressStatus !== 'PENDING' && data.progressStatus !== 'REJECTED' && (
					<Button style={{ display: 'flex' }} onClick={openChatModal}>
						<HelperText position='topLeft'>
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

UserMoreAction.displayName = 'UserMoreAction';
export default React.memo(UserMoreAction);

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
