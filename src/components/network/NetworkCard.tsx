import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Career } from 'types/career/careerDocument';

import DefaultImage from '@common/DefaultImage';

interface NetworkCardProps {
	network: Career;
}

export default function NetworkCard({ network }: NetworkCardProps) {
	const image = true;

	return (
		<CardItemLink to={`/networks/docs/${network._id}`}>
			{image ? (
				<DefaultImage variant='mint' shape='rectangle' />
			) : (
				<img src={''} alt='' />
			)}
			<h4>{network.docTitle}</h4>
			<p>{network.description}</p>
		</CardItemLink>
	);
}

const CardItemLink = styled(Link)`
	max-width: 250px;
	text-align: start;
	transition: all 0.2s ease;
	&:hover {
		transform: translateY(-5px);
		filter: brightness(0.8);
	}
	h4 {
		font-weight: bold;
		${({ theme }) => theme.common.ellipsisOneLine};
		margin-top: 10px;
		padding-left: 10px;
	}
	p {
		font-size: ${({ theme }) => theme.fontSizes.small};
		color: ${({ theme }) => theme.colors.darkGrey};
		${({ theme }) => theme.common.ellipsisTwoLine};
		margin-top: 5px;
		padding-left: 10px;
		line-height: 15px;
	}
`;
