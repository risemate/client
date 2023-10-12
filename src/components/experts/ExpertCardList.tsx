import React from 'react';
import styled from 'styled-components';

import ExpertCard from './ExpertCard';

interface ExpertCardListProps {
	experts: string[];
	home?: boolean;
}

export default function ExpertCardList({ experts, home }: ExpertCardListProps) {
	return (
		<StyledCardList home={home}>
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

type Props = Partial<ExpertCardListProps>;

const StyledCardList = styled.ul<Props>`
	width: 100%;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 24px;
	@media screen and (max-width: 990px) {
		grid-template-columns: ${({ home }) => (home ? 'repeat(4, 1fr)' : 'repeat(3, 1fr)')};
	}
`;
