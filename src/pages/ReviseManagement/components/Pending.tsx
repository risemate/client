import React from 'react';
import styled from 'styled-components';
import { Pending as PendingType } from 'types/coach/managment';

import Button from '@common/Button';
import Input from '@components/input/Input';

interface PendingProps {
	pending: PendingType;
}

// eslint-disable-next-line
export default function Pending({ pending }: PendingProps) {
	return (
		<PedningWrapper>
			<h4>@ 00님께 이력서 첨삭을 요청드린 상태이며, 답변을 기다리고 있습니다.</h4>
			<div>
				이력서 Link{' '}
				<Button variant='blue' size='small'>
					바로 가기
				</Button>
			</div>
			<Input label='메시지 전달 내용' value='dasdf' readOnly />
			<p>
				응답 처리까지 남은 시간: <span>47:00:59</span>
			</p>
			<div>
				<Button variant='navy' size='medium'>
					취소
				</Button>
			</div>
		</PedningWrapper>
	);
}

const PedningWrapper = styled.div`
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
	input {
		min-height: 90px;
	}
`;
