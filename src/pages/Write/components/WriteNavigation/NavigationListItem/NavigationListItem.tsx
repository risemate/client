import styled from 'styled-components';
import { OrderType } from 'types/career/resume';

import Toggle from '@components/input/Toggle';

import useNavigationListItem from './NavigationListItem.hook';

interface NavigationListItemProps {
	orderItem: OrderType;
	index: number;
	moveItem: (dragIndex: number, hoverIndex: number) => void;
}

export default function NavigationListItem({
	orderItem,
	index,
	moveItem,
}: NavigationListItemProps) {
	const {
		dnd: { ref, handlerId, opacity, drag, drop },
		isVisible,
	} = useNavigationListItem(orderItem.name, index, moveItem);
	drag(drop(ref));

	return (
		<NavListItem ref={ref} data-handler-id={handlerId} $opacity={opacity}>
			<span>{orderItem.label}</span>
			<Toggle
				checked={isVisible.value}
				onChange={e => isVisible.update(e.target.checked)}
			/>
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
