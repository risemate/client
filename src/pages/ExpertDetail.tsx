import useTab from '@hooks/useTab';
import { convertToProfile, mockProduct } from 'models/ProductData';
import React from 'react';
import styled from 'styled-components';

import Tab from '@common/Tab';
import ExpertInfo from '@components/experts/expert-detail/ExpertInfo';
import Inquiry from '@components/experts/expert-detail/Inquiry/Inquiry';
import ProductInfo from '@components/experts/expert-detail/ProductInfo';
import Review from '@components/experts/expert-detail/Review/Review';
import Service from '@components/experts/expert-detail/Service';
import Profile from '@components/resume/resume-view/Profile';

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
