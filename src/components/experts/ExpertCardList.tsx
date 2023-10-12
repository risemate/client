import React from 'react';
import styled from 'styled-components';

import ExpertCard from './ExpertCard';

interface ExpertCardListProps {
	experts: string[];
}

export default function ExpertCardList({ experts }: ExpertCardListProps) {
	return (
		<StyledCardList>
			{experts.map((expert, index) => {
				return (
					<li key={index}>
						<ExpertCard expert={expert} />
					</li>
				);
			})}
		</StyledCardList>
	);
}

const StyledCardList = styled.ul`
	width: 100%;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 24px;
	@media screen and (max-width: 990px) {
		grid-template-columns: repeat(3, 1fr);
	}
`;
