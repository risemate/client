import { IconArrowDown, IconArrowUp, IconTrash } from '@icons';
import React from 'react';
import { UseFieldArraySwap } from 'react-hook-form';
import styled from 'styled-components';

interface EditButtonProps {
	index: number;
	deleteData: (index: number) => void;
	swap: UseFieldArraySwap;
	length: number;
}

export default function EditButton({ index, deleteData, swap, length }: EditButtonProps) {
	const swapItems = (index: number, isUp: boolean) => {
		if (swap && length) {
			if (isUp) {
				if (index <= 0) return;
				swap(index, index - 1);
			} else {
				if (index >= length - 1) return;
				swap(index, index + 1);
			}
		}
	};

	return (
		<StyledButton>
			<button type='button' onClick={() => swapItems(index, false)}>
				<IconArrowDown />
			</button>
			<button type='button' onClick={() => deleteData(index)}>
				<IconTrash />
			</button>
			<button type='button' onClick={() => swapItems(index, true)}>
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
