import useTab from '@hooks/useTab';
import React from 'react';
import styled from 'styled-components';
import {
	Pending as PendingType,
	Progress as ProgressType,
	Complete as CompleteType,
} from 'types/Coach';

import Tab from '@common/Tab';

import Complete from '../components/editing-management/coach/Complete';
import Pending from '../components/editing-management/coach/Pending';
import Progress from '../components/editing-management/coach/Progress';

export default function CoachManagement() {
	const tabItems = ['대기', '진행 중', '완료'];
	const { currentTab, changeTab, isCurrentTab } = useTab(tabItems);
	const pendingList: PendingType[] = [{ temp: 1 }, { temp: 1 }, { temp: 1 }];
	const progressList: ProgressType[] = [{ temp: 1 }, { temp: 1 }, { temp: 1 }];
	const completeList: CompleteType[] = [{ temp: 1 }, { temp: 1 }, { temp: 1 }];
	return (
		<StyledManagement>
			<h2>코칭 관리</h2>
			<Tab items={tabItems} changeTab={changeTab} isCurrentTab={isCurrentTab} underline />
			{currentTab === '대기' && (
				<div>
					<h3>응답 대기</h3>
					<p>
						미확인 첨삭요청이 있습니다. <br />
						<span>2일 이상 미응답시 자동 거절처리 됩니다.</span>
					</p>
					<ul>
						{pendingList.map((pending, index) => (
							<li key={index}>
								<Pending pending={pending} />
							</li>
						))}
					</ul>
				</div>
			)}
			{currentTab === '진행 중' && (
				<div>
					<h3>진행 중인 첨삭 코칭</h3>
					<ul>
						{progressList.map((progress, index) => (
							<li key={index}>
								<Progress progress={progress} />
							</li>
						))}
					</ul>
				</div>
			)}
			{currentTab === '완료' && (
				<div>
					<h3>완료한 첨삭 코칭</h3>
					<ul>
						{completeList.map((complete, index) => (
							<li key={index}>
								<Complete complete={complete} />
							</li>
						))}
					</ul>
				</div>
			)}
		</StyledManagement>
	);
}

const StyledManagement = styled.div`
	min-height: 500px;
	height: calc(100vh - 300px);
	padding: 50px;
	h2 {
		color: ${({ theme }) => theme.colors.navy};
		font-size: ${({ theme }) => theme.fontSizes.medium};
		font-weight: bold;
		margin-bottom: 30px;
	}
	& > div {
		padding: 30px;
		h3 {
			color: ${({ theme }) => theme.colors.navy};
			font-weight: bold;
			margin-bottom: 20px;
		}
		& > p {
			line-height: 20px;
			& > span {
				color: red;
				font-size: ${({ theme }) => theme.fontSizes.small};
				font-weight: 200;
			}
		}
		ul {
			height: calc(100vh - 600px);
			display: flex;
			flex-direction: column;
			gap: 30px;
			padding-top: 20px;
			overflow-y: scroll;
		}
		ul li > div {
			position: relative;
			padding: 30px;
			border-radius: 10px;
			border: 1px solid ${({ theme }) => theme.colors.grey};
			background: white;
		}
	}
`;
