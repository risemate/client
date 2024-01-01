import useTab from '@hooks/common/useTab';
import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';

import Button from './Button';
import Tab from './Tab';

type Variant = 'home' | 'tab' | 'default';

interface BannerProps {
	variant: Variant;
	children: ReactNode;
}

export default function Banner({ variant, children }: BannerProps) {
	const navigate = useNavigate();
	const tabItems = ['전체', '이력서', '자기소개서', '입시자소서'];
	const { changeTab, isCurrentTab } = useTab(tabItems);
	return (
		<BannerSection $variant={variant}>
			{variant === 'home' && (
				<div>
					{children}
					<Button variant='navy' size='small' onClick={() => navigate('/my-info/ai')}>
						AI 무료 코칭
					</Button>
					<Button variant='navy' size='small' onClick={() => navigate('/experts')}>
						전문가 찾기
					</Button>
				</div>
			)}
			{variant !== 'home' && (
				<>
					{children}
					{variant === 'tab' && (
						<Tab
							items={tabItems}
							changeTab={changeTab}
							isCurrentTab={isCurrentTab}
							center
						/>
					)}
				</>
			)}
		</BannerSection>
	);
}

interface BannerSectionProps {
	$variant?: Variant;
}

const homeStyle = css`
	width: calc(100% - 64px);
	max-width: 800px;
	border-radius: 10px;
	background: white;
	box-shadow: 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
	text-align: center;
	padding: 30px 50px;
	h2 {
		margin-bottom: 15px;
	}
	button {
		box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.15);
	}
	button:first-of-type {
		margin-right: 20px;
	}
`;

const tabStyle = css`
	${({ theme }) => theme.common.flexCenterColumn};
	background: linear-gradient(
		91deg,
		rgba(103, 224, 178, 0.5) -0.94%,
		rgba(87, 110, 231, 0.5) 80.11%,
		rgba(49, 57, 100, 0.5) 106.39%
	);
	h2 {
		line-height: 40px;
	}
	ul {
		position: absolute;
		bottom: 0;
	}
`;

const variantStyle = css<BannerSectionProps>`
	${({ $variant, theme }) => {
		switch ($variant) {
			case 'home':
				return css`
					background: ${`linear-gradient(91deg, ${theme.colors.mint} -0.94%, ${theme.colors.blue} 80.11%, ${theme.colors.navy} 106.39%)`};
					${theme.common.flexCenter};
					& > div {
						${homeStyle}
					}
				`;
			case 'tab':
				return css`
					${tabStyle}
				`;
			case 'default':
				return css`
					${tabStyle}
				`;
		}
	}}
`;

const BannerSection = styled.section<BannerSectionProps>`
	width: 100%;
	min-width: ${({ theme }) => theme.widths.minWidth};
	height: 250px;
	padding: 0 32px;
	text-align: center;
	position: relative;
	h2 {
		font-size: ${({ theme }) => theme.fontSizes.large};
		font-weight: bold;
		color: ${({ theme }) => theme.colors.navy};
	}
	.highlight {
		&.mint {
			text-decoration: 5px underline ${({ theme }) => theme.colors.mint};
		}
		&.navy {
			text-decoration: 5px underline ${({ theme }) => theme.colors.navy};
		}
	}
	${variantStyle}
`;
