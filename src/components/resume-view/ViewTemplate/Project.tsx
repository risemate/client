import { Project as ProjectType } from 'types/Resume';

import BaseSection from '@components/resume-view/ResumeViewBaseSection';

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
					<h4>프로젝트에 대한 피드백</h4>
					<p>{feedback}</p>
				</BaseSection.Feedback>
			)}
			{projects.map((project, index) => (
				<article key={index}>
					<BaseSection.Title>{project.projectName}</BaseSection.Title>
					<BaseSection.BasicInfo>
						<li>{project.projectStatus}</li>
						<li>
							{project.startedAt} ~ {project.endedAt}
						</li>
						<li>
							<a
								href={project.projectOrganization || undefined}
								target='_blank'
								rel='noreferrer'
							>
								{project.projectOrganization}
							</a>
						</li>
					</BaseSection.BasicInfo>
					<BaseSection.Description description={project.description} />
					<BaseSection.Link links={project.links} />
				</article>
			))}
		</BaseSection>
	);
}
