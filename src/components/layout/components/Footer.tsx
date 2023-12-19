import logoMono from '@images/logo-mono.svg';
import React from 'react';
import styled from 'styled-components';

export default function Footer() {
	return (
		<StyledFooter>
			<FooterWrapper>
				<div>
					<h1>
						<img src={logoMono} alt='Risemate 로고' />
					</h1>
					<button type='button'>문의하기</button>
				</div>
				<ul>
					<li>라이즈메이트</li>
					<li>대표: 김신혁</li>
					<li>동업자: 우혜리</li>
					<li>그외 나중에 추가할 것들...</li>
				</ul>
				<p>GitHub: https://github.com/risemate</p>
				<p>@Risemate. All rights reserved.</p>
			</FooterWrapper>
		</StyledFooter>
	);
}

const StyledFooter = styled.footer`
	width: 100%;
	height: 150px;
	border-top: 1px solid ${({ theme }) => theme.colors.lightGrey};
`;

const FooterWrapper = styled.div`
	${({ theme }) => theme.common.minmaxWidth};
	padding: 32px;
	margin: auto;
	& > * {
		font-size: ${({ theme }) => theme.fontSizes.small};
		color: ${({ theme }) => theme.colors.darkGrey};
	}
	& > div {
		display: flex;
		gap: 20px;
		align-items: end;
		padding-bottom: 20px;
	}
	ul {
		display: flex;
		gap: 5px;
		padding-bottom: 5px;
		li:not(:last-child):after {
			content: '  |';
		}
	}
	p:not(:last-child) {
		padding-bottom: 5px;
	}
`;
