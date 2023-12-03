import React from 'react';
import { Education as EducationType } from 'types/Resume';

import BaseSection from './BaseSection';
import { isEmpty } from '@utils/helpers';

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
						{!isEmpty(education.educationDescription) && 
						<BaseSection.Task>
							{education.educationDescription.split('\n').map((task, taskIndex) => (
								<li key={taskIndex}>{task.replace('-', '')}</li>
							))}
						</BaseSection.Task>}
						<BaseSection.Link>
							{education.links.map((link, linkIndex) => (
								<li key={linkIndex}>
									<a href={link.linkUrl} target='_black'>
										🔗 {link.linkTitle}
									</a>
								</li>
							))}
						</BaseSection.Link>
				</article>
			))}
		</BaseSection>
	);
}
