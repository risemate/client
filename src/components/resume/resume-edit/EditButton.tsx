import { IconArrowDown, IconArrowUp, IconTrash } from '@icons';
import React from 'react';
import styled from 'styled-components';

interface EditButtonProps {
	index: number;
	changeIndex: (index: number, increase: boolean) => void;
	deleteData: (index: number) => void;
}

export default function EditButton({ index, changeIndex, deleteData }: EditButtonProps) {
	return (
		<StyledButton>
			<button type='button' onClick={() => changeIndex(index, false)}>
				<IconArrowDown />
			</button>
			<button type='button' onClick={() => deleteData(index)}>
				<IconTrash />
			</button>
			<button type='button' onClick={() => changeIndex(index, true)}>
				<IconArrowUp />
			</button>
		</StyledButton>
	);
}

const StyledButton = styled.div`
	border: 0.5px solid ${({ theme }) => theme.colors.grey};
	border-radius: 5px;
	position: absolute;
	top: 0;
	right: 0;
	overflow: hidden;
	& > button {
		width: 30px;
		height: 30px;
		background: white;
		padding: 6px 5px;
		&:hover {
			filter: brightness(0.95);
		}
		svg {
			color: ${({ theme }) => theme.colors.grey};
		}
		&:not(:last-child) {
			border-right: 0.5px solid ${({ theme }) => theme.colors.grey};
		}
	}
`;
