import styled from 'styled-components';

interface TabProps {
	items: string[];
	center?: boolean;
	underline?: boolean;
	changeTab: (item: string) => void;
	isCurrentTab: (item: string) => boolean;
}

export default function Tab({
	items,
	center,
	underline,
	changeTab,
	isCurrentTab,
}: TabProps) {
	return (
		<TabList $center={center} $underline={underline}>
			{items.map(item => {
				return (
					<li key={item}>
						<TabItemButton
							className={isCurrentTab(item) ? 'active' : undefined}
							onClick={() => changeTab(item)}
						>
							{item}
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

const TabItemButton = styled.button`
	font-weight: bold;
	color: ${({ theme }) => theme.colors.darkGrey};
	padding: 5px 20px;
	margin-bottom: -2px;
	&.active,
	&:hover {
		color: ${({ theme }) => theme.colors.navy};
		border-bottom: 2px solid ${({ theme }) => theme.colors.navy};
	}
`;
