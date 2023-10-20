import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

interface AlarmItemProps {
	alarm: { title: string; content: string; time: string; isRead: boolean };
}

export default function AlarmItem({ alarm }: AlarmItemProps) {
	const [isAlarmRead, setIsAlarmRead] = useState(alarm.isRead);
	const navigate = useNavigate();
	const moveToLink = () => {
		setIsAlarmRead(true);
		navigate('/');
	};
	const checkboxChange = () => {
		setIsAlarmRead(true);
	};
	return (
		<StyledAlarmItem>
			<StyledCheckbox>
				{alarm.title}
				<input
					name='알림 읽음 표시'
					type='checkbox'
					checked={isAlarmRead}
					onChange={checkboxChange}
				/>
				<span />
			</StyledCheckbox>
			<button type='button' onClick={moveToLink}>
				<span>{alarm.content}</span>
				<br />
				<time>{alarm.time}</time>
			</button>
		</StyledAlarmItem>
	);
}

const StyledAlarmItem = styled.div`
	display: flex;
	flex-direction: column;
	padding: 20px 0;
	&:not(:last-child) {
		border-bottom: 0.5px solid ${({ theme }) => theme.colors.grey};
	}
	button {
		font-size: ${({ theme }) => theme.fontSizes.small};
		text-align: start;
		margin: 0;
		span {
			display: inline-block;
			padding-bottom: 10px;
		}
		time {
			color: ${({ theme }) => theme.colors.darkGrey};
		}
	}
`;

const StyledCheckbox = styled.label`
	cursor: pointer;
	position: relative;
	padding-left: 30px;
	color: ${({ theme }) => theme.colors.blue};
	font-size: ${({ theme }) => theme.fontSizes.small};
	font-weight: bold;
	padding: 2px 20px 10px;
	input[type='checkbox'] {
		position: absolute;
		opacity: 0;
		height: 0;
		width: 0;
	}
	span {
		position: absolute;
		top: 0;
		left: 0;
		height: 15px;
		width: 15px;
		border-radius: 10%;
		border: 2px solid ${({ theme }) => theme.colors.mint};
		background-color: white;
		&:after {
			content: '';
			position: absolute;
			display: block;
			transform: translate(-5%, 5%);
			width: 12px;
			height: 12px;
			background: url('data:image/svg+xml;utf8,<svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.8574 2.55403C11.2211 2.13839 11.1789 1.50663 10.7633 1.14294C10.3477 0.779263 9.71591 0.82138 9.35222 1.23702L4.41815 6.87595L2.69557 4.57917C2.3642 4.13734 1.73739 4.0478 1.29557 4.37917C0.853739 4.71054 0.764196 5.33734 1.09557 5.77917L3.55823 9.06273C3.83473 9.43139 4.3169 9.55478 4.72568 9.39304C4.86683 9.33748 4.99735 9.2489 5.105 9.1281C5.10815 9.12458 5.11126 9.12104 5.11435 9.11749L10.8574 2.55403Z" fill="white"/></svg>')
				no-repeat;
		}
	}
	input[type='checkbox']:checked ~ span {
		background-color: ${({ theme }) => theme.colors.mint};
		&:after {
			display: block;
		}
	}
`;
