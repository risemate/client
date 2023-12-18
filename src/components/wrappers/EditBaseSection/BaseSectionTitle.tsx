import { IconPlus } from '@icons';
import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface TitleProps {
	title: string;
	addData?: () => void;
	children?: ReactNode;
}

export default function BaseSectionTitle({ title, addData, children }: TitleProps) {
	return (
		<SectionTitleWrapper>
			<h3>{title}</h3>
			{addData && (
				<button type='button' onClick={addData}>
					<IconPlus />
				</button>
			)}
			{children}
		</SectionTitleWrapper>
	);
}

const SectionTitleWrapper = styled.div`
	border-bottom: 2px solid ${({ theme }) => theme.colors.navy};
	display: flex;
	gap: 30px;
	justify-content: space-between;
	align-items: end;
	padding-bottom: 10px;
	margin-bottom: 20px;
	h3 {
		color: ${({ theme }) => theme.colors.navy};
		font-weight: bold;
		font-size: ${({ theme }) => theme.fontSizes.medium};
	}
	button {
		svg {
			color: ${({ theme }) => theme.colors.navy};
		}
	}
`;
