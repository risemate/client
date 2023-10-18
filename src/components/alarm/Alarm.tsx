import React, { RefObject, useEffect, useRef } from 'react';
import styled from 'styled-components';

import AlarmItem from './AlarmItem';

interface AlarmProps {
	closeAlarm: () => void;
	btnAlarmRef: RefObject<HTMLButtonElement | null>;
}

export default function Alarm({ closeAlarm, btnAlarmRef }: AlarmProps) {
	const alarmRef = useRef<HTMLDivElement | null>(null);
	const alarms = [
		{
			title: '이력서 첨삭 요청',
			content:
				'@000 님에게 이력서 첨삭 요청이 왔습니다. 2일 이상 미응답시 자동 거절 처리됩니다. ',
			time: '2023.09.22 (금)',
			isRead: true,
		},
		{
			title: '이력서 첨삭 요청',
			content:
				'@000 님에게 이력서 첨삭 요청이 왔습니다. 2일 이상 미응답시 자동 거절 처리됩니다. ',
			time: '2023.09.22 (금)',
			isRead: false,
		},
		{
			title: '이력서 첨삭 요청',
			content:
				'@000 님에게 이력서 첨삭 요청이 왔습니다. 2일 이상 미응답시 자동 거절 처리됩니다. ',
			time: '2023.09.22 (금)',
			isRead: false,
		},
		{
			title: '이력서 첨삭 요청',
			content:
				'@000 님에게 이력서 첨삭 요청이 왔습니다. 2일 이상 미응답시 자동 거절 처리됩니다. ',
			time: '2023.09.22 (금)',
			isRead: false,
		},
		{
			title: '이력서 첨삭 요청',
			content:
				'@000 님에게 이력서 첨삭 요청이 왔습니다. 2일 이상 미응답시 자동 거절 처리됩니다. ',
			time: '2023.09.22 (금)',
			isRead: false,
		},
	];
	useEffect(() => {
		function alarmOutsideClick(event: MouseEvent) {
			if (
				alarmRef.current &&
				!alarmRef.current.contains(event.target as Node) &&
				btnAlarmRef.current &&
				!btnAlarmRef.current.contains(event.target as Node)
			) {
				closeAlarm();
			}
		}
		document.addEventListener('click', alarmOutsideClick);
		return () => {
			document.removeEventListener('click', alarmOutsideClick);
		};
	}, [closeAlarm]);

	const readAllAlarm = () => {
		alarms.forEach(alarm => {
			alarm.isRead = true;
		});
	};

	return (
		<StyledAlarm ref={alarmRef}>
			<StyledRadio>
				<input type='radio' onChange={readAllAlarm} />
				<span />
				전체 읽음 처리
			</StyledRadio>
			<ul>
				{alarms.map((alarm, index) => {
					return (
						<li key={index}>
							<AlarmItem alarm={alarm} />
						</li>
					);
				})}
			</ul>
		</StyledAlarm>
	);
}

const StyledAlarm = styled.article`
	position: absolute;
	overflow-y: scroll;
	-ms-overflow-style: none;
	scrollbar-width: none;
	&::-webkit-scrollbar {
		display: none;
	}
	top: 85px;
	right: 0;
	width: 375px;
	max-height: 500px;
	padding: 30px;
	flex-shrink: 0;
	border-radius: 10px;
	border: 1px solid ${({ theme }) => theme.colors.grey};
	background: ${({ theme }) => theme.colors.white};
	box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.1);
	z-index: 100;
	& > label {
		position: absolute;
		top: 15px;
		right: 20px;
		color: ${({ theme }) => theme.colors.navy};
		font-size: ${({ theme }) => theme.fontSizes.tiny};
		input {
			color: ${({ theme }) => theme.colors.navy};
			padding-right: 10px;
		}
	}
`;

const StyledRadio = styled.label`
	cursor: pointer;
	position: relative;
	font-weight: 400;
	padding-left: 15px;
	input[type='radio'] {
		position: absolute;
		opacity: 0;
		height: 0;
		width: 0;
	}
	span {
		position: absolute;
		top: 0;
		left: 0;
		height: 10px;
		width: 10px;
		border-radius: 50%;
		border: 1px solid ${({ theme }) => theme.colors.navy};
		background-color: ${({ theme }) => theme.colors.white};
		&:after {
			content: '';
			position: absolute;
			display: none;
			transform: translate(1px, 1px);
			width: 6px;
			height: 6px;
			border-radius: 50%;
			background: ${({ theme }) => theme.colors.navy};
		}
	}
	input[type='radio']:checked ~ span {
		&:after {
			display: block;
		}
	}
`;
