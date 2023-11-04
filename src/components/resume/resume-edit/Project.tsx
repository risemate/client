import useResumeEdit from '@hooks/useResumeEdit';
import React from 'react';
import styled from 'styled-components';
import {
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
import EditButton from './EditButton';

interface ProjectProps {
	projects: ProjectType[];
	handleInputChange: (field: keyof ResumeType, value: ProjectType[]) => void;
}

export default function Project({ projects, handleInputChange }: ProjectProps) {
	const defaultProject: ProjectType = {
		projectName: '',
		summaryIntro: '',
		projectStartedAt: '',
		projectEndedAt: '',
		projectDescription: '',
		projectStatus: '완료',
		projectOrganization: '',
		links: [],
	};
	const {
		addData: addProject,
		deleteData: deleteProject,
		updateData: updateProject,
		changeIndex,
	} = useResumeEdit<ProjectType>(projects, defaultProject, 'projects', handleInputChange);

	return (
		<BaseSection title='프로젝트' addData={addProject}>
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
					<EditButton
						index={index}
						changeIndex={changeIndex}
						deleteData={deleteProject}
					/>
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
