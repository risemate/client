import React from 'react';
import { Project as ProjectType } from 'types/Resume';

import BaseSection from './BaseSection';

interface ProjectProps {
	projects: ProjectType[];
	feedback?: string;
}

export default function Project({ projects, feedback }: ProjectProps) {
	return (
		<BaseSection>
			<BaseSection.MainTitle>프로젝트</BaseSection.MainTitle>
			{feedback && (
				<BaseSection.Feedback>
					<h3>프로젝트에 대한 피드백</h3>
					<p>{feedback}</p>
				</BaseSection.Feedback>
			)}
			{projects.map((project, index) => (
				<article key={index}>
					<BaseSection.Title>{project.projectName}</BaseSection.Title>
					<BaseSection.BasicInfo>
						<li>{project.projectStatus}</li>
						<li>
							{project.projectStartedAt} ~ {project.projectEndedAt}
						</li>
						<li>
							<a href={project.projectOrganization} target='_blank' rel='noreferrer'>
								{project.projectOrganization}
							</a>
						</li>
					</BaseSection.BasicInfo>
					<BaseSection.Task>
						<li className='summary'>{project.summaryIntro}</li>
						{project.projectDescription.split('\n').map((task, taskIndex) => (
							<li key={taskIndex}>{task.replace('-', '')}</li>
						))}
					</BaseSection.Task>
					<BaseSection.Link>
						{project.links.map((link, linkIndex) => (
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
