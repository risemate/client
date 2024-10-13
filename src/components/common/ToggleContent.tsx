import { IconToggleDown, IconToggleUp } from '@icons';
import { ReactNode, useState } from 'react';
import styled from 'styled-components';

interface ToggleContentProps {
	openText?: string;
	closeText?: string;
	children: ReactNode;
}

export default function ToggleContent({
	openText,
	closeText,
	children,
}: ToggleContentProps) {
	const [isToggled, setIsToggled] = useState(false);

	const handleToggle = () => {
		setIsToggled(!isToggled);
	};
	return (
		<div>
			<ButtonWrapper>
				{openText && closeText && <span>{isToggled ? closeText : openText}</span>}
				<button type='button' onClick={handleToggle}>
					{isToggled ? <IconToggleUp /> : <IconToggleDown />}
				</button>
			</ButtonWrapper>
			<div>{isToggled && children}</div>
		</div>
	);
}

const ButtonWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	color: ${({ theme }) => theme.colors.navy};
	svg {
		color: ${({ theme }) => theme.colors.navy};
		width: 20px;
		height: 20px;
	}
`;
