import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import styled from 'styled-components';

import Button from '@common/Button';

import NavigationListItem from './NavigationListItem/NavigationListItem';
import useWriteNavigation from './WriteNavigation.hook';

export default function WriteNavigation() {
	const { resumeOrder, moveItem } = useWriteNavigation();
	return (
		<NavigationWrapper>
			<TitleWrapper>
				<h2>항목 편집</h2>
				<span>
					토글을 사용하여 해당 섹션을 표시하거나 숨기고, 드래그 앤 드롭을 통해 섹션의
					순서를 변경할 수 있습니다.
				</span>
			</TitleWrapper>
			<DndProvider backend={HTML5Backend}>
				<ResumeOrderList>
					<li>기본 정보</li>
					{resumeOrder.map((order, index) => (
						<NavigationListItem
							key={order.id}
							orderItem={order}
							index={index}
							moveItem={moveItem}
						/>
					))}
				</ResumeOrderList>
			</DndProvider>
			<ButtonWrapper>
				<Button variant='navy' size='full'>
					저장하기
				</Button>
				<Button variant='border' type='button' size='full'>
					미리보기
				</Button>
			</ButtonWrapper>
		</NavigationWrapper>
	);
}

const NavigationWrapper = styled.article`
	width: 250px;
	background: white;
	height: fit-content;
	border-radius: 20px;
	padding: 20px;
	position: fixed;
	top: 125px;
	right: calc(100vw / 2 - 580px);
`;

const TitleWrapper = styled.div`
	border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
	padding-bottom: 10px;
	h2 {
		font-weight: bold;
		padding-bottom: 10px;
	}
	span {
		font-size: ${({ theme }) => theme.fontSizes.small};
	}
`;

const ResumeOrderList = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 5px;
	padding: 10px 0;
	li {
		font-weight: 500;
		padding: 5px;
		border-radius: 10px;
	}
`;

const ButtonWrapper = styled.div`
	& > button {
		margin-top: 10px;
	}
`;
