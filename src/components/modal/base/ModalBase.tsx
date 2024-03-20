import { useModal } from '@hooks/atoms/useModalAtom';
import { IconCloseSharp } from '@icons';
import { MouseEvent, ReactNode, useRef } from 'react';
import styled from 'styled-components';

import ModalPortal from './ModalPortal';

interface ModalBaseProps {
	children: ReactNode;
	queryKey: string;
}

export default function ModalBase({ children, queryKey }: ModalBaseProps) {
	const { isModal, closeModal } = useModal(queryKey);
	const modalRef = useRef<HTMLDivElement | null>(null);
	const modalOutSideClick = (event: MouseEvent<HTMLDivElement>) => {
		if (modalRef.current === event.target) {
			closeModal();
		}
	};

	// const setParam = (key: string, value: string) => {
	// 	const params = new URLSearchParams(window.location.search);
	// 	params.set(key, value);
	// 	const newUrl = `${window.location.pathname}?${params.toString()}`;
	// 	window.location.replace(newUrl);
	// };

	// const delParam = (key: string) => {
	// 	const params = new URLSearchParams(window.location.search);
	// 	params.delete(key);
	// 	const newUrl = `${window.location.pathname}?${params.toString()}`;
	// 	window.history.replaceState({}, '', newUrl);
	// };

	// const getParam = (key: string) => {
	// 	const params = new URLSearchParams(window.location.search);
	// 	return params.get(key);
	// };

	// const overView = getParam('overView');

	// useEffect(() => {
	// 	if (isModal) {
	// 		setParam('overView', 'ok');
	// 		return;
	// 	}
	// 	if (isModal && !overView) {
	// 		// delParam('overView');
	// 		closeModal();
	// 	}
	// }, [isModal, overView]);
	return (
		<ModalPortal>
			{isModal && (
				<ModalBaseWrapper ref={modalRef} onClick={event => modalOutSideClick(event)}>
					<article>
						{children}
						<CloseButton className='btn-close' onClick={closeModal}>
							<IconCloseSharp />
						</CloseButton>
					</article>
				</ModalBaseWrapper>
			)}
		</ModalPortal>
	);
}

const ModalBaseWrapper = styled.div`
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
`;

const CloseButton = styled.button`
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
`;
