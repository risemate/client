import React from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { EmploymentStatus, JobType } from 'types/Resume';
import { defaultWorkExperience } from 'types/Resume/data';

import DateInput from '@components/input/DateInput';
import Input from '@components/input/Input';
import LinkInput from '@components/input/LinkInput';
import Select from '@components/input/Select';
import TextArea from '@components/input/TextArea';

import BaseSection from '../../../components/wrappers/EditBaseSection';

export default function WorkExperience() {
	const FIELD = 'doc.workExperiences';
	const { register, control, watch } = useFormContext();
	const { fields, prepend, remove, swap } = useFieldArray({
		control,
		name: FIELD,
	});

	return (
		<BaseSection>
			<BaseSection.Title title='경력' addData={() => prepend(defaultWorkExperience)} />
			{fields &&
				fields.map((work, index) => {
					const inputName = (name: string) => `${FIELD}.${index}.${name}`;
					const edit = {
						index,
						remove: () => remove(index),
						swap,
						length: fields.length,
					};
					return (
						<BaseSection.Content
							key={work.id}
							title='경력'
							gridColumn='3'
							editButton={edit}
						>
							<BaseSection.Item>
								<Input
									label='회사명'
									type='text'
									{...register(inputName('companyName'))}
								/>
							</BaseSection.Item>
							<BaseSection.Item>
								<Input label='직책' type='text' {...register(inputName('role'))} />
							</BaseSection.Item>
							<BaseSection.Item>
								<Input
									label='부서명'
									type='text'
									{...register(inputName('departmentName'))}
								/>
							</BaseSection.Item>
							<BaseSection.Item>
								<Select
									label='근무 형태'
									options={JobType}
									{...register(inputName('jobType'))}
								/>
							</BaseSection.Item>
							<BaseSection.Item>
								<Select
									label='재직 여부'
									options={EmploymentStatus}
									{...register(inputName('employmentStatus'))}
								/>
							</BaseSection.Item>
							<BaseSection.Item>
								<DateInput label='재직 기간' inputName={inputName('work')} />
							</BaseSection.Item>
							<BaseSection.Item gridColumn='1/4'>
								<TextArea
									label='담당 업무'
									help
									{...register(inputName('assignedTask'))}
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
