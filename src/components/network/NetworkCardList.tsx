import styled from 'styled-components';
import { Career } from 'types/career/careerDocument';

import NetworkCard from './NetworkCard';

interface NetworkCardListProps {
	networks: Career[];
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
	grid-template-columns: repeat(4, minmax(200px, 1fr));
	gap: 30px 40px;
	@media screen and (max-width: 990px) {
		grid-template-columns: ${({ $home }) =>
			$home ? 'repeat(4, minmax(200px, 1fr))' : 'repeat(3, minmax(200px, 1fr))'};
	}
`;
