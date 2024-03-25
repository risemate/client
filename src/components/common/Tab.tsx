import styled from 'styled-components';
import { TabItem } from 'types/common/tab';

type Variant = 'lightGrey' | 'darkGrey';

interface TabProps<T> {
	items: TabItem<T>[];
	center?: boolean;
	underline?: boolean;
	variant?: Variant;
	changeTab: (item: TabItem<T>) => void;
	isCurrentTab: (item: TabItem<T>) => boolean;
}

export default function Tab<T = string | number | undefined>({
	items,
	center,
	underline,
	variant = 'darkGrey',
	changeTab,
	isCurrentTab,
}: TabProps<T>) {
	return (
		<TabList $center={center} $underline={underline}>
			{items.map(item => (
				<li key={item.label}>
					<TabItemButton
						$variant={variant}
						className={isCurrentTab(item) ? 'active' : undefined}
						onClick={() => changeTab(item)}
					>
						{item.label}
					</TabItemButton>
				</li>
			))}
		</TabList>
	);
}

const TabList = styled.ul<{ $underline?: boolean; $center?: boolean }>`
	${({ $underline, theme }) =>
		$underline && `border-bottom: 2px solid ${theme.colors.darkGrey}`};
	display: flex;
	justify-content: ${({ $center }) => ($center ? 'center' : 'flex-start')};
`;

interface TabButtonProps {
	$variant?: Variant;
}

const TabItemButton = styled.button<TabButtonProps>`
	font-weight: bold;
	color: ${({ theme, $variant }) => {
		if ($variant === 'lightGrey') return theme.colors.lightGrey;
		return theme.colors.darkGrey;
	}};
	padding: 5px 20px;
	margin-bottom: -2px;
	&.active,
	&:hover {
		color: ${({ theme }) => theme.colors.navy};
		border-bottom: 2px solid ${({ theme }) => theme.colors.navy};
	}
`;
