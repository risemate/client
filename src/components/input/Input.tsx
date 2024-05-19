import { isEmpty } from '@utils/helpers';
import React, { ForwardedRef, InputHTMLAttributes, forwardRef } from 'react';
import styled, { css } from 'styled-components';

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
		<InputLabel $warning={!isEmpty(warning)} $readOnly={InputProps?.readOnly}>
			{label && <span>{label}</span>}
			<input ref={ref} {...InputProps} />
			{warning && <span className='warning'>{warning}</span>}
			{explanation && <span>{explanation}</span>}
		</InputLabel>
	);
});

interface StyledInputProps {
	$warning?: boolean;
	$readOnly?: boolean;
}

const readOnlyStyle = css`
	input {
		border-radius: 0px;
		border: none;
		border-bottom: 0.5px solid ${({ theme }) => theme.colors.grey};
	}
`;

const InputLabel = styled.label<StyledInputProps>`
	font-size: ${({ theme }) => theme.fontSizes.small};
	color: ${({ theme }) => theme.colors.darkGrey};
	display: flex;
	flex-direction: column;
	gap: 10px;
	input {
		border-radius: 10px;
		border: 0.5px solid ${({ $warning, theme }) => ($warning ? 'red' : theme.colors.grey)};
		padding: 10px;
	}
	.warning {
		color: red;
		padding-left: 10px;
	}
	span:last-child {
		word-break: break-all;
	}
	${({ $readOnly }) => $readOnly && readOnlyStyle}
`;

export default Input;
