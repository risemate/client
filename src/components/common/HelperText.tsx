import { IconQuestion } from '@icons';
import { useState } from 'react';
import styled, { css } from 'styled-components';

interface HelperTextProps {
	text: string;
	position?: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';
}

export default function HelperText({ text, position = 'topRight' }: HelperTextProps) {
	const [hover, setHover] = useState<boolean>(false);
	const hoverMouse = () => setHover(true);
	const leaveMouse = () => setHover(false);
	return (
		<HelperWrapper onMouseEnter={hoverMouse} onMouseLeave={leaveMouse}>
			<IconQuestion />
			{hover && <PopOver $position={position}>{text}</PopOver>}
		</HelperWrapper>
	);
}

interface PopOverProps {
	$position: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';
}

const HelperWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 5px;
	position: relative;
	font-size: ${({ theme }) => theme.fontSizes.small};
	color: ${({ theme }) => theme.colors.darkGrey};
`;

const positionStyle = css<PopOverProps>`
	${({ $position }) => {
		switch ($position) {
			case 'topLeft':
				return css`
					bottom: 20px;
					right: 0;
				`;
			case 'topRight':
				return css`
					bottom: 20px;
					left: 0;
				`;
			case 'bottomLeft':
				return css`
					top: 20px;
					right: 0;
				`;
			case 'bottomRight':
				return css`
					top: 20px;
					left: 0;
				`;
		}
	}}
`;

const PopOver = styled.p<PopOverProps>`
	position: absolute;
	width: 250px;
	background: ${({ theme }) => theme.colors.darkGrey};
	color: white;
	padding: 10px;
	border-radius: 10px;
	line-height: 20px;
	word-break: keep-all;
	${positionStyle}
`;
