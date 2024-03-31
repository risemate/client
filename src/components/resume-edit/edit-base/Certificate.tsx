import React from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { Certificate } from 'types/career/resume';
import { defaultCertificate } from 'types/career/resumeData';

import DateInput from '@components/input/DateInput';
import Input from '@components/input/Input';
import LinkInput from '@components/input/LinkInput';
import BaseSection from '@components/resume-edit/EditBaseSection';

interface CertificateProps {
	field?: string;
}

export default function Certificates({ field }: CertificateProps) {
	const FIELD = field ? `${field}.certificates` : 'certificates';
	const { register, control, watch } = useFormContext();
	const { fields, prepend, remove, swap } = useFieldArray({
		control,
		name: FIELD,
	});
	return (
		<BaseSection>
			<BaseSection.Title title='자격증' addData={() => prepend(defaultCertificate)} />
			{fields &&
				fields.map((certificate, index) => {
					const inputName = (name: keyof Certificate) => `${FIELD}.${index}.${name}`;
					const edit = {
						index,
						remove: () => remove(index),
						swap,
						length: fields.length,
					};
					return (
						<BaseSection.Content
							key={certificate.id}
							title='자격증'
							gridColumn='2'
							editButton={edit}
						>
							<BaseSection.Item>
								<Input
									label='자격증 이름'
									type='text'
									{...register(inputName('certificateName'))}
								/>
							</BaseSection.Item>
							<BaseSection.Item>
								<Input
									label='주관사'
									type='text'
									{...register(inputName('certificateOrganization'))}
								/>
							</BaseSection.Item>
							<BaseSection.Item>
								<DateInput label='획득 날짜' inputName='certificateAt' mode='date' />
							</BaseSection.Item>
							<BaseSection.Item>
								<Input
									label='성적'
									type='text'
									{...register(inputName('certificateGrade'))}
								/>
							</BaseSection.Item>
							<BaseSection.Item gridColumn='1/3'>
								<LinkInput
									links={watch(inputName('links'))}
									inputName={inputName('links')}
								/>
							</BaseSection.Item>
						</BaseSection.Content>
					);
				})}
		</BaseSection>
	);
}
