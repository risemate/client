import { useSearchParam } from '@hooks/common/useSearchParam';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { CoverLetterContent } from 'types/Coverletter';
import { defaultCoverLetterContent } from 'types/Coverletter/data';

import Input from '@components/input/Input';
import TextArea from '@components/input/TextArea';
import BaseSection from '@components/resume-edit/EditBaseSection';

export default function CoverLetterContents() {
	const { queryParam: careerType } = useSearchParam('redirect');
	const FIELD = careerType === 're' ? 'doc.coverLetter' : 'doc.contents';
	const { register, control } = useFormContext();
	const { fields, prepend, remove, swap } = useFieldArray({
		control,
		name: FIELD,
	});
	return (
		<BaseSection>
			<BaseSection.Title
				title='자기소개'
				addData={() => prepend(defaultCoverLetterContent)}
			/>
			{fields &&
				fields.map((cl, index) => {
					const inputName = (name: keyof CoverLetterContent) =>
						`${FIELD}.${index}.${name}`;

					const edit = {
						index,
						remove: () => remove(index),
						swap,
						length: fields.length,
					};
					return (
						<BaseSection.Content
							key={cl.id}
							title={'섹션' + index}
							gridColumn='1'
							editButton={edit}
						>
							<Input placeholder='제목' {...register(inputName('title'))} />
							<TextArea help {...register(inputName('content'))} />
						</BaseSection.Content>
					);
				})}
		</BaseSection>
	);
}
