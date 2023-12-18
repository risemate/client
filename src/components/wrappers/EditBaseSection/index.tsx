import React, { ReactNode } from 'react';
import { css } from 'styled-components';

import WhiteBoxWrapper from '../WhiteBoxWrapper';
import BaseSectionContent from './BaseSectionContent';
import BaseSectionContentItem from './BaseSectionContentItem';
import BaseSectionTitle from './BaseSectionTitle';

interface BaseSectionProps {
	children: ReactNode;
}

const BaseSectionMain = ({ children }: BaseSectionProps) => {
	return (
		<WhiteBoxWrapper type='section' customCss={resumeEditWrapperStyle}>
			{children}
		</WhiteBoxWrapper>
	);
};

const BaseSection = Object.assign(BaseSectionMain, {
	Title: BaseSectionTitle,
	Content: BaseSectionContent,
	Item: BaseSectionContentItem,
});

const resumeEditWrapperStyle = css`
	padding: 40px;
	margin: 0 auto;
	& > article:not(:last-child) {
		margin-bottom: 30px;
		padding-bottom: 30px;
		border-bottom: 2px solid ${({ theme }) => theme.colors.grey};
	}
`;

export default BaseSection;
