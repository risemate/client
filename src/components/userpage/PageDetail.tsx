import {
	IconCheck,
	IconCoin,
	IconComment,
	IconProceeding,
	IconQuestion,
	IconWaiting,
} from '@icons';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { MyPageMode } from 'types/Page';

import PageItem from './PageItem';

interface PageDetailProps {
	page: 'mypage' | 'coaching';
	changeMode: (newMode: MyPageMode) => void;
}

export default function PageDetail({ page, changeMode }: PageDetailProps) {
	const navigate = useNavigate();
	const mypageItem1 = {
		items: [{ name: '보유 코인', icon: <IconCoin />, state: '220p' }],
		buttonEvent: { name: '결제 내역 보기', onClick: () => changeMode('payment') },
	};
	const mypageItem2 = {
		items: [{ name: '후기', icon: <IconComment />, state: '1개' }],
		buttonEvent: { name: '후기 관리하기', onClick: () => changeMode('review') },
	};
	const mypageItem3 = {
		items: [
			{ name: '진행 중인 첨삭', icon: <IconProceeding />, state: '0개' },
			{ name: '완료한 첨삭', icon: <IconCheck />, state: '1개' },
		],
		buttonEvent: { name: '페이지로 이동', onClick: () => navigate('/resumes') },
	};

	const coachingItem1 = {
		items: [{ name: '보유 캐시', icon: <IconCoin />, state: '100,000' }],
		buttonEvent: { name: '출금 요청하기', onClick: () => alert('hello') },
	};
	const coachingItem2 = {
		items: [{ name: '후기', icon: <IconComment />, state: '100개' }],
		buttonEvent: { name: '후기 관리하기', onClick: () => alert('hello') },
	};
	const coachingItem3 = {
		items: [{ name: '문의', icon: <IconQuestion />, state: '100개' }],
		buttonEvent: { name: '문의 관리하기', onClick: () => alert('hello') },
	};
	const coachingItem4 = {
		items: [
			{ name: '응답 대기', icon: <IconWaiting />, state: '10개' },
			{ name: '진행 중', icon: <IconProceeding />, state: '10개' },
			{ name: '완료', icon: <IconCheck />, state: '10개' },
		],
		buttonEvent: { name: '페이지로 이동', onClick: () => alert('hello') },
	};
	return (
		<StyledPageDetail>
			{page === 'mypage' && (
				<>
					<div>
						<PageItem items={mypageItem1.items} buttonEvent={mypageItem1.buttonEvent} />
						<PageItem items={mypageItem2.items} buttonEvent={mypageItem2.buttonEvent} />
					</div>
					<div>
						<PageItem items={mypageItem3.items} buttonEvent={mypageItem3.buttonEvent} />
					</div>
				</>
			)}
			{page === 'coaching' && (
				<>
					<div>
						<PageItem
							items={coachingItem1.items}
							buttonEvent={coachingItem1.buttonEvent}
						/>
						<PageItem
							items={coachingItem2.items}
							buttonEvent={coachingItem2.buttonEvent}
						/>
						<PageItem
							items={coachingItem3.items}
							buttonEvent={coachingItem3.buttonEvent}
						/>
					</div>
					<div>
						<PageItem
							items={coachingItem4.items}
							buttonEvent={coachingItem4.buttonEvent}
						/>
					</div>
				</>
			)}
		</StyledPageDetail>
	);
}

const StyledPageDetail = styled.section`
	${({ theme }) => theme.common.flexCenterColumn};
	justify-content: space-between;
	& > div:first-child {
		border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
		padding: 30px 0 50px;
	}
	& > div:nth-child(2) {
		padding: 50px 0 30px;
	}
	& > div {
		height: calc(100% / 2);
		width: 100%;
		${({ theme }) => theme.common.flexCenter};
	}
	@media screen and (max-width: 990px) {
		& > div:first-child {
			padding: 50px 0;
		}
		& > div:nth-child(2) {
			padding: 50px 0 0;
		}
	}
`;
