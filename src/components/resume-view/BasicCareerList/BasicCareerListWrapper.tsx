import { ReactNode } from 'react';
import styled from 'styled-components';

import Button from '@common/Button';

interface BasicCareerListWrapperProps {
	title: string;
	createTo?: 'co' | 're' | 'pr';
	addNew?: boolean;
	children: ReactNode;
	height?: string;
}

export default function BasicCareerListWrapper({
	title,
	createTo,
	addNew,
	children,
	height = '100%',
}: BasicCareerListWrapperProps) {
	return (
		<BasicCareerListSection $height={height}>
			<TitleWrapper>
				<h3>{title}</h3>
				{addNew && (
					<Button variant='navy' size='small' to={`/write?redirect=${createTo}`}>
						새 {title} +
					</Button>
				)}
			</TitleWrapper>
			{children}
		</BasicCareerListSection>
	);
}

const BasicCareerListSection = styled.section<{ $height: string }>`
	height: ${({ $height }) => $height};
`;

const TitleWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 30px;
	margin-bottom: 30px;
	h3 {
		color: ${({ theme }) => theme.colors.navy};
		font-weight: bold;
		font-size: ${({ theme }) => theme.fontSizes.medium};
	}
`;
