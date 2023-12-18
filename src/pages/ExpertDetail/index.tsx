import useTab from '@hooks/common/useTab';
import React from 'react';
import styled from 'styled-components';
import { convertToProfile, mockProduct } from 'types/Product/data';

import Tab from '@common/Tab';
import Profile from '@components/resume/ResumeTemplate/Profile';

import ExpertInfo from './components/ExpertInfo';
import Inquiry from './components/Inquiry/Inquiry';
import ProductInfo from './components/ProductInfo';
import Review from './components/Review/Review';
import Service from './components/Service';

export default function ExpertDetail() {
	const tabItems = ['서비스 설명', '전문가 정보', '후기', '문의'];
	const { currentTab, changeTab, isCurrentTab } = useTab(tabItems);
	const product = mockProduct;
	const { productTitle, subTitle, coverImage } = product;

	return (
		<StyledExpert>
			<div>
				<Profile profile={convertToProfile({ productTitle, subTitle, coverImage })} />
				<Tab
					items={tabItems}
					changeTab={changeTab}
					isCurrentTab={isCurrentTab}
					underline
				/>
				<StyledSection>
					{currentTab === tabItems[0] && (
						<Service description={product.description} packages={product.packages} />
					)}
					{currentTab === tabItems[1] && (
						<ExpertInfo
							workExperiences={product.workExperiences}
							projects={product.projects}
						/>
					)}
					{currentTab === tabItems[2] && (
						<Review
							avgReviewScore={product.avgReviewScore}
							reviewCount={product.reviewCount}
						/>
					)}
					{currentTab === tabItems[3] && <Inquiry />}
				</StyledSection>
			</div>
			<ProductInfo
				packages={product.packages}
				reviewCount={product.reviewCount}
				avgReviewScore={product.avgReviewScore}
			/>
		</StyledExpert>
	);
}

const StyledExpert = styled.div`
	max-width: ${({ theme }) => theme.widths.maxWidth};
	margin: auto;
	padding: 50px 32px;
	display: flex;
	justify-content: space-between;
	gap: 30px;
	& > div {
		width: 100%;
		& > section:first-child {
			margin-bottom: 30px;
		}
	}
`;

const StyledSection = styled.section``;
