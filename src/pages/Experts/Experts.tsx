import useTab from '@hooks/common/useTab';
import styled from 'styled-components';
import { CareerType } from 'types/career/resume';
import { TabItem } from 'types/common/tab';

import Banner from '@common/Banner';
import ExpertCardList from '@components/experts/ExpertCardList';
import Container from '@components/layout/Container';

import useExperts from './Experts.hook';

export default function Experts() {
	const tabItems: TabItem<CareerType | undefined>[] = [
		{ label: '전체', value: undefined },
		{ label: '이력서', value: 'RESUME' },
		{ label: '자기소개서', value: 'COVERLETTER' },
	];
	const { currentTab, changeTab, isCurrentTab } = useTab(tabItems, true);
	const tab = { tabItems, changeTab, isCurrentTab };
	const { experts } = useExperts(currentTab.value);
	return (
		<Container>
			<Banner variant='blue' tab={tab}>
				이력서를 <span className='highlight mint'>LEVEL UP</span> 해줄 수 있는 <br />{' '}
				전문가를 찾아보세요!
			</Banner>
			<ExpertSection>
				<ExpertCardList experts={experts} />
			</ExpertSection>
		</Container>
	);
}

const ExpertSection = styled.section`
	${({ theme }) => theme.common.minmaxWidth};
	padding: 100px 32px;
`;
