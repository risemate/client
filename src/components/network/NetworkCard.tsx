import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Career } from 'types/career/careerDocument';

import DefaultImage from '@common/DefaultImage';

interface NetworkCardProps {
	network: Career;
}

export default function NetworkCard({ network }: NetworkCardProps) {
	const hasImage = !!network.coverImage;
	const careerType = network.careerType === 'RESUME' ? '이력서' : '자기소개서';
	const docType =
		network.docType === 'BASIC'
			? null
			: network.docType === 'AI'
				? 'AI 첨삭'
				: '전문가 첨삭';
	return (
		<CardItemLink to={`/networks/docs/${network._id}`}>
			{hasImage ? (
				<img src={''} alt='' />
			) : (
				<DefaultImage variant='mint' shape='rectangle' image={network.coverImage} />
			)}
			<h4>{network.docTitle}</h4>
			<p>{network.description}</p>
			<CareerChip>{careerType}</CareerChip>
			{docType && <DocTypeChip>{docType}</DocTypeChip>}
		</CardItemLink>
	);
}

const CardItemLink = styled(Link)`
	max-width: 250px;
	text-align: start;
	transition: all 0.2s ease;
	position: relative;
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

const CareerChip = styled.span`
	position: absolute;
	top: 10px;
	left: 10px;
	background: rgba(0, 0, 0, 0.5);
	padding: 5px;
	border-radius: 5px;
	color: white;
	font-size: ${({ theme }) => theme.fontSizes.small};
`;

const DocTypeChip = styled.span`
	position: absolute;
	top: 10px;
	right: 10px;
	background: rgba(255, 255, 255, 0.7);
	padding: 5px;
	border-radius: 5px;
	color: ${({ theme }) => theme.colors.darkGrey};
	font-size: ${({ theme }) => theme.fontSizes.small};
`;
