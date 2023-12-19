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
			<TotalInfoWrapper>
				{totals?.map((total, index) => {
					return (
						<p key={index}>
							{total.key}
							<span>{total.value}</span>
						</p>
					);
				})}
			</TotalInfoWrapper>
			<StyledTable>
				<colgroup>
					{columns.map((_, index) => {
						const width = index === 0 ? '130' : index === 1 ? '*' : '100';
						return <col key={index} width={width} />;
					})}
				</colgroup>
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

const TotalInfoWrapper = styled.div`
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
	table-layout: fixed;
	thead {
		background: ${({ theme }) => theme.colors.lightGrey};
		font-weight: bold;
		tr th {
			padding: 15px 10px;
			${({ theme }) => theme.common.ellipsisOneLine};
		}
	}
	tbody > tr {
		border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
		text-align: center;
		td {
			padding: 15px 0;
		}
		td:nth-child(2) {
			width: 100;
			text-align: start;
			${({ theme }) => theme.common.ellipsisOneLine};
		}
	}
`;
