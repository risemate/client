import { IconQuestion } from '@icons';
import React, { ForwardedRef, TextareaHTMLAttributes, forwardRef } from 'react';
import styled from 'styled-components';

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	label?: string;
	warning?: string;
	help?: boolean;
}

const TextArea = forwardRef(function TextArea(
	{ label, warning, help, ...TextAreaProps }: TextAreaProps,
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
							<span>
								해당 목록을 리스트 형태로 정리하려면 아래와 같이 &#34;-&#34; 기호를
								사용하여 불릿 포인트 목록을 만들 수 있습니다.
							</span>
						</p>
					)}
				</HelperWrapper>
			)}
			<textarea rows={6} ref={ref} {...TextAreaProps}></textarea>
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
	textarea {
		border-radius: 10px;
		border: 0.5px solid ${({ theme }) => theme.colors.grey};
		padding: 15px;
	}
	.warning {
		color: red;
		padding-left: 10px;
	}
	span:last-child {
		word-break: break-all;
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
			width: 310px;
			position: absolute;
			background: ${({ theme }) => theme.colors.darkGrey};
			color: white;
			padding: 10px;
			border-radius: 10px;
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
