import { IconCloseSharp } from '@icons';
import React from 'react';
import styled from 'styled-components';

export default function SkillButton() {
	return (
		<StyledLi>
			React
			<button type='button'>
				<IconCloseSharp />
			</button>
		</StyledLi>
	);
}

const StyledLi = styled.li`
	li {
		width: fit-content;
		background: ${({ theme }) => theme.colors.grey};
		border-radius: 50px;
		padding: 8px 15px;
		color: white;
		display: flex;
		align-items: center;
		button {
			color: white;
			height: 16px;
			margin-left: 3px;
		}
	}
`;
