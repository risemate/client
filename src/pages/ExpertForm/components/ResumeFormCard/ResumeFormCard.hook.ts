import { useController, useFormContext } from 'react-hook-form';
import { Career } from 'types/career/careerDocument';
import { Resume as ResumeType } from 'types/career/resume';

export default function useResumeFormCard(career: Career<ResumeType>) {
	const { control } = useFormContext();
	const { field: resumeIdFields } = useController({
		control,
		name: 'resumeId',
	});
	return {
		onClick: () => resumeIdFields.onChange(career._id),
	};
}
