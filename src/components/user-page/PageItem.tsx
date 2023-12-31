import React, { ReactNode } from 'react';
import styled from 'styled-components';

import Button from '@common/Button';

interface PageItemProps {
	items: { name: string; icon: ReactNode; state: string }[];
	buttonEvent: { name: string; onClick: () => void };
}

export default function PageItem({ items, buttonEvent }: PageItemProps) {
	return (
		<PageItemWrapper>
			<div>
				{items.map((item, index) => (
					<SinglePageItem key={index}>
						{item.icon}
						<h3>{item.name}</h3>
						<p>{item.state}</p>
					</SinglePageItem>
				))}
			</div>
			<Button variant='navy' size='medium' onClick={buttonEvent.onClick}>
				{buttonEvent.name}
			</Button>
		</PageItemWrapper>
	);
}

const PageItemWrapper = styled.div`
	width: 100%;
	text-align: center;
	& > div {
		display: flex;
		justify-content: space-around;
		padding-bottom: 30px;
	}
`;

const SinglePageItem = styled.div`
	${({ theme }) => theme.common.flexCenterColumn};
	gap: 10px;
	svg {
		width: 35px;
		height: 35px;
		margin-bottom: 5px;
		color: ${({ theme }) => theme.colors.navy};
	}
	h3 {
		font-weight: bold;
		color: ${({ theme }) => theme.colors.navy};
	}
	p {
		color: ${({ theme }) => theme.colors.blue};
		font-size: ${({ theme }) => theme.fontSizes.medium};
		font-weight: 200;
	}
`;
