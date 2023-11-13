import useTab from '@hooks/useTab';
import { IconCheck, IconClock } from '@icons';
import React from 'react';
import styled, { css } from 'styled-components';

import Button from '@common/Button';
import Tab from '@common/Tab';

export default function ProductInfo() {
	const tabItems = ['Standard', 'Premium'];
	const { currentTab, changeTab, isCurrentTab } = useTab(tabItems);
	return (
		<article>
			<StyledProduct>
				<Tab
					items={tabItems}
					changeTab={changeTab}
					isCurrentTab={isCurrentTab}
					underline
					center
				/>
				<h3>포함 서비스 목록</h3>
				{currentTab === 'Standard' && (
					<ul>
						<li>
							해당 문서의 섹션마다 피드백을 남긴 문서와 30분 간의 미팅을 진행합니다.
						</li>
						<li>
							<IconCheck /> 해당 문서의 피드백 문서
						</li>
						<li>
							<IconCheck /> 30분의 온/오프라인 미팅
						</li>
					</ul>
				)}
				{currentTab === 'Premium' && (
					<ul>
						<li>
							해당 문서의 섹션마다 피드백을 남긴 문서와 30분 간의 미팅을 진행합니다.
						</li>
						<li>
							<IconCheck /> 해당 문서의 피드백 문서
						</li>
						<li>
							<IconCheck /> 1시간의 온/오프라인 미팅
						</li>
						<li>
							<IconCheck /> 3번의 수정 요청 가능
						</li>
					</ul>
				)}
				<p>10,000원</p>
				<Button variant='mint' size='full'>
					문의하기
				</Button>
				<Button variant='blue' size='full'>
					첨삭 요청하기
				</Button>
			</StyledProduct>
			<StyledReview>
				<p>서비스 제공이 완료된 이후에 전문가에게 결제 대금이 전달됩니다.</p>
				<p>
					<IconClock />
					연락 가능 시간: 언제나 가능
				</p>
				<ul>
					<li>
						10건<span>거래 수</span>
					</li>
					<li>
						100%<span>만족도</span>
					</li>
					<li>
						10건<span>리뷰 수</span>
					</li>
				</ul>
			</StyledReview>
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

const StyledProduct = styled.div`
	${baseStyle}
	margin-bottom: 20px;
	h3 {
		font-weight: bold;
		padding: 15px 0;
	}
	h3 + ul {
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

const StyledReview = styled.div`
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
