import React from 'react';
import { Project as ProjectType } from 'types/Resume';

interface ProjectProps {
	project: ProjectType;
}

export default function Project({ project }: ProjectProps) {
	return (
		<article>
			<h4>{project.projectName}</h4>
			<ul>
				<li>{project.projectStatus}</li>
				<li>
					{project.projectStartedAt} ~ {project.projectEndedAt}
				</li>
				<li>
					<a href={project.projectOrganization} target='_blank' rel='noreferrer'>
						{project.projectOrganization}
					</a>
				</li>
			</ul>
			<div>
				<ul className='list-task'>
					<li className='summary'>{project.summaryIntro}</li>
					{project.projectDescription.split('\n').map((task, taskIndex) => (
						<li key={taskIndex}>{task.replace('-', '')}</li>
					))}
				</ul>
				<ul className='list-link'>
					{project.links.map((link, linkIndex) => (
						<li key={linkIndex}>
							<a href={link.linkUrl} target='_black'>
								🔗 {link.linkTitle}
							</a>
						</li>
					))}
				</ul>
			</div>
		</article>
	);
}
