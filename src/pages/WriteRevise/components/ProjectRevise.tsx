import { useFormContext } from 'react-hook-form';
import { Project as ProjectType } from 'types/career/resume';

import TextArea from '@components/input/TextArea';
import ResumeViewBaseSection from '@components/resume-view/ResumeViewBaseSection/ResumeViewBaseSection';

import ReviseTemplate from './ReviseTemplate';

export default function ProjectRevise() {
	const FIELD = 'doc.projects';
	const { watch, register } = useFormContext();

	const projects: ProjectType[] = watch(FIELD);
	if (projects.length === 0) {
		return null;
	}
	return (
		<ReviseTemplate title='프로젝트'>
			{projects.map((project, index) => (
				<article key={index}>
					<ResumeViewBaseSection.Title>{project.projectName}</ResumeViewBaseSection.Title>
					<ResumeViewBaseSection.BasicInfo>
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
					</ResumeViewBaseSection.BasicInfo>
					<ResumeViewBaseSection.Description description={project.description} />
					<ResumeViewBaseSection.Link links={project.links} />
					<TextArea
						label={`${project.projectName} 설명 첨삭`}
						help
						{...register(`${FIELD}.${index}.description`)}
					/>
				</article>
			))}
		</ReviseTemplate>
	);
}
