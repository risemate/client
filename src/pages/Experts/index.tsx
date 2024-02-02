import useTab from '@hooks/common/useTab';
import styled from 'styled-components';
import { TabItem } from 'types/Tab';

import Banner from '@common/Banner';
import ExpertCardList from '@components/experts/ExpertCardList';
import Container from '@components/layout/Container';

export default function Experts() {
	const experts = Array(6).fill('hello');
	const tabItems: TabItem[] = [
		{ label: '전체', value: '' },
		{ label: '이력서', value: 'RESUME' },
		{ label: '자기소개서', value: 'COVERLETTER' },
	];
	const { changeTab, isCurrentTab } = useTab(tabItems);
	const tab = { tabItems, changeTab, isCurrentTab };
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
