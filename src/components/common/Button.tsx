import { ButtonHTMLAttributes, ReactNode } from 'react';
import styled, { css } from 'styled-components';
import { Variant, Size } from 'types/Button';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant: Variant;
	size?: Size;
	children: ReactNode;
}

export default function Button({ variant, size, children, ...ButtonProps }: ButtonProps) {
	return (
		<StyledButton $variant={variant} $size={size} {...ButtonProps}>
			{children}
		</StyledButton>
	);
}

interface StyledButtonProps {
	$variant?: Variant;
	$size?: Size;
}

const variantStyle = css<StyledButtonProps>`
	${({ $variant, theme: { colors } }) => {
		switch ($variant) {
			case 'navy':
				return css`
					background-color: ${colors.navy};
				`;
			case 'mint':
				return css`
					background-color: ${colors.mint};
				`;
			case 'blue':
				return css`
					background-color: ${colors.blue};
				`;
			case 'lightGrey':
				return css`
					background-color: ${colors.lightgrey};
				`;
			case 'white':
				return css`
					background-color: white;
					color: ${colors.navy};
				`;
			case 'border':
				return css`
					background-color: white;
					color: ${colors.navy};
					box-shadow: 0 0 0 2px ${colors.navy} inset;
				`;
		}
	}}
`;

const sizeStyle = css<StyledButtonProps>`
	${({ $size, theme }) => {
		switch ($size) {
			case 'small':
				return css`
					width: 100px;
					font-size: ${theme.fontSizes.small};
					padding: 8px;
				`;
			case 'medium':
				return css`
					width: 150px;
				`;
			case 'large':
				return css`
					width: 200px;
				`;
			case 'full':
				return css`
					width: 100%;
					padding: 10px;
				`;
		}
	}}
`;

const StyledButton = styled.button<StyledButtonProps>`
	${({ theme }) => css`
		padding: 10px 20px;
		user-select: none;
		border-radius: 50px;
		color: white;
		transition: all 0.3s ease-out;
		&:disabled {
			box-shadow: none;
			color: white;
			background-color: ${theme.colors.grey};
			cursor: initial;
		}
	`}
	&:not(:disabled):hover {
		filter: brightness(0.9);
	}
	${variantStyle}
	${sizeStyle}
`;
