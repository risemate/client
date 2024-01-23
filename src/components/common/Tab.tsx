import styled from 'styled-components';
import { TabItem } from 'types/Tab';

type Variant = 'lightGrey' | 'darkGrey';

interface TabProps {
	items: TabItem[];
	center?: boolean;
	underline?: boolean;
	variant?: Variant;
	changeTab: (item: TabItem) => void;
	isCurrentTab: (item: TabItem) => boolean;
}

export default function Tab({
	items,
	center,
	underline,
	variant = 'darkGrey',
	changeTab,
	isCurrentTab,
}: TabProps) {
	return (
		<TabList $center={center} $underline={underline}>
			{items.map(item => {
				return (
					<li key={item.value}>
						<TabItemButton
							$variant={variant}
							className={isCurrentTab(item) ? 'active' : undefined}
							onClick={() => changeTab(item)}
						>
							{item.label}
						</TabItemButton>
					</li>
				);
			})}
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
