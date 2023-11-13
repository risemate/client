import useTab from '@hooks/useTab';
import React from 'react';
import styled from 'styled-components';

import Tab from '@common/Tab';
import Comment from '@components/experts/expert-detail/Comment';
import ExpertProfile from '@components/experts/expert-detail/ExpertProfile';
import Inquiry from '@components/experts/expert-detail/Inquiry';
import ProductInfo from '@components/experts/expert-detail/ProductInfo';
import Service from '@components/experts/expert-detail/Service';

export default function ExpertDetail() {
	const tabItems = ['서비스 설명', '커리어 경험', '첨삭 경험', '후기', '문의'];
	const { currentTab, changeTab, isCurrentTab } = useTab(tabItems);

	return (
		<StyledExpert>
			<div>
				<ExpertProfile />
				<Tab
					items={tabItems}
					changeTab={changeTab}
					isCurrentTab={isCurrentTab}
					underline
				/>
				<StyledSection>
					{currentTab === tabItems[0] && <Service />}
					{currentTab === tabItems[3] && <Comment />}
					{currentTab === tabItems[4] && <Inquiry />}
				</StyledSection>
			</div>
			<ProductInfo />
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
	}
`;

const StyledSection = styled.section``;
