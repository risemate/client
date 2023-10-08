import React, { MouseEvent, ReactNode, useRef } from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import styled from 'styled-components';

import ModalPortal from './ModalPortal';

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
		<ModalPortal>
			<StyledModalBase ref={modalRef} onClick={event => modalOutSideClick(event)}>
				<article>
					{children}
					<button className='btn-close' onClick={closeModal}>
						<IoCloseSharp />
					</button>
				</article>
			</StyledModalBase>
		</ModalPortal>
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
		top: 25px;
		right: 25px;
		width: 25px;
		height: 25px;
		svg {
			width: 100%;
			height: 100%;
			color: ${({ theme }) => theme.colors.navy};
		}
	}
`;
