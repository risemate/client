import logoIconMono from '@images/logo-icon-mono.svg';
import { isEmpty } from '@utils/helpers';
import React from 'react';
import styled, { css } from 'styled-components';

type Variant = 'navy' | 'mint' | 'blue' | 'grey';
export type Size = 'small' | 'medium' | 'large';
type Shape = 'square' | 'rectangle';

interface DefaultImageProps {
	variant?: Variant;
	size?: Size;
	shape?: Shape;
	image?: string;
}

export default function DefaultImage({ variant, size, shape, image }: DefaultImageProps) {
	return (
		<StyledDefaultImage
			$variant={variant}
			$size={size}
			$shape={shape}
			$hasImage={!isEmpty(image)}
			className='img'
		>
			<img src={isEmpty(image) ? logoIconMono : image} alt='' />
		</StyledDefaultImage>
	);
}

interface Props {
	$variant?: Variant;
	$size?: Size;
	$shape?: Shape;
	$hasImage: boolean;
}

const variantStyle = css<Props>`
	${({ $variant, theme: { colors } }) => {
		switch ($variant) {
			case 'navy':
				return css`
					background-color: ${colors.navy};
				`;
			case 'mint':
				return css`
					background-color: ${colors.mint};
				`;
			case 'blue':
				return css`
					background-color: ${colors.blue};
				`;
			case 'grey':
				return css`
					background-color: ${colors.grey};
				`;
		}
	}}
`;

const sizeStyle = css<Props>`
	${({ $size, $hasImage }) => {
		if ($hasImage) {
			switch ($size) {
				case 'small':
					return css`
						width: 100px;
					`;
				case 'medium':
					return css`
						width: 150px;
					`;
				case 'large':
					return css`
						width: 210px;
					`;
				default:
					return css`
						width: 100%;
					`;
			}
		} else {
			switch ($size) {
				case 'small':
					return css`
						padding: 20px;
						width: 100px;
						img {
							width: 110px;
						}
					`;
				case 'medium':
					return css`
						padding: 30px;
						width: 150px;
						img {
							width: 110px;
						}
					`;
				case 'large':
					return css`
						width: 210px;
						img {
							width: 110px;
						}
					`;
				default:
					return css`
						padding: 20px;
						img {
							width: 110px;
						}
					`;
			}
		}
	}}
`;

const shapeStyle = css<Props>`
	${({ $shape }) => {
		switch ($shape) {
			case 'square':
				return css`
					aspect-ratio: 1/1;
				`;
			case 'rectangle':
				return css`
					aspect-ratio: 250/168;
				`;
			default:
				return css`
					aspect-ratio: 1/1;
				`;
		}
	}}
`;

const imgStyle = css<Props>`
	${({ $hasImage }) => {
		if ($hasImage) {
			return css`
				position: relative;
				img {
					position: absolute;
					width: 100%;
					height: 100%;
					object-fit: cover;
				}
			`;
		}
	}}
`;

const StyledDefaultImage = styled.div<Props>`
	width: 100%;
	border-radius: 10px;
	text-align: center;
	overflow: hidden;
	${({ theme }) => theme.common.flexCenter};
	${variantStyle}
	${sizeStyle}
    ${shapeStyle}
	${imgStyle}
`;
