import React, { MouseEvent, ReactNode, useRef } from 'react';
import styled from 'styled-components';

import iconClose from '@assets/images/icon-close.svg';

interface ModalBaseProps {
	closeModal: () => void;
	children: ReactNode;
}

export default function ModalBase({ closeModal, children }: ModalBaseProps) {
	const modalRef = useRef<HTMLDivElement | null>(null);
	const modalOutSideClick = (event: MouseEvent<HTMLDivElement>) => {
		if (modalRef.current === event.target) {
			closeModal();
		}
	};
	return (
		<StyledModalBase ref={modalRef} onClick={event => modalOutSideClick(event)}>
			<article>
				{children}
				<button className='btn-close' onClick={closeModal}>
					<img src={iconClose} alt='모달 닫기 버튼' />
				</button>
			</article>
		</StyledModalBase>
	);
}

const StyledModalBase = styled.div`
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.3);
	${({ theme }) => theme.common.flexCenter}
	article {
		position: relative;
		width: 450px;
		padding: 30px;
		border-radius: 30px;
		background: ${({ theme }) => theme.colors.white};
		box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
	}
	.btn-close {
		position: absolute;
		top: 30px;
		right: 30px;
	}
`;
