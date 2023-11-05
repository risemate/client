import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

interface AlarmItemProps {
	alarm: { title: string; content: string; time: string; isRead: boolean };
}

export default function AlarmItem({ alarm }: AlarmItemProps) {
	const navigate = useNavigate();

	const submitAlarmState = async () => {
		console.info('서버에 읽음 처리 요청 하기');
	};

	const alarmClicked = async () => {
		await submitAlarmState();
		navigate('/알람내용페이지로 보내기');
	};
	return (
		<StyledAlarmItem onClick={alarmClicked}>
			<Title>
				{!alarm.isRead && <span />}
				{alarm.title}
			</Title>
			<div className='contents'>
				<span>{alarm.content}</span>
				<br />
				<time>{alarm.time}</time>
			</div>
		</StyledAlarmItem>
	);
}

const Title = styled.h3`
	position: relative;
	cursor: pointer;
	position: relative;
	padding-left: 30px;
	color: ${({ theme }) => theme.colors.blue};
	font-size: ${({ theme }) => theme.fontSizes.small};
	font-weight: bold;
	padding: 2px 0 10px;
	span {
		display: inline-block;
		vertical-align: top;
		width: 4px;
		height: 4px;
		background-color: red;
		border-radius: 100%;
		margin-right: 5px;
	}
`;

const StyledAlarmItem = styled.button`
	display: flex;
	flex-direction: column;
	padding: 20px 0;
	.contents {
		font-size: ${({ theme }) => theme.fontSizes.small};
		text-align: start;
		margin: 0;
		span {
			display: inline-block;
			padding-bottom: 10px;
			color: ${({ theme }) => theme.colors.navy};
		}
		time {
			color: ${({ theme }) => theme.colors.darkGrey};
		}
	}
`;
