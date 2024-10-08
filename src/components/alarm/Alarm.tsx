import useClickOutside from '@hooks/common/useClickOutside';
import { useIntersectionObserver } from '@hooks/useIntersectionObserver ';
import { RefObject } from 'react';
import styled from 'styled-components';

import Spinner from '@common/Spinner';

import useAlarm from './Alarm.hook';
import AlarmItem from './AlarmItem';

interface AlarmProps {
	closeAlarm: () => void;
	btnAlarmRef: RefObject<HTMLButtonElement | null>;
}

export default function Alarm({ closeAlarm, btnAlarmRef }: AlarmProps) {
	const { alarmRef, alarms, readAllAlarm, fetchNextPage, hasNextPage, isLoading } =
		useAlarm();
	useClickOutside([alarmRef, btnAlarmRef], closeAlarm);

	const { setTarget } = useIntersectionObserver({
		hasNextPage,
		fetchNextPage,
	});

	return (
		<AlarmArticle ref={alarmRef}>
			<ReadAllInput>
				<input type='radio' onChange={readAllAlarm} />
				<span />
				전체 읽음 처리
			</ReadAllInput>
			<ul>
				{alarms.map(alarm => {
					return (
						<li key={alarm._id}>
							<AlarmItem alarm={alarm} />
						</li>
					);
				})}
			</ul>
			{isLoading && <Spinner />}
			{!isLoading && <div ref={setTarget} />}
		</AlarmArticle>
	);
}

const AlarmArticle = styled.article`
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
	height: 500px;
	padding: 15px 30px;
	flex-shrink: 0;
	border-radius: 10px;
	border: 1px solid ${({ theme }) => theme.colors.grey};
	background: white;
	box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.1);
	z-index: 100;
	ul > li {
		&:not(:last-child) {
			border-bottom: 0.5px solid ${({ theme }) => theme.colors.grey};
		}
	}
	.loading {
		padding: 20px 0;
		text-align: center;
		color: ${({ theme }) => theme.colors.darkerGrey};
	}
`;

const ReadAllInput = styled.label`
	cursor: pointer;
	position: relative;
	font-weight: 400;
	padding-left: 15px;
	position: absolute;
	top: 15px;
	right: 20px;
	color: ${({ theme }) => theme.colors.navy};
	font-size: ${({ theme }) => theme.fontSizes.tiny};
	input[type='radio'] {
		position: absolute;
		opacity: 0;
		height: 0;
		width: 0;
		color: ${({ theme }) => theme.colors.navy};
		padding-right: 10px;
	}
	span {
		position: absolute;
		top: 0;
		left: 0;
		height: 10px;
		width: 10px;
		border-radius: 50%;
		border: 1px solid ${({ theme }) => theme.colors.navy};
		background-color: white;
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
