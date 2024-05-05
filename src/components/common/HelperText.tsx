import { IconQuestion } from '@icons';
import React, { useState } from 'react';
import styled from 'styled-components';

interface HelperTextProps {
	text: string;
}

export default function HelperText({ text }: HelperTextProps) {
	const [hover, setHover] = useState<boolean>(false);
	const hoverMouse = () => setHover(true);
	const leaveMouse = () => setHover(false);
	return (
		<HelperWrapper onMouseEnter={hoverMouse} onMouseLeave={leaveMouse}>
			<IconQuestion />
			{hover && <p>{text}</p>}
		</HelperWrapper>
	);
}

const HelperWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 5px;
	position: relative;
	font-size: ${({ theme }) => theme.fontSizes.small};
	color: ${({ theme }) => theme.colors.darkGrey};
	p {
		position: absolute;
		width: 250px;
		background: ${({ theme }) => theme.colors.darkGrey};
		color: white;
		padding: 10px;
		border-radius: 10px;
		line-height: 20px;
		left: 20px;
		word-break: keep-all;
	}
`;
