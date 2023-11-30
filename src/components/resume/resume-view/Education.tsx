import React from 'react';
import { Education as EducationType } from 'types/Resume';

import BaseSection from './BaseSection/BaseSection';

interface EducationProps {
	educations: EducationType[];
}

export default function Education({ educations }: EducationProps) {
	return (
		<BaseSection>
			{educations.map((education, index) => (
				<article key={index}>
					<BaseSection.Title>{education.schoolName}</BaseSection.Title>
					<BaseSection.BasicInfo>
						<li>
							{education.major} | {education.graduationStatus}
						</li>
						<li>
							{education.enrollmentStartedAt} ~ {education.enrollmentEndedAt}
						</li>
					</BaseSection.BasicInfo>
				</article>
			))}
		</BaseSection>
	);
}
