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
		<InputLabel>
			{label && <span>{label}</span>}
			<input ref={ref} {...InputProps} />
			{warning && <span className='warning'>{warning}</span>}
			{explanation && <span>{explanation}</span>}
		</InputLabel>
	);
});

const InputLabel = styled.label`
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
	span:last-child {
		word-break: break-all;
	}
`;

export default Input;
