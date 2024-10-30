import { useFormContext } from 'react-hook-form';

import TextArea from '@components/input/TextArea';
import Profile from '@components/resume-view/ViewTemplate/Profile';

export default function ProfileRevise() {
	const { watch, register } = useFormContext();
	return (
		<>
			<Profile
				profile={watch('doc.profile')}
				techStack={watch('doc.techStack')}
				description={watch('doc.description')}
			/>
			<TextArea label='자기소개서 피드백' {...register('doc.feedback.introduce')} />
		</>
	);
}
