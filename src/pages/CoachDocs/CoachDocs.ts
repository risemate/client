import { useForm } from 'react-hook-form';
import { Resume as ResumeType } from 'types/career/resume';
import { defaultCoachReumse } from 'types/career/resumeData';

export default function useCoachDocs() {
	const resume = defaultCoachReumse;
	const resumeEditMethods = useForm<Partial<ResumeType>>({
		mode: 'onSubmit',
		values: resume,
	});

	const resumeNavItems = [{ name: '이력서 저장' }];
	const {
		handleSubmit,
		watch,
		formState: { errors, isSubmitting },
	} = resumeEditMethods;
	return { resumeEditMethods, resumeNavItems };
}
