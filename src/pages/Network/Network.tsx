import useTab from '@hooks/common/useTab';
import styled from 'styled-components';
import { CareerType } from 'types/career/careerDocument';
import { TabItem } from 'types/common/tab';

import Banner from '@common/Banner';
import SingleAsyncWrapper from '@components/async-wrapper/SingleAsyncWrapper';
import Container from '@components/layout/Container';
import NetworkCardList from '@components/network/NetworkCardList';

export default function Network() {
	const tabItems: TabItem<CareerType | undefined>[] = [
		{ label: '전체', value: undefined },
		{ label: '이력서', value: 'RESUME' },
		{ label: '자기소개서', value: 'COVERLETTER' },
	];
	const { currentTab, changeTab, isCurrentTab } = useTab(tabItems, true);
	const tab = { tabItems, changeTab, isCurrentTab };
	return (
		<Container>
			<Banner<CareerType | undefined> variant='mint' tab={tab}>
				다른 사람들의 이력서와 자기소개서를 <br /> 구경해보세요!
			</Banner>
			<NetworkSection>
				<SingleAsyncWrapper>
					<h3 className='a11y-hidden'>이력서 리스트</h3>
					<NetworkCardList networkQueryParams={{ careerType: currentTab.value }} />
				</SingleAsyncWrapper>
			</NetworkSection>
		</Container>
	);
}

const NetworkSection = styled.section`
	${({ theme }) => theme.common.minmaxWidth};
	height: calc(100vh - 300px);
	padding: 100px 32px;
`;
