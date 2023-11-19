import React from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import styled from 'styled-components';
import { ProjectStatus, Project as ProjectType } from 'types/Resume';

import DateInput from '@common/input/DateInput';
import Input from '@common/input/Input';
import LinkInput from '@common/input/LinkInput';
import Select from '@common/input/Select';
import TextArea from '@common/input/TextArea';

import BaseSection from './BaseSection';
import EditButton from './EditButton';

export default function Project() {
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
	const FIELD = 'projects';
	const { register, control, watch } = useFormContext();
	const { fields, prepend, remove, swap } = useFieldArray({
		control,
		name: FIELD,
	});

	return (
		<BaseSection title='프로젝트' addData={() => prepend(defaultProject)}>
			{fields.map((project, index) => {
				const inputName = (name: string) => `${FIELD}.${index}.${name}`;
				return (
					<div key={project.id}>
						<h4>프로젝트</h4>
						<StyledLayout>
							<li>
								<Input label='프로젝트명' {...register(inputName('projectName'))} />
							</li>
							<li>
								<Select
									label='프로젝트 상태'
									options={ProjectStatus}
									{...register(inputName('projectStatus'))}
								/>
							</li>
							<li>
								<DateInput
									label='프로젝트 기간'
									inputName={inputName('project')}
									type='month'
								/>
							</li>
							<li>
								<Input
									label='Organization'
									{...register(inputName('projectOrganization'))}
								/>
							</li>
							<li>
								<Input label='한 줄 소개' {...register(inputName('summaryIntro'))} />
							</li>
							<li>
								<TextArea
									label='프로젝트 설명'
									help
									{...register(inputName('projectDescription'))}
								/>
							</li>
							<li>
								<LinkInput
									links={watch(FIELD)[index].links}
									inputName={inputName('links')}
								/>
							</li>
						</StyledLayout>
						<EditButton
							index={index}
							deleteData={() => remove(index)}
							swap={swap}
							length={fields.length}
						/>
					</div>
				);
			})}
		</BaseSection>
	);
}

const StyledLayout = styled.ul`
	li:nth-last-child(3) {
		grid-column: 2 / 4;
	}
`;
