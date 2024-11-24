import { ReactNode } from 'react';
import styled, { CSSProp, css } from 'styled-components';

import 'normalize.css';

type ColorType = 'white' | 'lightGrey';

type Props = {
	children: ReactNode;
	css?: CSSProp;
	center?: boolean;
	padding?: boolean;
	backgroundColor?: ColorType;
};

function Container({
	children,
	css,
	center = false,
	padding = false,
	backgroundColor = 'white',
}: Props) {
	return (
		<ContainerStyled
			css={css}
			$backgroundColor={backgroundColor}
			$center={center}
			$padding={padding}
		>
			{children}
		</ContainerStyled>
	);
}

export default Container;

interface StyledLayoutProps {
	$backgroundColor: ColorType;
	$center: boolean;
	$padding: boolean;
	css: CSSProp;
}

const backgroundStyle = css<StyledLayoutProps>`
	${({ $backgroundColor, theme: { colors } }) => {
		switch ($backgroundColor) {
			case 'white':
				return css`
					background-color: white;
				`;
			case 'lightGrey':
				return css`
					background-color: ${colors.lightGrey};
				`;
		}
	}}
`;

const ContainerStyled = styled.main<StyledLayoutProps>`
	width: 100%;
	min-height: ${({ theme }) => theme.heights.contentHeight};
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	${backgroundStyle}
	${({ $center, theme }) => $center && theme.common.flexCenterColumn};
	${({ $padding }) => $padding && 'padding: 32px;'}
	${({ css }) => css};
`;
