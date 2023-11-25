import React, { InputHTMLAttributes } from 'react';
import { useFormContext } from 'react-hook-form';
import styled from 'styled-components';

interface DateInputProps extends InputHTMLAttributes<HTMLInputElement> {
	label: string;
	inputName: string;
}

export default function DateInput({ label, inputName, ...InputProps }: DateInputProps) {
	const { register } = useFormContext();
	return (
		<StyledDate>
			<span>{label}</span>
			<div>
				<label>
					<input {...register(`${inputName}StartedAt` as const)} {...InputProps} />
				</label>
				<span>~</span>
				<label>
					<input {...register(`${inputName}EndedAt` as const)} {...InputProps} />
				</label>
			</div>
		</StyledDate>
	);
}

const StyledDate = styled.div`
	font-size: ${({ theme }) => theme.fontSizes.small};
	color: ${({ theme }) => theme.colors.darkGrey};
	& > div {
		background: white;
		border-radius: 10px;
		border: 0.5px solid ${({ theme }) => theme.colors.grey};
		padding: 10px;
		margin-top: 10px;
		display: flex;
		justify-content: space-between;
	}
`;
