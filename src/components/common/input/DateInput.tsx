import React, { ChangeEvent, InputHTMLAttributes } from 'react';
import styled from 'styled-components';
import { WorkExperience as WorkExperienceType } from 'types/Resume';

interface DateInputProps extends InputHTMLAttributes<HTMLInputElement> {
	label: string;
	index: number;
	startDate: string;
	endDate: string;
	updateDateInput: (
		index: number,
		field: keyof WorkExperienceType,
		value: string,
	) => void;
}

export default function DateInput({
	label,
	index,
	startDate,
	endDate,
	updateDateInput,
	...InputProps
}: DateInputProps) {
	const updateStartDate = (event: ChangeEvent<HTMLInputElement>) => {
		updateDateInput(index, 'workStartedAt', event.target.value);
	};
	const updateEndDate = (event: ChangeEvent<HTMLInputElement>) => {
		updateDateInput(index, 'workEndedAt', event.target.value);
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
