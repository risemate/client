import styled from 'styled-components';

export const Table = styled.table`
	width: 100%;
	border-collapse: collapse;
`;

export const TableHeader = styled.thead`
	background-color: #f0f0f0;
	border-top: solid 2px #ccc;
	border-bottom: solid 1px #ccc;
`;

export const TableHeaderCell = styled.th`
	padding: 10px;
	border-right: 1px solid #ccc;
	border-left: 1px solid #ccc;
`;

export const TableRow = styled.tr`
	border-bottom: 1px solid #ccc;
`;

export const TableCell = styled.td`
	padding: 10px;
	border-right: 1px solid #ccc;
	border-left: 1px solid #ccc;
`;

export const Wrap = styled.div`
	h1 {
		font-size: 20px;
		font-weight: 600;
		margin-bottom: 20px;
	}
`;
