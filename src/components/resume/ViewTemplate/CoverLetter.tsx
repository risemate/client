import React from 'react';
import Markdown from 'react-markdown';
import styled from 'styled-components';

import BaseSection from '@components/wrappers/ResumeViewBaseSection';

interface CoverLetterProps {
	coverLetter: string;
}

export default function CoverLetter({ coverLetter }: CoverLetterProps) {
	return (
		<BaseSection>
			<BaseSection.MainTitle>자기소개</BaseSection.MainTitle>
			<MarkdownWrapper>
				<Markdown>{coverLetter}</Markdown>
			</MarkdownWrapper>
		</BaseSection>
	);
}

const MarkdownWrapper = styled.div`
	line-height: 30px;
	work-break: keep-all;
`;
