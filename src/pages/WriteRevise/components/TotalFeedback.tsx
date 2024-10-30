import { useFormContext } from 'react-hook-form';

import TextArea from '@components/input/TextArea';
import EditBaseSection from '@components/resume-edit/EditBaseSection/EditBaseSection';

export default function TotalFeedback() {
	const { register } = useFormContext();
	return (
		<EditBaseSection>
			<EditBaseSection.Title title='전체 피드백' />
			<EditBaseSection.Content>
				<TextArea {...register('doc.feedback.feedback')} />
			</EditBaseSection.Content>
		</EditBaseSection>
	);
}
