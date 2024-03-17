import useTab from '@hooks/common/useTab';
import styled from 'styled-components';
import { CareerType } from 'types/career/careerDocument';
import { TabItem } from 'types/common/tab';

import Banner from '@common/Banner';
import Container from '@components/layout/Container';
import NetworkCardList from '@components/network/NetworkCardList';

import useNetwork from './Network.hook';

export default function Network() {
	const tabItems: TabItem<CareerType | undefined>[] = [
		{ label: '전체', value: undefined },
		{ label: '이력서', value: 'RESUME' },
		{ label: '자기소개서', value: 'COVERLETTER' },
	];
	const { currentTab, changeTab, isCurrentTab } = useTab(tabItems, true);
	const tab = { tabItems, changeTab, isCurrentTab };
	const { networks } = useNetwork(currentTab.value);
	return (
		<Container>
			<Banner<CareerType | undefined> variant='mint' tab={tab}>
				다른 사람들의 이력서와 자기소개서를 <br /> 구경해보세요!
			</Banner>
			<NetworkSection>
				<h3 className='a11y-hidden'>이력서 리스트</h3>
				<NetworkCardList networks={networks} />
			</NetworkSection>
		</Container>
	);
}

const NetworkSection = styled.section`
	${({ theme }) => theme.common.minmaxWidth};
	padding: 100px 32px;
`;
