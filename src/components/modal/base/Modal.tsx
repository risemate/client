import { useModal } from '@hooks/atoms/useModalAtom';
import { ReactNode } from 'react';
import styled, { CSSProp } from 'styled-components';

import Button from '@common/Button';

import ModalBase from './ModalBase';

interface ModalProps {
	title: string;
	children: ReactNode | string;
	confirm?: string;
	cancel?: string;
	onClick?: () => void;
	onCancel?: () => void;
	disabledConfirmButton?: boolean;
	buttonFormId?: string;
	queryKey: string;
	customCss?: CSSProp;
}

export default function Modal({
	title,
	children,
	confirm = '확인',
	cancel = '취소',
	onClick,
	onCancel,
	disabledConfirmButton = false,
	buttonFormId,
	queryKey,
	customCss,
}: ModalProps) {
	const { closeModal } = useModal(queryKey);
	return (
		<ModalBase queryKey={queryKey}>
			<ModalWrapper $customCss={customCss}>
				<h1>{title}</h1>
				{typeof children?.valueOf() === 'string' ? (
					<p>{children}</p>
				) : (
					<div>{children}</div>
				)}
				<div>
					<Button
						variant='border'
						size='full'
						onClick={() => {
							onCancel && onCancel();
							closeModal();
						}}
					>
						{cancel}
					</Button>
					<Button
						variant='navy'
						size='full'
						form={buttonFormId}
						disabled={disabledConfirmButton}
						onClick={
							buttonFormId
								? undefined
								: () => {
										onClick && onClick();
										closeModal();
								  }
						}
					>
						{confirm}
					</Button>
				</div>
			</ModalWrapper>
		</ModalBase>
	);
}

const ModalWrapper = styled.div<{ $customCss: CSSProp }>`
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
	div:nth-child(3) {
		display: flex;
		gap: 30px;
	}
	${({ $customCss }) => $customCss && $customCss}
`;
