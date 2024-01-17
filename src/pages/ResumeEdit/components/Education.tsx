import { useFieldArray, useFormContext } from 'react-hook-form';
import { Education as EducationType, GraduationStatus } from 'types/Resume';
import { defaultEducation } from 'types/Resume/data';

import Input from '@components/input/Input';
import LinkInput from '@components/input/LinkInput';
import MonthInput from '@components/input/MonthInput';
import Select from '@components/input/Select';
import TextArea from '@components/input/TextArea';
import BaseSection from '@components/wrappers/EditBaseSection';

export default function Education() {
	const FIELD = 'doc.educations';
	const { register, control, watch } = useFormContext();
	const { fields, prepend, remove, swap } = useFieldArray({
		control,
		name: FIELD,
	});

	return (
		<BaseSection>
			<BaseSection.Title title='교육' addData={() => prepend(defaultEducation)} />
			{fields &&
				fields.map((education, index) => {
					const inputName = (name: keyof EducationType | 'enrollment') =>
						`${FIELD}.${index}.${name}`;
					const edit = {
						index,
						remove: () => remove(index),
						swap,
						length: fields.length,
					};
					return (
						<BaseSection.Content
							key={education.id}
							title='교육'
							gridColumn='2'
							editButton={edit}
						>
							<BaseSection.Item>
								<Input
									label='교육 이름'
									type='text'
									{...register(inputName('schoolName'))}
								/>
							</BaseSection.Item>
							<BaseSection.Item>
								<Input label='전공' type='text' {...register(inputName('major'))} />
							</BaseSection.Item>
							<BaseSection.Item>
								<Select
									label='상태'
									options={GraduationStatus}
									{...register(inputName('graduationStatus'))}
								/>
							</BaseSection.Item>
							<BaseSection.Item>
								<MonthInput label='교육 기간' />
							</BaseSection.Item>
							<BaseSection.Item gridColumn='1/3'>
								<TextArea
									label='교육 설명'
									help
									{...register(inputName('description'))}
								/>
							</BaseSection.Item>
							<BaseSection.Item gridColumn='1/3'>
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
