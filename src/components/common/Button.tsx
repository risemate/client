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
		<StyledButton variant={variant} size={size} {...ButtonProps}>
			{children}
		</StyledButton>
	);
}

type Props = Partial<ButtonProps>;

const variantStyle = css<Props>`
	${({ variant, theme: { colors } }) => {
		switch (variant) {
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
					background-color: ${colors.white};
					color: ${colors.navy};
				`;
			case 'border':
				return css`
					background-color: ${colors.white};
					color: ${colors.navy};
					box-shadow: 0 0 0 2px ${colors.navy} inset;
				`;
		}
	}}
`;

const sizeStyle = css<Props>`
	${({ size, theme }) => {
		switch (size) {
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
				`;
		}
	}}
`;

const StyledButton = styled.button<Props>`
	${({ theme }) => css`
		padding: 10px 20px;
		user-select: none;
		border-radius: 50px;
		color: ${theme.colors.white};
		transition: all 0.3s ease-out;
		&:disabled {
			box-shadow: none;
			color: ${theme.colors.white};
			background-color: ${theme.colors.grey};
			cursor: initial;
		}
	`}
	&:hover {
		filter: brightness(0.9);
	}
	${variantStyle}
	${sizeStyle}
`;
