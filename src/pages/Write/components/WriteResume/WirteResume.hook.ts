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
import { toast } from 'react-toastify';
import { Career } from 'types/career/careerDocument';
import { Resume as ResumeType } from 'types/career/resume';
import { defaultOrder, defaultResume } from 'types/career/resumeData';

export default function useResumeWrite() {
	const { queryParam: resumeId } = useSearchParam<string>('id');
	const navigate = useNavigate();
	const isNewResume = isEmpty(resumeId);

	const resumeDetail = resumeDetailQuery(resumeId);
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

	const modalQueryKey = 'save-resume';
	const { closeModal } = useModal(modalQueryKey);

	const submitResume = handleSubmit(data => {
		if (isNewResume) {
			createResumeMutation.mutateAsync(data.doc).then(({ _id }) => {
				toast('이력서가 저장되었습니다.');
				navigate(`/my-info/docs/${_id}`);
			});
		} else {
			updateResumeMutation.mutateAsync({ id: resumeId, body: data.doc }).then(() => {
				toast('이력서가 저장되었습니다.');
				navigate(`/my-info/docs/${resumeId}`);
			});
		}
	});

	const invalidateResume = () => {
		if (!isEmpty(errors)) {
			closeModal();
			toast('필수 필드가 비어 있습니다');
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
		modalQueryKey,
	};
}
