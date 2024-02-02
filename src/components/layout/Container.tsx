import { ReactNode } from 'react';
import styled, { CSSProp, css } from 'styled-components';

import 'normalize.css';

type ColorType = 'white' | 'lightGrey';

type Props = {
	children: ReactNode;
	css?: CSSProp;
	backgroundColor?: ColorType;
};

function Container({ children, css, backgroundColor = 'white' }: Props) {
	return (
		<ContainerStyled css={css} $backgroundColor={backgroundColor}>
			{children}
		</ContainerStyled>
	);
}

export default Container;

interface StyledLayoutProps {
	$backgroundColor: ColorType;
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
	min-height: calc(80vh);
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	${backgroundStyle}
	${({ css }) => css};
`;
