import React, { ForwardedRef, InputHTMLAttributes, forwardRef } from 'react';
import styled from 'styled-components';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	label?: string;
	warning?: string;
	explanation?: string;
}

const Input = forwardRef(function Input(
	{ label, warning, explanation, ...InputProps }: InputProps,
	ref: ForwardedRef<HTMLInputElement>,
) {
	return (
		<StyledLabel>
			{label && <span>{label}</span>}
			<input ref={ref} {...InputProps} />
			{warning && <span className='warning'>{warning}</span>}
			{explanation && <span>{explanation}</span>}
		</StyledLabel>
	);
});

const StyledLabel = styled.label`
	font-size: ${({ theme }) => theme.fontSizes.small};
	color: ${({ theme }) => theme.colors.darkGrey};
	display: flex;
	flex-direction: column;
	gap: 10px;
	input {
		border-radius: 10px;
		border: 0.5px solid ${({ theme }) => theme.colors.grey};
		padding: 10px;
	}
	.warning {
		color: red;
		padding-left: 10px;
	}
	& > div {
		display: flex;
		align-items: center;
		gap: 5px;
		p {
			position: relative;
			span {
				display: none;
				width: 310px;
				position: absolute;
				background: ${({ theme }) => theme.colors.darkGrey};
				color: white;
				padding: 10px;
				border-radius: 10px;
				line-height: 20px;
				top: -40px;
				left: 20px;
			}
		}
		p:hover span {
			display: inline-block;
		}
	}
	span:last-child {
		word-break: break-all;
	}
`;

export default Input;
