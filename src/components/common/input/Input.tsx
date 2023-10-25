import { IconQuestion } from '@icons';
import React, { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	label: string;
	width?: string;
	warning?: string;
	explanation?: string;
	help?: boolean;
}

export default function Input({
	label,
	warning,
	explanation,
	help,
	...InputProps
}: InputProps) {
	return (
		<StyledLabel>
			<div>
				<span>{label}</span>
				{help && (
					<p className='help'>
						<IconQuestion />
						<span>{explanation}</span>
					</p>
				)}
			</div>
			<input {...InputProps} />
			{warning && <span className='warning'>{warning}</span>}
		</StyledLabel>
	);
}

const StyledLabel = styled.label`
	font-size: ${({ theme }) => theme.fontSizes.small};
	color: ${({ theme }) => theme.colors.darkGrey};
	display: flex;
	flex-direction: column;
	gap: 10px;
	input {
		border-radius: 10px;
		border: 0.5px solid ${({ theme }) => theme.colors.grey};
		padding: 10px;
	}
	.warning {
		color: red;
		padding-left: 10px;
	}
	& > div {
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
	}
	span:last-child {
		word-break: break-all;
	}
`;
