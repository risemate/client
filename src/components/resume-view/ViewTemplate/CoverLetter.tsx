import { CoverLetterContent } from 'types/career/coverletter';

import BaseSection from '@components/resume-view/ResumeViewBaseSection/ResumeViewBaseSection';

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
