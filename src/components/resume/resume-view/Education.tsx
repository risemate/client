import React from 'react';
import { Education as EducationType } from 'types/Resume';

import BaseSection from './BaseSection';

interface EducationProps {
	educations: EducationType[];
}

export default function Education({ educations }: EducationProps) {
	return (
		<BaseSection>
			<h3>교육</h3>
			{educations.map((education, index) => (
				<article key={index}>
					<h4>{education.schoolName}</h4>
				</article>
			))}
		</BaseSection>
	);
}
