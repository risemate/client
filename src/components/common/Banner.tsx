import { ReactNode } from 'react';
import styled, { css } from 'styled-components';
import { TabItem } from 'types/common/tab';

import Button from './Button';
import Tab from './Tab';

type Variant = 'home' | 'navy' | 'blue' | 'mint';

interface BannerProps<T> {
	variant: Variant;
	children: ReactNode;
	tab?: {
		tabItems: TabItem<T>[];
		changeTab: (item: TabItem<T>) => void;
		isCurrentTab: (item: TabItem<T>) => boolean;
	};
}

export default function Banner<T = string | number | undefined>({
	variant,
	children,
	tab,
}: BannerProps<T>) {
	const tabVariant = variant === 'blue' || variant === 'mint' ? 'lightGrey' : 'darkGrey';
	return (
		<BannerSection $variant={variant} $tab={!!tab}>
			{variant === 'home' && (
				<div>
					<h2>{children}</h2>
					<Button variant='navy' size='small' to='/my-info/ai'>
						AI 무료 코칭
					</Button>
					<Button variant='navy' size='small' to='/experts'>
						전문가 찾기
					</Button>
				</div>
			)}
			{variant !== 'home' && (
				<>
					<h2>{children}</h2>
					{tab && (
						<Tab
							items={tab.tabItems}
							changeTab={tab.changeTab}
							isCurrentTab={tab.isCurrentTab}
							variant={tabVariant}
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
	$tab: boolean;
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
					h2 {
						color: ${({ theme }) => theme.colors.navy};
					}
				`;
			case 'navy':
				return css`
					background: ${theme.colors.navy};
					h2 {
						color: white;
					}
				`;
			case 'blue':
				return css`
					background: ${theme.colors.blue};
					h2 {
						color: white;
					}
				`;
			case 'mint':
				return css`
					background: ${theme.colors.mint};
					h2 {
						color: ${theme.colors.navy};
					}
				`;
		}
	}}
`;

const BannerSection = styled.section<BannerSectionProps>`
	padding: 30px 32px;
	min-height: 250px;
	text-align: center;
	position: relative;
	h2 {
		font-size: ${({ theme }) => theme.fontSizes.large};
		font-weight: bold;
		line-height: 50px;
	}
	.highlight {
		&.mint {
			text-decoration: 5px underline ${({ theme }) => theme.colors.mint};
		}
		&.navy {
			text-decoration: 5px underline ${({ theme }) => theme.colors.navy};
		}
	}
	${variantStyle};
	${({ $tab }) => $tab && tabStyle};
	${({ theme }) => theme.common.flexCenterColumn};
`;
