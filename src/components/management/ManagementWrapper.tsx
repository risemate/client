import useTab from '@hooks/common/useTab';
import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';
import { TabItem } from 'types/common/tab';

import Tab from '@common/Tab';
import WhiteBoxWrapper from '@components/base-wrappers/WhiteBoxWrapper';
import Container from '@components/layout/Container';

import ExpertCoachingManagement from './ExpertCoachingManagement';
import UserCoachingManagement from './UserCoachingManagement';

interface ManagementWrapperProps {
	isExpert?: boolean;
	waitingContent: ReactNode;
	inProgressContent: ReactNode;
	completeContent: ReactNode;
}

export default function ManagementWrapper({
	isExpert = false,
	waitingContent,
	inProgressContent,
	completeContent,
}: ManagementWrapperProps) {
	const tabItems: TabItem[] = [
		{ label: '대기', value: 'WAITING' },
		{ label: '진행 중', value: 'INPROGRESS' },
		{ label: '완료', value: 'COMPLETE' },
	];
	const { currentTab, changeTab, isCurrentTab } = useTab(tabItems, true);
	return (
		<Container backgroundColor='lightGrey' padding>
			<WhiteBoxWrapper type='div' customCss={managementWrapperStyle}>
				<ManagementTitle>{isExpert ? '코칭 관리' : '첨삭 관리'}</ManagementTitle>
				{isExpert ? <ExpertCoachingManagement /> : <UserCoachingManagement />}
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
	li {
		position: relative;
		padding: 30px;
		border-radius: 10px;
		border: 1px solid ${({ theme }) => theme.colors.grey};
		background: white;
	}
`;
