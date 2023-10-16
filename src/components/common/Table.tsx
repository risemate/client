import React from 'react';
import styled from 'styled-components';
import { Column } from 'types/Column';

interface TableProps<T> {
	columns: Column<T>[];
	data: T[];
	totals?: { key: string; value: string }[];
}

export default function Table<T>({ columns, data, totals }: TableProps<T>) {
	return (
		<>
			<StyledTotal>
				{totals?.map((total, index) => {
					return (
						<p key={index}>
							{total.key}
							<span>{total.value}</span>
						</p>
					);
				})}
			</StyledTotal>
			<StyledTable>
				<thead>
					<tr>
						{columns.map((column, index) => (
							<th key={index}>{column.title}</th>
						))}
					</tr>
				</thead>
				<tbody>
					{data.map((row, rowIndex) => (
						<tr key={rowIndex}>
							{columns.map((column, colIndex) => {
								const value = column.render
									? column.render(column, row as T)
									: (row[column.key as keyof typeof row] as string);
								return <td key={colIndex}>{value === '' ? '-' : value}</td>;
							})}
						</tr>
					))}
				</tbody>
			</StyledTable>
		</>
	);
}

const StyledTotal = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 20px 0;
	color: ${({ theme }) => theme.colors.navy};
	p span {
		padding-left: 15px;
		color: ${({ theme }) => theme.colors.blue};
	}
`;

const StyledTable = styled.table`
	width: 100%;
	border-collapse: collapse;
	background: white;
	color: ${({ theme }) => theme.colors.darkGrey};
	font-size: ${({ theme }) => theme.fontSizes.small};
	thead {
		background: ${({ theme }) => theme.colors.lightGrey};
		font-weight: bold;
		tr th {
			padding: 15px 0;
		}
	}
	tbody > tr {
		border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
		text-align: center;
		td {
			padding: 15px 0;
		}
		td:nth-child(2) {
			text-align: start;
		}
	}
`;
