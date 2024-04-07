import {
	expertResumeCreateMutation,
	expertResumeQuery,
	expertResumeUpdateutation,
} from '@queries/expert';
import { useForm } from 'react-hook-form';
import { Career } from 'types/career/careerDocument';
import { defaultCoachReumse } from 'types/career/resumeData';
import { ExpertResumeType } from 'types/coach/expert';

export default function useCoachDocs() {
	const { data: expertResume } = expertResumeQuery();
	const resume = expertResume || defaultCoachReumse;
	const resumeEditMethods = useForm<Career<ExpertResumeType>>({
		mode: 'onSubmit',
		values: resume,
	});

	const updateResumeMutation = expertResumeUpdateutation();
	const createResumeMutation = expertResumeCreateMutation();

	const resumeNavItems = [{ name: '이력서 저장' }];
	const { handleSubmit } = resumeEditMethods;

	const submitResume = handleSubmit(data => {
		if (expertResume) {
			updateResumeMutation.mutate(data.doc);
		} else {
			createResumeMutation.mutate(data.doc);
		}
	});

	return { resumeEditMethods, resumeNavItems, submitResume };
}
