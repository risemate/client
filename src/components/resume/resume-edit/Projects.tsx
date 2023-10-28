import { IconPlus, IconTrash } from '@icons';
import React from 'react';
import styled from 'styled-components';
import {
	Link as LinkType,
	ProjectStatus,
	Project as ProjectType,
	Resume as ResumeType,
} from 'types/Resume';

import DateInput from '@common/input/DateInput';
import Input from '@common/input/Input';
import LinkInput from '@common/input/LinkInput';
import Select from '@common/input/Select';
import TextArea from '@common/input/TextArea';

import BaseSection from './BaseSection';

interface ProjectProps {
	projects: ProjectType[];
	handleInputChange: (field: keyof ResumeType, value: ProjectType[]) => void;
}

export default function Projects({ projects, handleInputChange }: ProjectProps) {
	const addProject = () => {
		const newProjects: ProjectType[] = [
			{
				projectName: '',
				summaryIntro: '',
				projectStartedAt: '',
				projectEndedAt: '',
				projectDescription: '',
				projectStatus: '완료',
				projectOrganization: '',
				links: [],
			},
			...projects,
		];
		handleInputChange('projects', newProjects);
	};

	const deleteProject = (index: number) => {
		const newProjects = [...projects];
		newProjects.splice(index, 1);
		handleInputChange('projects', newProjects);
	};

	const updateProject = (
		index: number,
		field: keyof ProjectType,
		value: string | LinkType[],
	) => {
		const updatedProject = [...projects];
		updatedProject[index] = {
			...updatedProject[index],
			[field]: value,
		};
		handleInputChange('projects', updatedProject);
	};
	return (
		<BaseSection>
			<div>
				<h3>프로젝트</h3>
				<button type='button' onClick={addProject}>
					<IconPlus />
				</button>
			</div>
			{projects.map((project, index) => (
				<div key={index}>
					<h4>프로젝트</h4>
					<StyledLayout>
						<li>
							<Input
								label='프로젝트명'
								value={project.projectName}
								onChange={event =>
									updateProject(index, 'projectName', event.target.value)
								}
							/>
						</li>
						<li>
							<Select
								label='프로젝트 상태'
								options={ProjectStatus}
								value={project.projectStatus}
								onChange={event =>
									updateProject(index, 'projectStatus', event.target.value)
								}
							/>
						</li>
						<li>
							<DateInput<ProjectType>
								label='프로젝트 기간'
								index={index}
								keyword='project'
								startDate={project.projectStartedAt}
								endDate={project.projectEndedAt}
								updateDateInput={updateProject}
								type='month'
							/>
						</li>
						<li>
							<Input
								label='Organization'
								value={project.projectOrganization}
								onChange={event =>
									updateProject(index, 'projectOrganization', event.target.value)
								}
							/>
						</li>
						<li>
							<Input
								label='한 줄 소개'
								value={project.summaryIntro}
								onChange={event =>
									updateProject(index, 'summaryIntro', event.target.value)
								}
							/>
						</li>
						<li>
							<TextArea
								label='프로젝트 설명'
								value={project.projectDescription}
								onChange={event =>
									updateProject(index, 'projectDescription', event.target.value)
								}
							/>
						</li>
						<li>
							<LinkInput
								links={project.links}
								index={index}
								updateLinks={updateProject}
							/>
						</li>
					</StyledLayout>
					<button type='button' onClick={() => deleteProject(index)}>
						<IconTrash />
					</button>
				</div>
			))}
		</BaseSection>
	);
}

const StyledLayout = styled.ul`
	li:nth-last-child(3) {
		grid-column: 2 / 4;
	}
`;
