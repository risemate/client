import styled from 'styled-components';

import NetworkCard from './NetworkCard';

interface NetworkCardListProps {
	networks: string[];
	home?: boolean;
}

export default function NetworkCardList({ networks, home }: NetworkCardListProps) {
	return (
		<StyledCardList $home={home}>
			{networks.map((network, index) => {
				return (
					<li key={index}>
						<NetworkCard network={network} />
					</li>
				);
			})}
		</StyledCardList>
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
