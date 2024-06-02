import useTab from '@hooks/common/useTab';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { convertToProfile } from 'types/coach/productData';

import Tab from '@common/Tab';
import SingleAsyncWrapper from '@components/async-wrapper/SingleAsyncWrapper';
import Container from '@components/layout/Container';
import Profile from '@components/resume-view/ViewTemplate/Profile';

import ExpertInfo from './components/ExpertInfo';
import Inquiry from './components/Inquiry/Inquiry';
import ProductInfo from './components/ProductInfo';
import Review from './components/Review/Review';
import Service from './components/Service';
import useExpertDetail from './ExpertDetail.hook';

export default function ExpertDetail() {
	const { id } = useParams();

	const { product, isLoading, tabItems, compareTab } = useExpertDetail(id || '');
	const { currentTab, changeTab, isCurrentTab } = useTab(tabItems, true);
	const { productTitle, subTitle, coverImage } = product;

	return (
		<Container>
			<SingleAsyncWrapper>
				{!isLoading && (
					<ExpertDetailWrapper>
						<div>
							<Profile
								profile={convertToProfile({ productTitle, subTitle, coverImage })}
							/>
							<Tab
								items={tabItems}
								changeTab={changeTab}
								isCurrentTab={isCurrentTab}
								underline
							/>
							<StyledSection>
								{compareTab(currentTab, tabItems[0]) && (
									<Service
										description={product.description}
										packages={product.packages}
									/>
								)}
								{compareTab(currentTab, tabItems[1]) && (
									<ExpertInfo
										workExperiences={product.workExperiences}
										projects={product.projects}
									/>
								)}
								{compareTab(currentTab, tabItems[2]) && (
									<Review
										avgReviewScore={product.avgReviewScore}
										reviewCount={product.reviewCount}
									/>
								)}
								{compareTab(currentTab, tabItems[3]) && <Inquiry />}
							</StyledSection>
						</div>
						<ProductInfo
							packages={product.packages}
							reviewCount={product.reviewCount}
							avgReviewScore={product.avgReviewScore}
						/>
					</ExpertDetailWrapper>
				)}
			</SingleAsyncWrapper>
		</Container>
	);
}

const ExpertDetailWrapper = styled.div`
	min-width: ${({ theme }) => theme.widths.minWidth};
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
