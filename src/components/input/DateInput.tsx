import { isEmpty } from '@utils/helpers';
import React from 'react';
import DatePicker from 'react-datepicker';
import { useFormContext } from 'react-hook-form';
import styled from 'styled-components';

import 'react-datepicker/dist/react-datepicker.css';

interface DateInputProps {
	label: string;
	inputName: string;
	mode: 'year' | 'month' | 'date';
}

export default function DateInput({ label, inputName, mode }: DateInputProps) {
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
	const dateFormat = () => {
		if (mode === 'year') return 'yyyy';
		else if (mode === 'month') return 'yyyy-MM';
		else return 'yyyy-MM-dd';
	};
	return (
		<DateInputWrapper>
			<span>{label}</span>
			<div>
				<DatePicker
					selected={stringToDate(watch(inputName))}
					onChange={(date: Date) => setValue(inputName, dateToString(date))}
					dateFormat={dateFormat()}
					showMonthYearPicker={mode === 'month'}
					showYearPicker={mode === 'year'}
					showIcon
				/>
			</div>
		</DateInputWrapper>
	);
}

const DateInputWrapper = styled.div`
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
