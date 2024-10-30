import { useFormContext } from 'react-hook-form';
import { Project as ProjectType } from 'types/career/resume';

import ToggleContent from '@common/ToggleContent';
import TextArea from '@components/input/TextArea';
import ResumeViewBaseSection from '@components/resume-view/ResumeViewBaseSection/ResumeViewBaseSection';

import ReviseTemplate from './ReviseTemplate';

interface ProjectReviseProps {
	projects: ProjectType[] | null;
}

export default function ProjectRevise({ projects }: ProjectReviseProps) {
	const FIELD = 'doc.projects';
	const { register } = useFormContext();

	if (!projects || projects.length === 0) {
		return null;
	}
	return (
		<ReviseTemplate title='프로젝트' field='projects'>
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
					<ToggleContent openText='상세 보기' closeText='상세 접기'>
						<ResumeViewBaseSection.Description description={project.description} />
						<ResumeViewBaseSection.Link links={project.links} />
					</ToggleContent>
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
