import React, { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	label: string;
	warning?: string;
}

export default function Input({ label, warning, ...InputProps }: InputProps) {
	return (
		<StyledLabel>
			{label}
			<input {...InputProps} />
			{warning && <span className='warning'>{warning}</span>}
		</StyledLabel>
	);
}

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
`;
