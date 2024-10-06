import { ForwardedRef, InputHTMLAttributes, ReactNode, forwardRef } from 'react';
import styled from 'styled-components';

interface CheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {
	variant?: 'navy' | 'darkGrey' | 'darkerGrey';
	children?: ReactNode;
}

const CheckBox = forwardRef(function CheckBox(
	{ children, variant = 'navy', ...InputProps }: CheckBoxProps,
	ref: ForwardedRef<HTMLInputElement>,
) {
	return (
		<StyledCheckBox $variant={variant}>
			<div>{children}</div>
			<input ref={ref} type='checkbox' {...InputProps} />
			<span />
		</StyledCheckBox>
	);
});

const StyledCheckBox = styled.label<{ $variant: 'navy' | 'darkGrey' | 'darkerGrey' }>`
	cursor: pointer;
	position: relative;
	font-weight: 400;
	padding-left: 20px;
	color: ${({ $variant, theme }) => theme.colors[$variant]};
	line-height: 25px;
	display: flex;
	input[type='checkbox'] {
		position: absolute;
		opacity: 0;
		height: 0;
		width: 0;
	}
	span {
		position: absolute;
		top: 8px;
		left: 0;
		height: 10px;
		width: 10px;
		border-radius: 50%;
		border: 1px solid ${({ $variant, theme }) => theme.colors[$variant]};
		background-color: white;
		&:after {
			content: '';
			position: absolute;
			display: none;
			transform: translate(1px, 1px);
			width: 6px;
			height: 6px;
			border-radius: 50%;
			background: ${({ $variant, theme }) => theme.colors[$variant]};
		}
	}
	input[type='checkbox']:checked ~ span {
		&:after {
			display: block;
		}
	}
`;

export default CheckBox;
