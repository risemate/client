import { defaultEducation } from 'models/ResumeData';
import React from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { GraduationStatus } from 'types/Resume';

import DateInput from '@common/input/DateInput';
import Input from '@common/input/Input';
import LinkInput from '@common/input/LinkInput';
import Select from '@common/input/Select';

import BaseSection from './BaseSection';
import EditButton from './EditButton';

export default function Education() {
	const FIELD = 'educations';
	const { register, control, watch } = useFormContext();
	const { fields, prepend, remove, swap } = useFieldArray({
		control,
		name: FIELD,
	});

	return (
		<BaseSection title='교육' addData={() => prepend(defaultEducation)}>
			{fields.map((education, index) => {
				const inputName = (name: string) => `${FIELD}.${index}.${name}`;
				return (
					<div key={education.id}>
						<h4>교육</h4>
						<ul>
							<li>
								<Input
									label='교육 이름'
									type='text'
									{...register(inputName('schoolName'))}
								/>
							</li>
							<li>
								<Input label='전공' type='text' {...register(inputName('major'))} />
							</li>
							<li>
								<Select
									label='상태'
									options={GraduationStatus}
									{...register(inputName('graduationStatus'))}
								/>
							</li>
							<li>
								<DateInput
									label='교육 기간'
									inputName={inputName('enrollment')}
									type='month'
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
