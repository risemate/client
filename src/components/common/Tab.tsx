import styled from 'styled-components';
import { TabItem } from 'types/common/tab';

type Variant = 'lightGrey' | 'darkGrey';

interface TabProps<T> {
	items: TabItem<T>[];
	changeTab: (item: TabItem<T>) => void;
	isCurrentTab: (item: TabItem<T>) => boolean;
	center?: boolean;
	underline?: boolean;
	variant?: Variant;
	sticky?: boolean;
}

export default function Tab<T = string | number | undefined>({
	items,
	isCurrentTab,
	changeTab,
	center = false,
	underline = false,
	variant = 'darkGrey',
	sticky = false,
}: TabProps<T>) {
	return (
		<TabList $center={center} $underline={underline} $sticky={sticky}>
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

interface TabListProps {
	$underline?: boolean;
	$center?: boolean;
	$sticky?: boolean;
}

const TabList = styled.ul<TabListProps>`
	${({ $underline, theme }) =>
		$underline && `border-bottom: 2px solid ${theme.colors.darkGrey}`};
	display: flex;
	justify-content: ${({ $center }) => ($center ? 'center' : 'flex-start')};
	position: ${({ $sticky }) => ($sticky ? 'sticky' : 'static')};
	top: ${({ $sticky }) => ($sticky ? '0' : 'auto')};
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
