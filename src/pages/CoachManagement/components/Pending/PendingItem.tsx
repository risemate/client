import styled from 'styled-components';
import { CoachingExpertResponse } from 'types/coach/coaching';

import Button from '@common/Button';
import Input from '@components/input/Input';
import Modal from '@components/modal/base/Modal';

import usePendingItem from './PendingItem.hook';

interface PendingItemProps {
	pending: CoachingExpertResponse;
}

export default function PendingItem({ pending }: PendingItemProps) {
	const { timeRemain, navigateToResume, acceptModal, refuseModal } =
		usePendingItem(pending);
	return (
		<PedningWrapper>
			<h4>@ 00님의 이력서 첨삭 요청이 있습니다.</h4>
			<div>
				이력서 Link{' '}
				<Button variant='blue' size='small' onClick={navigateToResume}>
					바로 가기
				</Button>
			</div>
			<Input label='메시지 전달 내용' value='dasdf' readOnly />
			<p>
				응답 처리까지 남은 시간: <span>{timeRemain}</span>
			</p>
			<div>
				<Button variant='navy' size='medium' onClick={acceptModal.open}>
					수락
				</Button>
				<Button variant='navy' size='medium' onClick={refuseModal.open}>
					거절
				</Button>
			</div>
			<Modal
				title={`${pending.selectedPackage} 수락`}
				confirm='수락'
				queryKey={acceptModal.queryKey}
			>
				{pending.selectedPackage} 코칭을 수락하시겠습니까?
			</Modal>
			<Modal
				title={`${pending.selectedPackage} 거절`}
				confirm='거절'
				queryKey={refuseModal.queryKey}
			>
				{pending.selectedPackage} 코칭을 거절하시겠습니까?
			</Modal>
		</PedningWrapper>
	);
}

const PedningWrapper = styled.li`
	div:nth-of-type(1) {
		margin: 10px 0;
		button {
			margin-left: 10px;
		}
	}
	p {
		font-size: ${({ theme }) => theme.fontSizes.small};
		position: absolute;
		top: 30px;
		right: 30px;
		span {
			font-weight: bold;
		}
	}
	div:nth-of-type(2) {
		text-align: center;
		margin-top: 10px;
		button:first-child {
			margin-right: 30px;
		}
	}
`;
