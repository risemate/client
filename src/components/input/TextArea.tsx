import React, { ForwardedRef, TextareaHTMLAttributes, forwardRef } from 'react';
import styled from 'styled-components';

import HelperText from '@common/HelperText';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	label?: string;
	warning?: string;
	help?: boolean;
	height?: number;
}

const TextArea = forwardRef(function TextArea(
	{ label, warning, help, height = 150, ...TextAreaProps }: TextAreaProps,
	ref: ForwardedRef<HTMLTextAreaElement>,
) {
	return (
		<TextAreaLabel>
			<TitleWrapper>
				{label && <span>{label}</span>}
				{help && <HelperText text='해당 목록은 마크다운으로 작성할 수 있습니다.' />}
			</TitleWrapper>
			<StyledTextArea rows={6} ref={ref} $height={height} {...TextAreaProps} />
			{warning && <span className='warning'>{warning}</span>}
		</TextAreaLabel>
	);
});

const TextAreaLabel = styled.label`
	font-size: ${({ theme }) => theme.fontSizes.small};
	color: ${({ theme }) => theme.colors.darkGrey};
	display: flex;
	flex-direction: column;
	gap: 10px;
	.warning {
		color: red;
		padding-left: 10px;
	}
	span:last-child {
		word-break: break-all;
	}
`;

const StyledTextArea = styled.textarea<{ $height: number }>`
	border-radius: 10px;
	border: 0.5px solid ${({ theme }) => theme.colors.grey};
	padding: 15px;
	min-height: 35px;
	max-height: 500px;
	height: ${({ $height }) => `${$height}px`};
	line-height: 20px;
	resize: vertical;
	&::-webkit-scrollbar {
		background-color: white;
	}
	&::-webkit-scrollbar-thumb {
		background-color: ${({ theme }) => theme.colors.grey};
		border-radius: 10px;
		border: 4px solid white;
	}
`;

const TitleWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 5px;
`;

export default TextArea;
