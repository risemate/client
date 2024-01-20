import useTab from '@hooks/common/useTab';
import React from 'react';
import styled from 'styled-components';

import Banner from '@common/Banner';
import ExpertCardList from '@components/experts/ExpertCardList';

export default function Experts() {
	const experts = Array(6).fill('hello');
	const tabItems = ['전체', '이력서', '자기소개서', '입시자소서'];
	const { changeTab, isCurrentTab } = useTab(tabItems);
	const tab = { tabItems, changeTab, isCurrentTab };
	return (
		<>
			<Banner variant='blue' tab={tab}>
				이력서를 <span className='highlight mint'>LEVEL UP</span> 해줄 수 있는 <br />{' '}
				전문가를 찾아보세요!
			</Banner>
			<ExpertSection>
				<ExpertCardList experts={experts} />
			</ExpertSection>
		</>
	);
}

const ExpertSection = styled.section`
	${({ theme }) => theme.common.minmaxWidth};
	padding: 100px 32px;
	margin: auto;
`;
