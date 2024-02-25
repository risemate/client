import React from 'react';
import styled from 'styled-components';
import { ResumeOrderType } from 'types/Resume';

import Toggle from '@components/input/Toggle';

import useNavigationListItem from './NavigationListItem.hook';

interface NavigationListItemProps {
	orderItem: ResumeOrderType;
	index: number;
	moveItem: (dragIndex: number, hoverIndex: number) => void;
}

export default function NavigationListItem({
	orderItem,
	index,
	moveItem,
}: NavigationListItemProps) {
	const { ref, handlerId, opacity, drag, drop } = useNavigationListItem(
		orderItem.id,
		index,
		moveItem,
	);
	drag(drop(ref));

	return (
		<NavListItem ref={ref} data-handler-id={handlerId} $opacity={opacity}>
			<span>{orderItem.label}</span>
			<Toggle checked={orderItem.isVisible} onChange={() => console.log('he')} />
		</NavListItem>
	);
}

interface StyledNavListItemProps {
	$opacity: number;
}

const NavListItem = styled.li<StyledNavListItemProps>`
	opacity: ${({ $opacity }) => $opacity};
	display: flex;
	justify-content: space-between;
	align-items: center;
	color: ${({ theme }) => theme.colors.darkGrey};
`;
