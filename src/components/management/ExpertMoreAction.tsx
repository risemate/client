import { useModal } from '@hooks/atoms/useModalAtom';
import { authQuery } from '@queries/user';
import React from 'react';
import styled from 'styled-components';
import { CoachingExpertResponse, CoachingResponse } from 'types/coach/coaching';

import HelperText from '@common/HelperText';
import Button from '@components/common/Button';
import InputModal from '@components/modal/InputModal';

import Chat from './Chat';
import usePendingItem from './PendingItem.hook';

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
					<FormWrapper>
						<p>
							요청메시지:{' '}
							<span>자소서첨삭해주세요 {/* data.chat[0] 의 데이터로 바꾸기 */}</span>
						</p>
						<div>
							<Button size='small' variant='navy' onClick={acceptModal.open}>
								수락
							</Button>
							<Button size='small' variant='border' onClick={refuseModal.open}>
								거절
							</Button>
						</div>
						<p>uid: {data._id}</p>
					</FormWrapper>
				)}
				{data.progressStatus === 'REJECTED' && <p> 요청을 거절하였습니다. </p>}
				{data.progressStatus !== 'PENDING' && data.progressStatus !== 'REJECTED' && (
					// <ChatWrapper>
					// 	<div>
					// 		<p>고객과 원활하게 소통하세요!</p>
					// 		<HelperText position='topRight'>
					// 			첨삭 완료 후 알림이나 추가 자료 요청 시 메시지를 전송할 수 있습니다.
					// 		</HelperText>
					// 	</div>
					// 	<Button onClick={openChatModal} variant='navy'>
					// 		메시지 보내기
					// 	</Button>
					// </ChatWrapper>
					<ChatWrapper>
						<div>
							<p>고객과 소통하거나 첨삭을 완료하세요! </p>
							<HelperText>
								메시지를 보내거나 첨삭을 완료한 경우, 아래 버튼을 눌러 진행 상태를
								업데이트하세요.
							</HelperText>
						</div>
						<div>
							<Button variant='navy' onClick={openChatModal}>
								메시지 보내기
							</Button>
							<Button variant='navy'>첨삭 완료</Button>
						</div>
					</ChatWrapper>
				)}
			</div>
			<InputModal
				title={`${data.docTitle} 이력서 첨삭 수락`}
				confirm='수락'
				queryKey={acceptModal.queryKey}
				buttonFormId='accept-form'
				{...messageField}
			>
				첨삭 요청을 수락하시겠습니까?
			</InputModal>

			<InputModal
				title={`${data.docTitle} 이력서 첨삭 거절`}
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

const Wrap = styled.div`
	.btn_wrap {
		display: flex;
		justify-content: space-between;
		padding: 10px;
	}
	p {
		font-weight: 700;
	}
`;

const FormWrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 10px;
	padding: 16px;
	position: relative;
	p {
		font-weight: 400;
		font-size: ${({ theme }) => theme.fontSizes.small};
		color: ${({ theme }) => theme.colors.darkerGrey};
		span {
			font-weight: bold;
			font-size: ${({ theme }) => theme.fontSizes.default};
			color: ${({ theme }) => theme.colors.navy};
		}
	}
	div {
		display: flex;
		gap: 8px;
	}
	p:nth-of-type(2) {
		position: absolute;
		bottom: 0;
		right: 10px;
		color: ${({ theme }) => theme.colors.darkGrey};
	}
`;

const ChatWrapper = styled.div`
	width: 100%;
	& > div {
		display: flex;
		gap: 10px;
		align-items: center;
		margin-bottom: 10px;
		& > p {
			padding: 0;
		}
	}
`;
