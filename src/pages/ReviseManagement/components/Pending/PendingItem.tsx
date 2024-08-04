import { calculateTimeRemaining } from '@utils/timeUtil';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { CoachingResponse } from 'types/coach/coaching';

import Button from '@common/Button';
import Input from '@components/input/Input';

interface PendingItemProps {
	pending: CoachingResponse;
}

export default function PendingItem({ pending }: PendingItemProps) {
	const [timeRemain, setTimeRemain] = useState<string>('00:00:00');
	const navigate = useNavigate();
	useEffect(() => {
		const settingTimeRemain = () => {
			setTimeRemain(calculateTimeRemaining(pending.createdAt));
		};
		const intervalId = setInterval(settingTimeRemain, 1000);
		return () => clearInterval(intervalId);
	}, [pending.createdAt]);
	return (
		<PedningWrapper>
			<h4>@ 00님께 이력서 첨삭을 요청드린 상태이며, 답변을 기다리고 있습니다.</h4>
			<Button
				variant='blue'
				onClick={() => navigate(`/my-info/docs/${pending.originDoc}`)}
			>
				첨부한 이력서 보러 가기
			</Button>
			<Input label='메시지 전달 내용' value='dasdf' readOnly />
			<p>
				응답 처리까지 남은 시간: <span>{timeRemain}</span>
			</p>
			<Button variant='navy' size='medium'>
				취소
			</Button>
		</PedningWrapper>
	);
}

const PedningWrapper = styled.li`
	button {
		margin: 10px 0;
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
`;
