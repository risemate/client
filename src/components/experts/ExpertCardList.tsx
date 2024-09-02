import { productsQuery } from '@queries/product';
import styled from 'styled-components';
import { NetworkPagingQuery } from 'types/query/query';

import Empty from '@common/Empty';

import ExpertCard from './ExpertCard';

interface ExpertCardListProps {
	expertQueryParams?: NetworkPagingQuery;
	home?: boolean;
}

export default function ExpertCardList({ expertQueryParams, home }: ExpertCardListProps) {
	const experts = productsQuery(expertQueryParams);
	const data = home ? experts.data.data.slice(0, 4) : experts.data.data;
	if (!data || data.length === 0) {
		return <Empty />;
	}
	return (
		<StyledCardList $home={home}>
			{data.map(expert => (
				<li key={expert._id}>
					<ExpertCard expert={expert} />
				</li>
			))}
		</StyledCardList>
	);
}

const StyledCardList = styled.ul<{ $home?: boolean }>`
	width: 100%;
	display: grid;
	grid-template-columns: repeat(4, minmax(250px, 1fr));
	gap: 24px;
	@media screen and (max-width: 990px) {
		grid-template-columns: ${({ $home }) =>
			$home ? 'repeat(4, minmax(200px, 1fr))' : 'repeat(3, minmax(250px, 1fr))'};
	}
`;
