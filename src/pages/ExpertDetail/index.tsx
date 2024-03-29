import useTab from '@hooks/common/useTab';
import styled from 'styled-components';
import { convertToProfile, mockProduct } from 'types/coach/productData';
import { TabItem } from 'types/common/tab';

import Tab from '@common/Tab';
import Container from '@components/layout/Container';
import Profile from '@components/resume-view/ViewTemplate/Profile';

import ExpertInfo from './components/ExpertInfo';
import Inquiry from './components/Inquiry/Inquiry';
import ProductInfo from './components/ProductInfo';
import Review from './components/Review/Review';
import Service from './components/Service';

export default function ExpertDetail() {
	const tabItems: TabItem[] = [
		{ label: '서비스 설명', value: 'SERVICE' },
		{ label: '전문가 정보', value: 'INFO' },
		{ label: '후기', value: 'REVIEW' },
		{ label: '문의', value: 'INQUIRY' },
	];
	const { currentTab, changeTab, isCurrentTab } = useTab(tabItems);
	const product = mockProduct;
	const { productTitle, subTitle, coverImage } = product;

	return (
		<Container>
			<ExpertDetailWrapper>
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
			</ExpertDetailWrapper>
		</Container>
	);
}

const ExpertDetailWrapper = styled.div`
	max-width: ${({ theme }) => theme.widths.maxWidth};
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
