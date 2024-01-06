import React from 'react';
import styled from 'styled-components';
import { Link } from 'types/Resume';

interface LinkProps {
	links: Link[];
}

export default function BaseSectionLink({ links }: LinkProps) {
	return (
		<LinkList>
			{links &&
				links.map((link, linkIndex) => (
					<li key={linkIndex}>
						<a href={link.linkUrl} target='_black'>
							🔗 {link.linkTitle}
						</a>
					</li>
				))}
		</LinkList>
	);
}

const LinkList = styled.ul`
	display: flex;
	flex-wrap: wrap;
	gap: 15px;
	grid-column: 2 / 3;
	a {
		font-size: ${({ theme }) => theme.fontSizes.small};
		padding: 7px 10px;
		background: ${({ theme }) => theme.colors.blue};
		color: white;
		border-radius: 10px;
	}
`;
