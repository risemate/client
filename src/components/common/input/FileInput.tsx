import React from 'react';
import styled from 'styled-components';

import DefaultImage from '@common/DefaultImage';

interface FileInputProps {
	label: string;
	image: string;
}

export default function FileInput({ label, image }: FileInputProps) {
	return (
		<StyledLabel>
			{label}
			<div>
				{image === '' ? (
					<DefaultImage variant='mint' size='small' />
				) : (
					<img src={image} alt='사용자 설정 이미지' />
				)}
				<span>
					- 가로 600px, 세로 600px / 5MB이하 <br /> - 등록 가능 확장자: jpg, png , jpeg
				</span>
			</div>
			<input type='file' />
		</StyledLabel>
	);
}

const StyledLabel = styled.label`
	font-size: ${({ theme }) => theme.fontSizes.small};
	color: ${({ theme }) => theme.colors.darkGrey};
	display: flex;
	flex-direction: column;
	gap: 10px;
	cursor: pointer;
	& > div {
		display: flex;
		gap: 20px;
		align-items: end;
	}
	& > input[type='file'] {
		position: absolute;
		width: 0;
		height: 0;
		padding: 0;
		overflow: hidden;
		border: 0;
	}
	& > img {
		width: 100px;
		height: 100px;
		border-radius: 10px;
		object-fit: cover;
	}
`;
