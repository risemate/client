import React from 'react';
import { WorkExperience as WorkExperienceType } from 'types/Resume';

interface WorkExperiencesProps {
	workExperience: WorkExperienceType;
}

export default function WorkExperience({ workExperience }: WorkExperiencesProps) {
	return (
		<article>
			<h4>{workExperience.companyName}</h4>
			<ul className='list-workinfo'>
				<li>
					{workExperience.departmentName} | {workExperience.role}
				</li>
				<li>
					{workExperience.jobType} | {workExperience.employmentStatus}
				</li>
				<li>
					{workExperience.workStartedAt} ~ {workExperience.workEndedAt}
				</li>
			</ul>
			<div>
				<ul className='list-task'>
					{workExperience.assignedTask.split('\n').map((task, taskIndex) => (
						<li key={taskIndex}>{task.replace('-', '')}</li>
					))}
				</ul>
				<ul className='list-link'>
					{workExperience.links.map((link, linkIndex) => (
						<li key={linkIndex}>
							<a href={link.linkUrl} target='_blank' rel='noopener noreferrer'>
								🔗 {link.linkTitle}
							</a>
						</li>
					))}
				</ul>
			</div>
		</article>
	);
}
