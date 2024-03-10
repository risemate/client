import React from 'react';
import { useFormContext } from 'react-hook-form';

import TextArea from '@components/input/TextArea';
import EditBaseSection from '@components/resume-edit/EditBaseSection';

export default function CoverLetter() {
	const FIELD = 'doc.coverLetter';
	const { register } = useFormContext();
	return (
		<EditBaseSection>
			<EditBaseSection.Title title='자기소개' />
			<TextArea label='자기소개' help {...register(FIELD)} />
		</EditBaseSection>
	);
}
