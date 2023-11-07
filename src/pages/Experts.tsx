import React from 'react';
import styled from 'styled-components';

import Banner from '@common/Banner';
import ExpertCardList from '@components/experts/expert-list/ExpertCardList';

export default function Experts() {
	const experts = Array(6).fill('hello');
	return (
		<>
			<Banner variant='tab'>
				<h2>
					이력서를 <span className='highlight navy'>LEVEL UP</span> 해줄 수 있는 <br />{' '}
					전문가를 찾아보세요!
				</h2>
			</Banner>
			<StyledSection>
				<ExpertCardList experts={experts} />
			</StyledSection>
		</>
	);
}

const StyledSection = styled.section`
	${({ theme }) => theme.common.minmaxWidth};
	padding: 100px 32px;
	margin: auto;
`;
