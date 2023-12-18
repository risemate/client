import { useModal } from '@hooks/atoms/useModalAtom';
import { IconCloseSharp } from '@icons';
import { MouseEvent, ReactNode, useRef } from 'react';
import styled from 'styled-components';

import ModalPortal from './ModalPortal';

interface ModalBaseProps {
	children: ReactNode;
}

export default function ModalBase({ children }: ModalBaseProps) {
	const { closeModal } = useModal();
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
					<button className='btn-close' onClick={() => closeModal()}>
						<IconCloseSharp />
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
	z-index: 9999;
	${({ theme }) => theme.common.flexCenter}
	article {
		position: relative;
		width: 450px;
		padding: 30px;
		border-radius: 30px;
		background: white;
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
