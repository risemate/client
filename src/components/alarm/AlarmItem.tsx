import React from 'react';
import styled from 'styled-components';

import useAlarm from './Alarm.hook';

interface AlarmItemProps {
	alarm: { title: string; content: string; time: string; isRead: boolean };
}

export default function AlarmItem({ alarm }: AlarmItemProps) {
	const { alarmClicked } = useAlarm();
	return (
		<AlarmItemButton onClick={alarmClicked}>
			<AlarmItemTitle>
				{!alarm.isRead && <span />}
				{alarm.title}
			</AlarmItemTitle>
			<div className='contents'>
				<span>{alarm.content}</span>
				<br />
				<time>{alarm.time}</time>
			</div>
		</AlarmItemButton>
	);
}

const AlarmItemTitle = styled.h3`
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
		width: 5px;
		height: 5px;
		background-color: ${({ theme }) => theme.colors.blue};
		border-radius: 100%;
		margin-right: 4px;
		margin-top: 3.5px;
	}
`;

const AlarmItemButton = styled.button`
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
