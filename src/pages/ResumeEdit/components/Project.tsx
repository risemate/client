import { useFieldArray, useFormContext } from 'react-hook-form';
import { ProjectStatus, Project as ProjectType } from 'types/Resume';
import { defaultProject } from 'types/Resume/data';

import Input from '@components/input/Input';
import LinkInput from '@components/input/LinkInput';
import MonthInput from '@components/input/MonthInput';
import Select from '@components/input/Select';
import TextArea from '@components/input/TextArea';

import BaseSection from '../../../components/wrappers/EditBaseSection';

export default function Project() {
	const FIELD = 'doc.projects';
	const { register, control, watch } = useFormContext();
	const { fields, prepend, remove, swap } = useFieldArray({
		control,
		name: FIELD,
	});

	return (
		<BaseSection>
			<BaseSection.Title title='프로젝트' addData={() => prepend(defaultProject)} />
			{fields &&
				fields.map((project, index) => {
					const inputName = (name: keyof ProjectType | 'project') =>
						`${FIELD}.${index}.${name}`;
					const edit = {
						index,
						remove: () => remove(index),
						swap,
						length: fields.length,
					};
					return (
						<BaseSection.Content
							key={project.id}
							title='프로젝트'
							gridColumn='3'
							editButton={edit}
						>
							<BaseSection.Item>
								<Input label='프로젝트명' {...register(inputName('projectName'))} />
							</BaseSection.Item>
							<BaseSection.Item>
								<Select
									label='프로젝트 상태'
									options={ProjectStatus}
									{...register(inputName('projectStatus'))}
								/>
							</BaseSection.Item>
							<BaseSection.Item>
								<MonthInput label='프로젝트 기간' inputName={inputName('project')} />
							</BaseSection.Item>
							<BaseSection.Item>
								<Input
									label='Organization'
									{...register(inputName('projectOrganization'))}
								/>
							</BaseSection.Item>
							<BaseSection.Item gridColumn='2/4'>
								<Input label='한 줄 소개' {...register(inputName('summaryIntro'))} />
							</BaseSection.Item>
							<BaseSection.Item gridColumn='1/4'>
								<TextArea
									label='프로젝트 설명'
									help
									{...register(inputName('description'))}
								/>
							</BaseSection.Item>
							<BaseSection.Item gridColumn='1/4'>
								<LinkInput
									links={watch(FIELD)[index].links}
									inputName={inputName('links')}
								/>
							</BaseSection.Item>
						</BaseSection.Content>
					);
				})}
		</BaseSection>
	);
}
