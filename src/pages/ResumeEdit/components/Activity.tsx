import { useFieldArray, useFormContext } from 'react-hook-form';
import { Activity as ActivityType } from 'types/Resume';
import { defaultActivity } from 'types/Resume/data';

import Input from '@components/input/Input';
import LinkInput from '@components/input/LinkInput';
import MonthInput from '@components/input/MonthInput';
import TextArea from '@components/input/TextArea';
import BaseSection from '@components/wrappers/EditBaseSection';

export default function Activity() {
	const FIELD = 'doc.activities';
	const { register, control, watch } = useFormContext();
	const { fields, prepend, remove, swap } = useFieldArray({
		control,
		name: FIELD,
	});

	return (
		<BaseSection>
			<BaseSection.Title title='대외활동' addData={() => prepend(defaultActivity)} />
			{fields &&
				fields.map((activity, index) => {
					const inputName = (name: keyof ActivityType) => `${FIELD}.${index}.${name}`;
					const edit = {
						index,
						remove: () => remove(index),
						swap,
						length: fields.length,
					};
					return (
						<BaseSection.Content
							key={activity.id}
							title='대외활동'
							gridColumn='3'
							editButton={edit}
						>
							<BaseSection.Item>
								<Input
									label='대외활동명'
									type='text'
									{...register(inputName('activityName'))}
								/>
							</BaseSection.Item>
							<BaseSection.Item>
								<MonthInput label='활동년도' />
							</BaseSection.Item>
							<BaseSection.Item>
								<Input
									label='주관사'
									type='text'
									{...register(inputName('activityOrganization'))}
								/>
							</BaseSection.Item>
							<BaseSection.Item gridColumn='1/4'>
								<TextArea
									label='활동 설명'
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
