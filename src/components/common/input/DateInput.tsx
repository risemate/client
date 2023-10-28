import React, { ChangeEvent, InputHTMLAttributes } from 'react';
import styled from 'styled-components';

interface DateInputProps<T> extends InputHTMLAttributes<HTMLInputElement> {
	label: string;
	index: number;
	startDate: string;
	endDate: string;
	keyword: string;
	updateDateInput: (index: number, field: keyof T, value: string) => void;
}

export default function DateInput<T>({
	label,
	index,
	startDate,
	endDate,
	keyword,
	updateDateInput,
	...InputProps
}: DateInputProps<T>) {
	const updateStartDate = (event: ChangeEvent<HTMLInputElement>) => {
		updateDateInput(index, (keyword + 'StartedAt') as keyof T, event.target.value);
	};
	const updateEndDate = (event: ChangeEvent<HTMLInputElement>) => {
		updateDateInput(index, (keyword + 'EndedAt') as keyof T, event.target.value);
	};
	return (
		<StyledDate>
			<span>{label}</span>
			<div>
				<label>
					<input
						value={startDate}
						onChange={event => updateStartDate(event)}
						{...InputProps}
					/>
				</label>
				<span>~</span>
				<label>
					<input
						value={endDate}
						onChange={event => updateEndDate(event)}
						{...InputProps}
					/>
				</label>
			</div>
		</StyledDate>
	);
}

const StyledDate = styled.div`
	font-size: ${({ theme }) => theme.fontSizes.small};
	color: ${({ theme }) => theme.colors.darkGrey};
	& > div {
		border-radius: 10px;
		border: 0.5px solid ${({ theme }) => theme.colors.grey};
		padding: 10px;
		margin-top: 10px;
		display: flex;
		justify-content: space-between;
	}
`;
