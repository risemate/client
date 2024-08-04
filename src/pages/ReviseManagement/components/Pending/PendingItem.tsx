import styled from 'styled-components';
import { CoachingResponse } from 'types/coach/coaching';

import Button from '@common/Button';
import Input from '@components/input/Input';
import Modal from '@components/modal/base/Modal';

import usePendingItem from './PendingItem.hook';

interface PendingItemProps {
	pending: CoachingResponse;
}

export default function PendingItem({ pending }: PendingItemProps) {
	const { timeRemain, navigateToResume, navigateToProduct, cancelModel } =
		usePendingItem(pending);

	return (
		<PendingWrapper>
			<h4>@ 00님께 이력서 첨삭을 요청드린 상태이며, 답변을 기다리고 있습니다.</h4>
			<ProductWrapper>
				<p>선택한 코칭 상품</p>
				<button type='button' onClick={navigateToProduct}>
					상품 이름 {pending.selectedPackage}
				</button>
				<button type='button' onClick={navigateToResume}>
					첨부한 이력서 보러 가기 {'>'}
				</button>
				<Input label='메시지 전달 내용' value='dasdf' readOnly />
			</ProductWrapper>

			<StyledTimeRemaining>
				응답 처리까지 남은 시간: <span>{timeRemain}</span>
			</StyledTimeRemaining>
			<div>
				<Button variant='navy' size='medium' onClick={cancelModel.open}>
					취소
				</Button>
			</div>
			<Modal
				title={`${pending.selectedPackage} 취소`}
				confirm='확인'
				queryKey={cancelModel.queryKey}
			>
				{pending.selectedPackage} 코칭 신청을 취소하시겠습니까?
			</Modal>
		</PendingWrapper>
	);
}

const PendingWrapper = styled.li`
	div:last-child {
		text-align: center;
	}
`;

const StyledTimeRemaining = styled.p`
	font-size: ${({ theme }) => theme.fontSizes.small};
	position: absolute;
	top: 30px;
	right: 30px;
	span {
		font-weight: bold;
	}
`;

const ProductWrapper = styled.div`
	padding: 10px;
	margin: 10px 0;
	border: 1px solid ${({ theme }) => theme.colors.grey};
	border-radius: 10px;
	font-size: ${({ theme }) => theme.fontSizes.small};
	color: ${({ theme }) => theme.colors.darkGrey};
	line-height: 16px;
	position: relative;
	button:nth-of-type(1) {
		color: ${({ theme }) => theme.colors.darkerGrey};
		font-size: ${({ theme }) => theme.fontSizes.default};
		font-weight: 600;
		padding: 5px 0;
	}
	button:nth-of-type(2) {
		position: absolute;
		top: 10px;
		right: 10px;
		color: ${({ theme }) => theme.colors.navy};
	}
	button:hover {
		color: ${({ theme }) => theme.colors.blue};
		text-decoration: underline;
	}
`;
