import {
	expertResumeCreateMutation,
	expertResumeQuery,
	expertResumeUpdateutation,
} from '@queries/expert';
import { useForm } from 'react-hook-form';
import { CareerExpert } from 'types/career/careerDocument';
import { defaultCoachReumse } from 'types/career/resumeData';
import { ExpertResumeType } from 'types/coach/expert';

export default function useCoachDocs() {
	const { data: expertResume } = expertResumeQuery();
	const resume = expertResume || defaultCoachReumse;
	const resumeEditMethods = useForm<CareerExpert<ExpertResumeType>>({
		mode: 'onSubmit',
		values: resume,
	});

	const updateResumeMutation = expertResumeUpdateutation();
	const createResumeMutation = expertResumeCreateMutation();

	const { handleSubmit } = resumeEditMethods;
	const submitResume = handleSubmit(data => {
		if (expertResume) {
			updateResumeMutation.mutate(data.career);
		} else {
			createResumeMutation.mutate(data.career);
		}
	});

	return { resumeEditMethods, submitResume };
}
