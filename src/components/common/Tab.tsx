import styled from 'styled-components';

interface TabProps {
  menus: string[];
  center?: boolean;
  underline?: boolean;
  changeTab: (menu: string) => void;
  isCurrentTab: (menu: string) => boolean;
}

export default function Tab({ menus, center, underline, changeTab, isCurrentTab }: TabProps) {
  return (
    <StyledTab center={center} underline={underline}>
      {menus.map((menu) => {
        return (
          <li key={menu}>
            <StyledButton
              className={isCurrentTab(menu) ? 'active' : undefined}
              onClick={() => changeTab(menu)}
            >
              {menu}
            </StyledButton>
          </li>
        );
      })}
    </StyledTab>
  );
}

type Props = Partial<TabProps>;

const StyledTab = styled.ul<Props>`
  ${({ underline, theme }) => underline && `border-bottom: 2px solid ${theme.colors.darkGrey}`};
  display: flex;
  justify-content: ${({ center }) => (center ? 'center' : 'flex-start')};
`;

const StyledButton = styled.button`
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
