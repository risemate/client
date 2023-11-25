import { defaultActivity } from 'models/ResumeData';
import React from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';

import Input from '@common/input/Input';
import LinkInput from '@common/input/LinkInput';
import TextArea from '@common/input/TextArea';

import BaseSection from './BaseSection';
import EditButton from './EditButton';

export default function Activity() {
	const FIELD = 'activities';
	const { register, control, watch } = useFormContext();
	const { fields, prepend, remove, swap } = useFieldArray({
		control,
		name: FIELD,
	});

	return (
		<BaseSection title='대외활동' addData={() => prepend(defaultActivity)}>
			{fields.map((activity, index) => {
				const inputName = (name: string) => `${FIELD}.${index}.${name}`;
				return (
					<div key={activity.id}>
						<h4>대외활동</h4>
						<ul>
							<li>
								<Input
									label='대외활동명'
									type='text'
									{...register(inputName('activityName'))}
								/>
							</li>
							<li>
								<Input
									label='활동년도'
									type='number'
									{...register(inputName('activityYear'))}
								/>
							</li>
							<li>
								<Input
									label='주관사'
									type='text'
									{...register(inputName('activityOrganization'))}
								/>
							</li>
							<li>
								<TextArea
									label='활동 설명'
									help
									{...register(inputName('activityDescription'))}
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
