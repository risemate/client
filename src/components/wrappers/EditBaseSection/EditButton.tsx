import { IconArrowDown, IconArrowUp, IconTrash } from '@icons';
import { MouseEvent } from 'react';
import { UseFieldArraySwap } from 'react-hook-form';
import styled from 'styled-components';

interface EditButtonProps {
	index: number;
	remove: () => void;
	swap: UseFieldArraySwap;
	length: number;
}

export default function EditButton({ index, remove, swap, length }: EditButtonProps) {
	const swapItems = (
		event: MouseEvent<HTMLButtonElement>,
		index: number,
		isUp: boolean,
	) => {
		if (swap && length) {
			if (isUp) {
				if (index <= 0) return;
				swap(index, index - 1);
			} else {
				if (index >= length - 1) return;
				swap(index, index + 1);
			}
		}
		// changeColor.focus(event);
	};

	// const changeColor = {
	// 	focus: (event: MouseEvent<HTMLButtonElement>) => {
	// 		setIsHover(true);
	// 		const focusedItem = (event.target as HTMLElement).closest('div');
	// 		if (focusedItem) {
	// 			focusedItem.style.backgroundColor = '#ededed';
	// 			focusedItem.style.transition = 'background-color 0.3s ease-in-out';
	// 			setTimeout(() => {
	// 				focusedItem.style.backgroundColor = 'white';
	// 				focusedItem.style.transition = 'background-color 0s';
	// 				setIsHover(false);
	// 			}, 2000);
	// 		}
	// 	},
	// 	mouseover: (event: MouseEvent<HTMLButtonElement>) => {
	// 		console.log("mouseover");
	// 		setIsHover(true);
	// 		const focusedItem = (event.target as HTMLElement).closest('div');
	// 		if (focusedItem) {
	// 			focusedItem.style.backgroundColor = '#ededed';
	// 			focusedItem.style.transition = 'background-color 0.3s ease-in-out';
	// 			setTimeout(() => {
	// 				focusedItem.style.backgroundColor = 'white';
	// 				focusedItem.style.transition = 'background-color 0s';
	// 				setIsHover(false);
	// 			}, 500);
	// 		}
	// 	},
	// 	mouseleave: (event: MouseEvent<HTMLButtonElement>) => {
	// 		console.log("mouseleave")
	// 		setIsHover(false);
	// 		const focusedItem = (event.target as HTMLElement).closest('div');
	// 		console.log(isHover);
	// 		if(focusedItem) {
	// 			console.log("hello");
	// 			focusedItem.style.backgroundColor = 'white';
	// 			focusedItem.style.transition = 'background-color 0s';
	// 		}
	// 	}
	// }

	return (
		<>
			<EditButtonWrapper>
				<button type='button' onClick={event => swapItems(event, index, false)}>
					<IconArrowDown />
				</button>
				<button type='button' onClick={remove}>
					<IconTrash />
				</button>
				<button type='button' onClick={event => swapItems(event, index, true)}>
					<IconArrowUp />
				</button>
			</EditButtonWrapper>
			{/* 
				<Modal title='목록 삭제' onClick={() => {deleteItem(index)}}>
					해당 목록을 삭제하시겠습니까? 다시 복구할 수 없습니다.
				</Modal>
			 */}
		</>
	);
}

const EditButtonWrapper = styled.span`
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
