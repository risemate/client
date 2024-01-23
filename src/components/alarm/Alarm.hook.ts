import { fetchReadAlarm, fetchReadAlarms } from '@api/alarms';
import { useAlarmQuery } from '@queries/useAlarms';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Alarm } from 'types/Alarm';

export default function useAlarm() {
	const navigate = useNavigate();
	const alarmRef = useRef<HTMLDivElement | null>(null);
	const { data, fetchNextPage, hasNextPage, isLoading, isFetched } = useAlarmQuery({
		pageSize: 2,
	});
	const [alarms, setAlarms] = useState<Alarm[]>([]);

	useEffect(() => {
		if (!isLoading && isFetched) {
			const newData = [] as Alarm[];
			data?.pages.map(page => {
				newData.push(...page.data);
			});
			setAlarms(newData);
		}
	}, [data, isLoading, isFetched]);

	const readAllAlarm = async () => {
		setAlarms(pre => {
			return pre.map(alarm => ({ ...alarm, isRead: true }));
		});

		await fetchReadAlarms();
	};

	const alarmClicked = async (alarm: Alarm) => {
		//: 여기 업데이트 잘 안됨
		setAlarms(prevAlarms => {
			return prevAlarms.map(pre => {
				if (pre._id === alarm._id) {
					return { ...pre, isRead: true, p: '' };
				}
				return pre;
			});
		});
		!alarm.isRead && (await fetchReadAlarm(alarm._id));
		alarm.url && navigate(alarm.url);
	};

	return {
		alarmRef,
		alarms,
		readAllAlarm,
		alarmClicked,
		isLoading,
		hasNextPage,
		fetchNextPage,
	};
}
