import logoIconMono from '@images/logo-icon-mono.svg';
import React from 'react';
import styled, { css } from 'styled-components';

type Variant = 'navy' | 'mint' | 'blue' | 'lightGrey';
type Size = 'small' | 'medium';
type Shape = 'square' | 'rectangle';

interface DefaultImageProps {
	variant: Variant;
	size?: Size;
	shape?: Shape;
}

export default function DefaultImage({ variant, size, shape }: DefaultImageProps) {
	return (
		<StyledDefaultImage variant={variant} size={size} shape={shape}>
			<img src={logoIconMono} alt='' />
		</StyledDefaultImage>
	);
}

type Props = Partial<DefaultImageProps>;

const variantStyle = css<Props>`
	${({ variant, theme: { colors } }) => {
		switch (variant) {
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
			case 'lightGrey':
				return css`
					background-color: ${colors.lightgrey};
				`;
		}
	}}
`;

const sizeStyle = css<Props>`
	${({ size }) => {
		switch (size) {
			case 'small':
				return css`
					padding: 20px;
					img {
						width: 110px;
					}
				`;
			case 'medium':
				return css`
					padding: 30px;
					img {
						width: 155px;
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
	}}
`;

const shapeStyle = css<Props>`
	${({ shape }) => {
		switch (shape) {
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

const StyledDefaultImage = styled.div<Props>`
	width: 100%;
	border-radius: 10px;
	text-align: center;
	${({ theme }) => theme.common.flexCenter};
	${variantStyle}
	${sizeStyle}
    ${shapeStyle}
`;
