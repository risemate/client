import { isEmpty } from '@utils/helpers';
import React from 'react';
import DatePicker from 'react-datepicker';
import { useFormContext } from 'react-hook-form';
import styled from 'styled-components';

import 'react-datepicker/dist/react-datepicker.css';

interface MonthInputProps {
	label: string;
}

export default function MonthInput({ label }: MonthInputProps) {
	const { watch, setValue } = useFormContext();
	const stringToDate = (dateString: string) => {
		if (isEmpty(dateString)) {
			return new Date();
		}
		return new Date(dateString + '-01');
	};
	const dateToString = (date: Date) => {
		const year = date.getFullYear();
		const month = (date.getMonth() + 1).toString().padStart(2, '0');
		return `${year}-${month}`;
	};
	return (
		<MonthInputWrapper>
			<span>{label}</span>
			<div>
				<DatePicker
					selected={stringToDate(watch('startedAt'))}
					onChange={(date: Date) => setValue('startedAt', dateToString(date))}
					dateFormat={'yyyy-MM'}
					showMonthYearPicker
					showIcon
				/>
				<DatePicker
					selected={stringToDate(watch('endedAt'))}
					onChange={(date: Date) => setValue('endedAt', dateToString(date))}
					dateFormat={'yyyy-MM'}
					showMonthYearPicker
					showIcon
				/>
			</div>
		</MonthInputWrapper>
	);
}

const MonthInputWrapper = styled.div`
	font-size: ${({ theme }) => theme.fontSizes.small};
	color: ${({ theme }) => theme.colors.darkGrey};
	& > div {
		background: white;
		border-radius: 10px;
		border: 0.5px solid ${({ theme }) => theme.colors.grey};
		padding: 6px;
		margin-top: 10px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		svg {
			width: 12px;
			height: 12px;
		}
	}
`;
