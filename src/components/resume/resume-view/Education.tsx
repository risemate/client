import { isEmpty } from '@utils/helpers';
import React from 'react';
import { Education as EducationType } from 'types/Resume';

import BaseSection from './BaseSection';

interface EducationProps {
	educations: EducationType[];
	feedback?: string;
}

export default function Education({ educations, feedback }: EducationProps) {
	return (
		<BaseSection>
			<BaseSection.MainTitle>교육</BaseSection.MainTitle>
			{feedback && (
				<BaseSection.Feedback>
					<h3>교육에 대한 피드백</h3>
					<p>{feedback}</p>
				</BaseSection.Feedback>
			)}
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
					{!isEmpty(education.educationDescription) && (
						<BaseSection.Task>
							{education.educationDescription.split('\n').map((task, taskIndex) => (
								<li key={taskIndex}>{task.replace('-', '')}</li>
							))}
						</BaseSection.Task>
					)}
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
