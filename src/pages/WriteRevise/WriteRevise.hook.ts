import { useModal } from '@hooks/atoms/useModalAtom';
import {
	resumeCreateMutation,
	resumeDetailQuery,
	resumeUpdateMutation,
} from '@queries/career';
import { isEmpty } from '@utils/helpers';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Career } from 'types/career/careerDocument';
import { Resume as ResumeType } from 'types/career/resume';
import { defaultOrder, defaultResume } from 'types/career/resumeData';

export default function useWriteRevise() {
	const { id: resumeId } = useParams();
	const navigate = useNavigate();
	const resumeDetail = resumeId ? resumeDetailQuery(resumeId).data : defaultResume;
	const resume = resumeDetail;
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
		if (resumeId) {
			updateResumeMutation.mutateAsync({ id: resumeId, body: data.doc }).then(() => {
				toast('이력서가 저장되었습니다.');
				navigate(`/my-info/docs/${resumeId}`);
			});
		} else {
			createResumeMutation.mutateAsync(data.doc).then(({ _id }) => {
				toast('이력서가 저장되었습니다.');
				navigate(`/my-info/docs/${_id}`);
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
