import useTab from '@hooks/common/useTab';
import React from 'react';
import styled from 'styled-components';

import Banner from '@common/Banner';
import NetworkCardList from '@components/network/NetworkCardList';

import useNetwork from './Network.hook';

export default function Network() {
	const { networks } = useNetwork();
	const tabItems = ['전체', '이력서', '자기소개서', '입시자소서'];
	const { changeTab, isCurrentTab } = useTab(tabItems);
	const tab = { tabItems, changeTab, isCurrentTab };
	return (
		<>
			<Banner variant='mint' tab={tab}>
				다른 사람들의 이력서와 자기소개서를 <br /> 구경해보세요!
			</Banner>
			<NetworkSection>
				<h3 className='a11y-hidden'>이력서 리스트</h3>
				<NetworkCardList networks={networks} />
			</NetworkSection>
		</>
	);
}

const NetworkSection = styled.section`
	${({ theme }) => theme.common.minmaxWidth};
	padding: 100px 32px;
	margin: auto;
`;
