import { useModal } from '@hooks/atoms/useModalAtom';
import { useSearchParam } from '@hooks/common/useSearchParam';
import {
	resumeCreateMutation,
	resumeDetailQuery,
	resumeUpdateMutation,
} from '@queries/career';
import { isEmpty } from '@utils/helpers';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Career } from 'types/career/careerDocument';
import { Resume as ResumeType } from 'types/career/resume';
import { defaultOrder, defaultResume } from 'types/career/resumeData';

export default function useResumeWrite() {
	const { queryParam: resumeId } = useSearchParam<string>('id');
	const navigate = useNavigate();
	const isNewResume = isEmpty(resumeId);

	const resumeDetail = resumeDetailQuery(resumeId || '', {
		enabled: !isEmpty(resumeId),
	});
	const resume = isNewResume ? defaultResume : resumeDetail.data;
	const resumeEditMethods = useForm<Career<ResumeType>>({
		mode: 'onSubmit',
		values: resume,
	});

	const updateResumeMutation = resumeUpdateMutation();
	const createResumeMutation = resumeCreateMutation();

	const {
		handleSubmit,
		watch,
		formState: { errors, isSubmitting },
	} = resumeEditMethods;
	const getValue = (field: keyof Career<ResumeType>) => watch(field)?.toString();

	const { closeModal } = useModal('save-resume');

	const submitResume = handleSubmit(data => {
		if (isNewResume) {
			createResumeMutation
				.mutateAsync(data.doc)
				.then(({ _id }) => navigate(`/my-info/docs/${_id}`));
		} else {
			updateResumeMutation.mutate({ id: resumeId, body: data.doc });
			navigate(`/my-info/docs/${resumeId}`);
		}
	});

	const invalidateResume = () => {
		if (!isEmpty(errors)) {
			closeModal();
		}
	};

	return {
		resumeDetail,
		resumeEditMethods,
		resumeOrder:
			watch('doc.orderType')?.filter(orderType => orderType.isVisible) || defaultOrder,
		submitResume,
		getValue,
		formId: 'resume-edit-form',
		invalidateResume,
		isSubmitting,
	};
}
