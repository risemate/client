import useTab from '@hooks/common/useTab';
import { IconCheck, IconClock } from '@icons';
import { numberWithCommas } from '@utils/helpers';
import { useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { CoachingRequestState } from 'types/coach/coaching';
import { PackageCategory, Package as PackageType } from 'types/coach/product';
import { TabItem } from 'types/common/tab';

import Button from '@common/Button';
import Tab from '@common/Tab';

interface ProductInfoProps {
	packages?: Partial<PackageType>;
	reviewCount?: number;
	avgReviewScore?: number;
	focusInquiry: () => void;
	formState: CoachingRequestState;
}

export default function ProductInfo({
	packages = {} as PackageType,
	reviewCount = 0,
	avgReviewScore = 0,
	focusInquiry,
	formState,
}: ProductInfoProps) {
	const tabItems: TabItem<PackageCategory>[] = Object.keys(packages).map(item => {
		return {
			label: item,
			value: item as PackageCategory,
		};
	});
	const { currentTab, changeTab, isCurrentTab } = useTab<PackageCategory>(tabItems);
	const navigate = useNavigate();
	return (
		<article>
			<ProductWrapper>
				<Tab
					items={tabItems}
					changeTab={changeTab}
					isCurrentTab={isCurrentTab}
					underline
					center
					padding={10}
				/>
				<h3>포함 서비스 목록</h3>
				{Object.entries(packages).map(
					([key, pack]) =>
						currentTab.value === key && (
							<div key={key}>
								<ul>
									<li>{pack?.description}</li>
									{pack?.providerOptions.map((option, index) => (
										<li key={index}>
											<IconCheck />
											{option.name}
										</li>
									))}
								</ul>
								<p>{numberWithCommas(pack?.price)}원</p>
							</div>
						),
				)}
				<Button variant='mint' size='full' onClick={focusInquiry}>
					문의하기
				</Button>
				<Button
					variant='blue'
					size='full'
					onClick={() =>
						navigate('/form/revise', {
							state: {
								...formState,
								selectedPackage: currentTab.value,
								selectedPackageInfo: packages[currentTab.value],
							},
						})
					}
				>
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
						{(avgReviewScore * 20).toFixed(2)}%<span>만족도</span>
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
