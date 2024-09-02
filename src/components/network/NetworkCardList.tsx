import { networkQuery } from '@queries/network';
import styled from 'styled-components';
import { NetworkPagingQuery } from 'types/query/query';

import Empty from '@common/Empty';

import NetworkCard from './NetworkCard';

interface NetworkCardListProps {
	networkQueryParams?: NetworkPagingQuery;
	home?: boolean;
}

export default function NetworkCardList({
	networkQueryParams,
	home,
}: NetworkCardListProps) {
	const networks = networkQuery(networkQueryParams);
	const data = home ? networks.data.data.slice(0, 4) : networks.data.data;
	if (!data || data.length === 0) {
		return <Empty />;
	}
	return (
		<StyledCardList $home={home}>
			{data.map(network => (
				<li key={network._id}>
					<NetworkCard network={network} />
				</li>
			))}
		</StyledCardList>
	);
}

const StyledCardList = styled.ul<{ $home?: boolean }>`
	width: 100%;
	height: 100%;
	display: grid;
	grid-template-columns: repeat(4, minmax(200px, 1fr));
	gap: 30px 40px;
	@media screen and (max-width: 990px) {
		grid-template-columns: ${({ $home }) =>
			$home ? 'repeat(4, minmax(200px, 1fr))' : 'repeat(3, minmax(200px, 1fr))'};
	}
`;
