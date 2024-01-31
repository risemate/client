import { useModal } from '@hooks/atoms/useModalAtom';
import { ReactNode } from 'react';
import styled from 'styled-components';

import Button from '../common/Button';
import ModalBase from './ModalBase';

interface ModalProps {
	title: string;
	children: ReactNode;
	confirm?: string;
	onClick?: () => void;
	buttonFormId?: string;
	queryKey: string;
}

export default function Modal({
	title,
	children,
	confirm,
	onClick,
	buttonFormId,
	queryKey,
}: ModalProps) {
	const { closeModal } = useModal(queryKey);

	return (
		<ModalBase queryKey={queryKey}>
			<ModalWrapper>
				<h1>{title}</h1>
				<p>{children}</p>
				<div>
					<Button variant='border' size='full' onClick={closeModal}>
						취소
					</Button>
					<Button
						variant='navy'
						size='full'
						form={buttonFormId}
						onClick={
							buttonFormId
								? undefined
								: () => {
										// onClick가 존재하지 않는 경우에만 전달
										onClick && onClick();
										closeModal();
									}
						}
					>
						{confirm ? confirm : '확인'}
					</Button>
				</div>
			</ModalWrapper>
		</ModalBase>
	);
}

const ModalWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
	h1 {
		font-weight: bold;
		color: ${({ theme }) => theme.colors.navy};
	}
	p {
		color: ${({ theme }) => theme.colors.darkGrey};
		line-height: 25px;
	}
	div {
		display: flex;
		gap: 30px;
	}
`;
