import React from 'react';
import styled from 'styled-components';
import { Pending as PendingType } from 'types/Coach';

import Button from '@common/Button';
import Input from '@common/input/Input';

interface PendingProps {
	pending: PendingType;
}

// eslint-disable-next-line
export default function Pending({ pending }: PendingProps) {
	return (
		<StyledPedning>
			<h4>@ 00님의 이력서 첨삭 요청이 있습니다.</h4>
			<div className='link-wrapper'>
				이력서 Link{' '}
				<Button variant='blue' size='small'>
					바로 가기
				</Button>
			</div>
			<Input label='메시지 전달 내용' value='dasdf' readOnly />
			<p>
				응답 처리까지 남은 시간: <span>47:00:59</span>
			</p>
			<div className='btn-wrapper'>
				<Button variant='navy' size='medium'>
					수락
				</Button>
				<Button variant='navy' size='medium'>
					거절
				</Button>
			</div>
		</StyledPedning>
	);
}

const StyledPedning = styled.div`
	.link-wrapper {
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
	.btn-wrapper {
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
