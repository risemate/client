import useScrollToSection from '@hooks/useScrollToSection';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { CoachingRequestState } from 'types/coach/coaching';
import { PackageDetail } from 'types/coach/product';
import { convertToProfile } from 'types/coach/productData';

import Tab from '@common/Tab';
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
	const { product, tabItems, isMyProduct, focusInquiry } = useExpertDetail(id || '');
	const { sectionRefs, activeSection, scrollToSection } = useScrollToSection(tabItems);
	const { productTitle, subTitle, coverImage } = product;
	const formState: CoachingRequestState = {
		productId: id || '',
		productTitle: productTitle || '',
		careerTypes: product.careerTypes || [],
		selectedPackage: 'BASIC',
		selectedPackageInfo: {} as PackageDetail,
	};

	return (
		<Container>
			<ExpertDetailWrapper>
				<div>
					<Profile profile={convertToProfile({ productTitle, subTitle, coverImage })} />
					<Tab
						items={tabItems}
						changeTab={scrollToSection}
						isCurrentTab={activeSection}
						underline
						sticky
					/>
					<SectionWrapper>
						<Service
							description={product.description}
							packages={product.packages}
							sectionRef={sectionRefs.current[tabItems[0]?.value ?? 0]}
						/>
						<ExpertInfo
							workExperiences={product.workExperiences}
							projects={product.projects}
							sectionRef={sectionRefs.current[tabItems[1]?.value ?? 0]}
						/>
						<Review
							avgReviewScore={product.avgReviewScore}
							reviewCount={product.reviewCount}
							isMyProduct={isMyProduct}
							sectionRef={sectionRefs.current[tabItems[2]?.value ?? 0]}
						/>
						<Inquiry
							sectionRef={sectionRefs.current[tabItems[3]?.value ?? 0]}
							isMyProduct={isMyProduct}
							inquiryRef={focusInquiry.ref}
						/>
					</SectionWrapper>
				</div>
				<ProductInfo
					packages={product.packages}
					reviewCount={product.reviewCount}
					avgReviewScore={product.avgReviewScore}
					focusInquiry={focusInquiry.focus}
					formState={formState}
				/>
			</ExpertDetailWrapper>
		</Container>
	);
}

const ExpertDetailWrapper = styled.div`
	min-width: ${({ theme }) => theme.widths.minWidth};
	width: 100%;
	max-width: ${({ theme }) => theme.widths.maxWidth};
	padding: 50px 32px;
	display: flex;
	justify-content: space-between;
	gap: 30px;
	& > div {
		width: 100%;
		height: 100%;
		& > section:first-child {
			margin-bottom: 30px;
		}
	}
`;

const SectionWrapper = styled.div`
	width: 100%;
	& > section:not(:last-child) {
		border-bottom: 1px ${({ theme }) => theme.colors.grey} dashed;
	}
`;
