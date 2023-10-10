import { useModal } from 'atoms/useModalAtom';
import styled from 'styled-components';

import Button from '../Button';
import ModalBase from './ModalBase';

interface ModalProps {
	closeModal: () => void;
	title: string;
	content: string;
	onClick: () => void;
}

export default function Modal({ closeModal, title, content, onClick }: ModalProps) {
	const { openModal } = useModal();
	return (
		<ModalBase>
			<StyledDiv>
				<h1>{title}</h1>
				<p>{content}</p>
				<div>
					<Button variant='border' onClick={() => openModal()}>
						취소
					</Button>
					<Button
						variant='navy'
						onClick={() => {
							onClick();
							closeModal();
						}}
					>
						헬로
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
