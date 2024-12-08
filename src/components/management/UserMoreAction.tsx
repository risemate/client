import { useModal } from '@hooks/atoms/useModalAtom';
import usePendingItem from '@page/CoachManagement/components/Pending/PendingItem.hook';
import { authQuery } from '@queries/user';
import React from 'react';
import styled from 'styled-components';
import { CoachingExpertResponse, CoachingResponse } from 'types/coach/coaching';

import Button from '@common/Button';
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
						<div>
							<HelperText position='topLeft'>
								전문가 승인 후에는 취소가 불가합니다.
							</HelperText>
							<Button variant='border' size='small'>
								취소
							</Button>
						</div>
					</>
				)}
				{data.progressStatus === 'REJECTED' && (
					<div className='reject_wrap'>
						<p> 첨삭 요청이 거절 되었습니다. </p>
						<p>
							받은 메시지: <span>시간없음{/* data.chat[1] 의 데이터로 바꾸기 */}</span>
						</p>
					</div>
				)}

				{data.progressStatus !== 'PENDING' && data.progressStatus !== 'REJECTED' && (
					<ChatWrapper>
						<div>
							<p>전문가와 소통하거나 첨삭 결과를 승인하세요! </p>
							<HelperText>
								메시지를 보내거나 첨삭 결과를 승인할 경우, 아래 버튼을 눌러 진행 상태를
								업데이트하세요.
							</HelperText>
						</div>
						<div>
							<Button variant='navy' onClick={openChatModal}>
								메시지 보내기
							</Button>
							<Button variant='navy'>첨삭 승인</Button>
						</div>
					</ChatWrapper>
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

const Wrap = styled.div`
	.btn_wrap {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 10px;
		p {
			font-weight: 700;
		}
	}
	.reject_wrap {
		p:nth-of-type(2) {
			font-weight: 400;
			font-size: ${({ theme }) => theme.fontSizes.small};
			color: ${({ theme }) => theme.colors.darkerGrey};
			span {
				font-weight: bold;
				font-size: ${({ theme }) => theme.fontSizes.default};
				color: ${({ theme }) => theme.colors.navy};
			}
		}
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
