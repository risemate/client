import styled from 'styled-components';
import { Product } from 'types/coach/product';

import SingleAsyncWrapper from '@components/async-wrapper/SingleAsyncWrapper';

import ExpertCard from './ExpertCard';

interface ExpertCardListProps {
	experts: Product[];
	home?: boolean;
}

export default function ExpertCardList({ experts, home }: ExpertCardListProps) {
	return (
		<SingleAsyncWrapper>
			<StyledCardList $home={home}>
				{experts.map((expert, index) => (
					<li key={index}>
						<ExpertCard expert={expert} />
					</li>
				))}
			</StyledCardList>
		</SingleAsyncWrapper>
	);
}

const StyledCardList = styled.ul<{ $home?: boolean }>`
	width: 100%;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 24px;
	@media screen and (max-width: 990px) {
		grid-template-columns: ${({ $home }) =>
			$home ? 'repeat(4, 1fr)' : 'repeat(3, 1fr)'};
	}
`;
