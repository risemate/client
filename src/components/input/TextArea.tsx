import { IconQuestion } from '@icons';
import React, { ForwardedRef, TextareaHTMLAttributes, forwardRef } from 'react';
import styled from 'styled-components';

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
			{label && help && (
				<HelperWrapper>
					{label && <span>{label}</span>}
					{help && (
						<p className='help'>
							<IconQuestion />
							<span>해당 목록은 마크다운으로 작성할 수 있습니다.</span>
						</p>
					)}
				</HelperWrapper>
			)}
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

const HelperWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 5px;
	p {
		position: relative;
		span {
			display: none;
			width: 240px;
			background: ${({ theme }) => theme.colors.darkGrey};
			color: white;
			padding: 10px;
			border-radius: 10px;
			position: absolute;
			line-height: 20px;
			top: -40px;
			left: 20px;
		}
	}
	p:hover span {
		display: inline-block;
	}
`;

export default TextArea;
