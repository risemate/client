import React from 'react';
import { WorkExperience as WorkExperienceType } from 'types/Resume';

import BaseSection from './BaseSection';

interface WorkExperiencesProps {
	workExperiences: WorkExperienceType[];
}

export default function WorkExperience({ workExperiences }: WorkExperiencesProps) {
	return (
		<BaseSection>
			{workExperiences.map((work, index) => (
				<article key={index}>
					<BaseSection.Title>{work.companyName}</BaseSection.Title>
					<BaseSection.BasicInfo>
						<li>
							{work.departmentName} | {work.role}
						</li>
						<li>
							{work.jobType} | {work.employmentStatus}
						</li>
						<li>
							{work.workStartedAt} ~ {work.workEndedAt}
						</li>
					</BaseSection.BasicInfo>
					<BaseSection.Task>
						{work.assignedTask.split('\n').map((task, taskIndex) => (
							<li key={taskIndex}>{task.replace('-', '')}</li>
						))}
					</BaseSection.Task>
					<BaseSection.Link>
						{work.links.map((link, linkIndex) => (
							<li key={linkIndex}>
								<a href={link.linkUrl} target='_blank' rel='noopener noreferrer'>
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
