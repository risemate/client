import React from 'react';
import { WorkExperience as WorkExperienceType } from 'types/Resume';

import BaseSection from './BaseSection';

interface WorkExperiencesProps {
	workExperiences: WorkExperienceType[];
}

export default function WorkExperience({ workExperiences }: WorkExperiencesProps) {
	return (
		<BaseSection>
			<h3>경력</h3>
			{workExperiences.map((work, index) => (
				<article key={index}>
					<h4>{work.companyName}</h4>
					<ul className='list-workinfo'>
						<li>
							{work.departmentName} | {work.role}
						</li>
						<li>
							{work.jobType} | {work.employmentStatus}
						</li>
						<li>
							{work.workStartedAt} ~ {work.workEndedAt}
						</li>
					</ul>
					<div>
						<ul className='list-task'>
							{work.assignedTask.split('\n').map((task, taskIndex) => (
								<li key={taskIndex}>{task.replace('-', '')}</li>
							))}
						</ul>
						<ul className='list-link'>
							{work.links.map((link, linkIndex) => (
								<li key={linkIndex}>
									<a href={link.linkUrl} target='_blank' rel='noopener noreferrer'>
										🔗 {link.linkTitle}
									</a>
								</li>
							))}
						</ul>
					</div>
				</article>
			))}
		</BaseSection>
	);
}
