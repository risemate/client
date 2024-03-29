import { IconCloseSharp } from '@icons';
import { isEmpty } from '@utils/helpers';
import React, { ChangeEvent } from 'react';
import { useFormContext } from 'react-hook-form';
import styled, { css } from 'styled-components';

import DefaultImage, { Size } from '@common/DefaultImage';

interface FileInputProps {
	label?: string;
	inputName: string;
	size?: Size;
}

export default function FileInput({ label, inputName, size }: FileInputProps) {
	const { watch, setValue } = useFormContext();
	const changeImage = (event: ChangeEvent<HTMLInputElement>) => {
		const file = event.target?.files?.[0];
		if (file) {
			const reader = new FileReader();
			reader.onload = event => {
				const result = event.target?.result;
				if (typeof result === 'string') {
					setValue(inputName, result);
				}
			};
			reader.readAsDataURL(file);
		}
	};
	const resetImage = () => {
		setValue(inputName, '');
	};
	return (
		<FileInputWrapper>
			<FileInputLabel>
				{!isEmpty(label) && label}
				<DefaultImage variant='grey' size={size} image={watch(inputName)} />
				<input type='file' onChange={event => changeImage(event)} />
			</FileInputLabel>
			<span>
				- 가로 600px, 세로 600px / 5MB이하 <br /> - 등록 가능 확장자: jpg, png , jpeg
			</span>
			<ResetButton type='button' onClick={resetImage} $size={size}>
				<IconCloseSharp />
			</ResetButton>
		</FileInputWrapper>
	);
}

const FileInputWrapper = styled.div`
	font-size: ${({ theme }) => theme.fontSizes.small};
	color: ${({ theme }) => theme.colors.darkGrey};
	display: flex;
	flex-direction: column;
	gap: 10px;
	position: relative;
	& > span {
		font-size: ${({ theme }) => theme.fontSizes.tiny};
	}
`;

const FileInputLabel = styled.label`
	cursor: pointer;
	& > input[type='file'] {
		position: absolute;
		width: 0;
		height: 0;
		padding: 0;
		overflow: hidden;
		border: 0;
	}
	& > div {
		margin-top: 8px;
	}
`;

interface ResetButtonProps {
	$size?: Size;
}

const sizeStyle = css<ResetButtonProps>`
	${({ $size }) => {
		switch ($size) {
			case 'small':
				return css`
					top: 15px;
					left: 85px;
				`;
			case 'medium':
				return css`
					top: 20px;
					left: 120px;
				`;
			case 'large':
				return css`
					top: 30px;
					left: 180px;
				`;
			default:
				return css`
					top: 20px;
					right: 10px;
				`;
		}
	}}
`;

const ResetButton = styled.button<ResetButtonProps>`
	position: absolute;
	${sizeStyle}
	border-radius: 50%;
	background: ${({ theme }) => theme.colors.navy};
	width: 20px;
	height: 20px;
	padding-top: 2px;
	svg {
		color: white;
	}
`;
