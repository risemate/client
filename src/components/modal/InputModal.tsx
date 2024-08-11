import { isEmpty } from '@utils/helpers';
import { ReactNode, TextareaHTMLAttributes } from 'react';
import { css } from 'styled-components';

import TextArea from '@components/input/TextArea';

import Modal from './base/Modal';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	label?: string;
	warning?: string;
	help?: boolean;
	height?: number;
	error?: boolean;
}

interface InputModalProps {
	title: string;
	confirm?: string;
	queryKey: string;
	buttonFormId: string;
	onSubmit: () => void;
	children?: ReactNode;
	textAreaProps: TextAreaProps;
}

export default function InputModal({
	title,
	confirm,
	queryKey,
	buttonFormId,
	onSubmit,
	children,
	textAreaProps,
}: InputModalProps) {
	const { error, ...resetTextAreaProps } = textAreaProps;
	return (
		<Modal
			title={title}
			confirm={confirm}
			queryKey={queryKey}
			buttonFormId={buttonFormId}
			disabledConfirmButton={error || isEmpty(resetTextAreaProps.value) || false}
			customCss={modalStyle}
		>
			<form id={buttonFormId} onSubmit={onSubmit}>
				{children}
				<TextArea {...resetTextAreaProps} />
			</form>
		</Modal>
	);
}

const modalStyle = css`
	textarea {
		margin-bottom: 10px;
	}
`;
