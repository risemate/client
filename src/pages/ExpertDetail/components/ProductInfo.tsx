import useTab from '@hooks/common/useTab';
import { IconCheck, IconClock } from '@icons';
import { numberWithCommas, removeNullValues } from '@utils/helpers';
import React from 'react';
import styled, { css } from 'styled-components';
import { Package as PackageType } from 'types/Product';

import Button from '@common/Button';
import Tab from '@common/Tab';

interface ProductInfoProps {
	packages: PackageType;
	reviewCount: number;
	avgReviewScore: number;
}

export default function ProductInfo({
	packages,
	reviewCount,
	avgReviewScore,
}: ProductInfoProps) {
	const filteredPackages = removeNullValues<PackageType>(packages);
	const tabItems = Object.keys(filteredPackages).map(item => {
		return {
			label: item,
			value: item,
		};
	});
	const { currentTab, changeTab, isCurrentTab } = useTab(tabItems);
	return (
		<article>
			<ProductWrapper>
				<Tab
					items={tabItems}
					changeTab={changeTab}
					isCurrentTab={isCurrentTab}
					underline
					center
				/>
				<h3>포함 서비스 목록</h3>
				{Object.entries(filteredPackages).map(
					([key, pack]) =>
						currentTab.label === key && (
							<div key={key}>
								<ul>
									<li>{pack?.description}</li>
									{pack?.providerOptions.map(option => (
										<li key={option.name}>
											<IconCheck />
											{option.name}
										</li>
									))}
								</ul>
								<p>{numberWithCommas(pack?.price)}원</p>
							</div>
						),
				)}
				<Button variant='mint' size='full'>
					문의하기
				</Button>
				<Button variant='blue' size='full'>
					첨삭 요청하기
				</Button>
			</ProductWrapper>
			<ReviewWrapper>
				<p>서비스 제공이 완료된 이후에 전문가에게 결제 대금이 전달됩니다.</p>
				<p>
					<IconClock />
					연락 가능 시간: 언제나 가능
				</p>
				<ul>
					<li>
						{reviewCount}건<span>거래 수</span>
					</li>
					<li>
						{avgReviewScore * 20}%<span>만족도</span>
					</li>
					<li>
						{reviewCount}건<span>리뷰 수</span>
					</li>
				</ul>
			</ReviewWrapper>
		</article>
	);
}

const baseStyle = css`
	width: 300px;
	padding: 20px;
	background: white;
	border: 1px solid ${({ theme }) => theme.colors.grey};
	border-radius: 10px;
`;

const ProductWrapper = styled.div`
	${baseStyle}
	margin-bottom: 20px;
	h3 {
		font-weight: bold;
		padding: 15px 0;
	}
	h3 + div > ul {
		background: ${({ theme }) => theme.colors.lightGrey};
		font-size: ${({ theme }) => theme.fontSizes.small};
		padding: 10px;
		line-height: 20px;
		& > li:first-child {
			margin-bottom: 10px;
		}
		& > li {
			display: flex;
			align-items: center;
			gap: 10px;
		}
		& > li svg {
			color: ${({ theme }) => theme.colors.blue};
		}
	}
	p {
		padding: 15px 0 50px;
		font-weight: bold;
		float: right;
	}
	& > button:last-of-type {
		margin-top: 10px;
	}
`;

const ReviewWrapper = styled.div`
	${baseStyle}
	font-size: ${({ theme }) => theme.fontSizes.small};
	color: ${({ theme }) => theme.colors.darkGrey};
	line-height: 20px;
	p {
		margin-bottom: 10px;
	}
	p:nth-child(2) {
		display: flex;
		align-items: center;
		gap: 10px;
	}
	ul {
		background: ${({ theme }) => theme.colors.lightGrey};
		font-size: ${({ theme }) => theme.fontSizes.small};
		padding: 14px 0 8px;
		border-radius: 10px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		li {
			color: black;
			${({ theme }) => theme.common.flexCenterColumn};
			width: 30%;
			font-size: ${({ theme }) => theme.fontSizes.default};
			span {
				color: ${({ theme }) => theme.colors.darkGrey};
				font-size: ${({ theme }) => theme.fontSizes.tiny};
			}
		}
	}
`;
