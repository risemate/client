import { useModal } from '@hooks/atoms/useModalAtom';
import styled from 'styled-components';

import Button from '../Button';
import ModalBase from './ModalBase';

interface ModalProps {
	title: string;
	content: string;
	confirm?: string;
	onClick?: () => void;
}

export default function Modal({ title, content, confirm, onClick }: ModalProps) {
	const { openModal, closeModal } = useModal();
	return (
		<ModalBase>
			<StyledDiv>
				<h1>{title}</h1>
				<p>{content}</p>
				<div>
					<Button variant='border' size='full' onClick={() => openModal()}>
						취소
					</Button>
					<Button
						variant='navy'
						size='full'
						onClick={() => {
							{
								onClick && onClick();
							}
							closeModal();
						}}
					>
						{confirm ? confirm : '확인'}
					</Button>
				</div>
			</StyledDiv>
		</ModalBase>
	);
}

const StyledDiv = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
	h1 {
		font-weight: bold;
		color: ${({ theme }) => theme.colors.navy};
	}
	p {
		color: ${({ theme }) => theme.colors.darkGrey};
	}
	div {
		display: flex;
		gap: 30px;
	}
`;
