import styled from 'styled-components';
import { CoverLetterContent } from 'types/Coverletter';

import BaseSection from '@components/wrappers/ResumeViewBaseSection';

interface CoverLetterProps {
	coverLetter: CoverLetterContent[];
}

export default function CoverLetter({ coverLetter }: CoverLetterProps) {
	return (
		<BaseSection>
			<BaseSection.MainTitle>자기소개</BaseSection.MainTitle>
			{coverLetter.map((section, index) => {
				return (
					<div key={index}>
						<h3>{section.title}</h3>
						<p>{section.content}</p>
					</div>
				);
			})}
		</BaseSection>
	);
}

const MarkdownWrapper = styled.div`
	line-height: 30px;
	work-break: keep-all;
`;
