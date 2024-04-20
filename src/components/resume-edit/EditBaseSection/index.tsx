import { ReactNode } from 'react';
import { css } from 'styled-components';

import WhiteBoxWrapper from '../../base-wrappers/WhiteBoxWrapper';
import BaseSectionContent from './BaseSectionContent';
import BaseSectionContentItem from './BaseSectionContentItem';
import BaseSectionTitle from './BaseSectionTitle';
import SearchInput from './SearchInput';
import SearchList from './SearchList';

interface BaseSectionProps {
	children: ReactNode;
}

const BaseSection = ({ children }: BaseSectionProps) => {
	return (
		<WhiteBoxWrapper type='section' customCss={resumeEditWrapperStyle}>
			{children}
		</WhiteBoxWrapper>
	);
};

const EditBaseSection = Object.assign(BaseSection, {
	Title: BaseSectionTitle,
	Content: BaseSectionContent,
	Item: BaseSectionContentItem,
	SearchList: SearchList,
	SearchInput: SearchInput,
});

const resumeEditWrapperStyle = css`
	padding: 40px;
	margin: 0 auto;

	& > article {
		margin-bottom: 30px;
		padding-bottom: 30px;
		border-bottom: 2px solid ${({ theme }) => theme.colors.grey};
	}

	/* 마지막 article 요소에는 border-bottom 스타일을 적용하지 않습니다. */
	& > article:last-of-type {
		border-bottom: none;
	}
`;

export default EditBaseSection;
