import React from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import {
	EmploymentStatus,
	JobType,
	WorkExperience as WorkExperienceType,
} from 'types/Resume';

import DateInput from '@common/input/DateInput';
import Input from '@common/input/Input';
import Select from '@common/input/Select';
import TextArea from '@common/input/TextArea';

import LinkInput from '../../common/input/LinkInput';
import BaseSection from './BaseSection';
import EditButton from './EditButton';

export default function WorkExperience() {
	const defaultWorkExperience: WorkExperienceType = {
		companyName: '',
		departmentName: '',
		role: '',
		jobType: '정규직',
		employmentStatus: '재직 중',
		workStartedAt: '',
		workEndedAt: '',
		assignedTask: '',
		links: [],
	};

	const FIELD = 'workExperiences';
	const { register, control, watch } = useFormContext();
	const { fields, prepend, remove, swap } = useFieldArray({
		control,
		name: FIELD,
	});

	return (
		<BaseSection title='경력' addData={() => prepend(defaultWorkExperience)}>
			{fields.map((work, index) => {
				const inputName = (name: string) => `${FIELD}.${index}.${name}`;
				return (
					<div key={work.id}>
						<h4>경력</h4>
						<ul>
							<li>
								<Input
									label='회사명'
									type='text'
									{...register(inputName('companyName'))}
								/>
							</li>
							<li>
								<Input label='직책' type='text' {...register(inputName('role'))} />
							</li>
							<li>
								<Input
									label='부서명'
									type='text'
									{...register(inputName('departmentName'))}
								/>
							</li>
							<li>
								<Select
									label='근무 형태'
									options={JobType}
									{...register(inputName('jobType'))}
								/>
							</li>
							<li>
								<Select
									label='재직 여부'
									options={EmploymentStatus}
									{...register(inputName('employmentStatus'))}
								/>
							</li>
							<li>
								<DateInput label='재직 기간' inputName={inputName('work')} type='month' />
							</li>
							<li>
								<TextArea
									label='담당 업무'
									help
									{...register(inputName('assignedTask'))}
								/>
							</li>
							<li>
								<LinkInput
									links={watch(FIELD)[index].links}
									inputName={inputName('links')}
								/>
							</li>
						</ul>
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
