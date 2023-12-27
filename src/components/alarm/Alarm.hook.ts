import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export default function useAlarm() {
	const navigate = useNavigate();
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
	];

	const readAllAlarm = () => {
		alarms.forEach(alarm => {
			alarm.isRead = true;
		});
	};

	const submitAlarmState = async () => {
		console.info('서버에 읽음 처리 요청 하기');
	};

	const alarmClicked = async () => {
		await submitAlarmState();
		navigate('/알람내용페이지로 보내기');
	};

	return {
		alarmRef,
		alarms,
		readAllAlarm,
		alarmClicked,
	};
}
