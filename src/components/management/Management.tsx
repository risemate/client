import useTab from '@hooks/common/useTab';
import styled, { css } from 'styled-components';
import {
	Complete as CompleteType,
	Management as ManagementType,
	Pending as PendingType,
	Progress as ProgressType,
} from 'types/coach/managment';
import { TabItem } from 'types/common/tab';

import Tab from '@common/Tab';
import WhiteBoxWrapper from '@components/base-wrappers/WhiteBoxWrapper';
import Container from '@components/layout/Container';

import Complete from './Complete';
import Pending from './Pending';
import Progress from './Progress';

interface ManagementProps {
	management?: ManagementType;
}

// eslint-disable-next-line
export default function Management({ management }: ManagementProps) {
	const tabItems: TabItem[] = [
		{ label: '대기', value: 'WAITING' },
		{ label: '진행 중', value: 'INPROGRESS' },
		{ label: '완료', value: 'COMPLETE' },
	];
	const { currentTab, changeTab, isCurrentTab } = useTab(tabItems, true);
	// const pendingList: PendingType[] = management.pending;
	// const progressList: ProgressType[] = management.progress
	// const completeList: CompleteType[] = management.complete;
	const pendingList: PendingType[] = [{ temp: 1 }, { temp: 1 }, { temp: 1 }];
	const progressList: ProgressType[] = [{ temp: 1 }, { temp: 1 }, { temp: 1 }];
	const completeList: CompleteType[] = [{ temp: 1 }, { temp: 1 }, { temp: 1 }];
	return (
		<Container backgroundColor='lightGrey' padding>
			<WhiteBoxWrapper type='div' customCss={managementWrapperStyle}>
				<ManagementTitle>코칭 관리</ManagementTitle>
				<Tab
					items={tabItems}
					changeTab={changeTab}
					isCurrentTab={isCurrentTab}
					underline
				/>
				{currentTab.value === 'WAITING' && (
					<ManagementTabWrapper>
						<h3>응답 대기</h3>
						<p>
							미확인 첨삭요청이 있습니다. <br />
							<span>2일 이상 미응답시 자동 거절처리 됩니다.</span>
						</p>
						<ManagementList>
							{pendingList.map((pending, index) => (
								<li key={index}>
									<Pending pending={pending} />
								</li>
							))}
						</ManagementList>
					</ManagementTabWrapper>
				)}
				{currentTab.value === 'INPROGRESS' && (
					<ManagementTabWrapper>
						<h3>진행 중인 첨삭 코칭</h3>
						<ManagementList>
							{progressList.map((progress, index) => (
								<li key={index}>
									<Progress progress={progress} />
								</li>
							))}
						</ManagementList>
					</ManagementTabWrapper>
				)}
				{currentTab.value === 'COMPLETE' && (
					<ManagementTabWrapper>
						<h3>완료한 첨삭 코칭</h3>
						<ManagementList>
							{completeList.map((complete, index) => (
								<li key={index}>
									<Complete complete={complete} />
								</li>
							))}
						</ManagementList>
					</ManagementTabWrapper>
				)}
			</WhiteBoxWrapper>
		</Container>
	);
}

const managementWrapperStyle = css`
	min-height: 300px;
	height: calc(100vh - 400px);
	padding: 50px;
	margin-top: 70px;
`;

const ManagementTitle = styled.h2`
	color: ${({ theme }) => theme.colors.navy};
	font-size: ${({ theme }) => theme.fontSizes.medium};
	font-weight: bold;
	margin-bottom: 30px;
`;

const ManagementTabWrapper = styled.div`
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
`;

const ManagementList = styled.ul`
	height: calc(100vh - 740px);
	display: flex;
	flex-direction: column;
	gap: 30px;
	padding-top: 20px;
	overflow-y: scroll;
	li > div {
		position: relative;
		padding: 30px;
		border-radius: 10px;
		border: 1px solid ${({ theme }) => theme.colors.grey};
		background: white;
	}
`;
