import { useModal } from '@hooks/atoms/useModalAtom';
import { resumeDetailQuery } from '@queries/career';
import { coachingCareerMutation } from '@queries/coaching';
import { isEmpty } from '@utils/helpers';
import { getDirtyFields } from '@utils/hookform';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Career } from 'types/career/careerDocument';
import { Resume as ResumeType, ReviseResume } from 'types/career/resume';
import { defaultFeedback, defaultOrder, defaultResume } from 'types/career/resumeData';

export default function useWriteRevise() {
	const { id: resumeId } = useParams();
	const navigate = useNavigate();
	const resumeDetail = resumeId ? resumeDetailQuery(resumeId).data : defaultResume;
	const resumeEditMethods = useForm<Career<ReviseResume>>({
		mode: 'onSubmit',
		values: {
			...resumeDetail,
			doc: { ...resumeDetail.doc, feedback: defaultFeedback },
		},
	});

	const careerCoachingMutation = coachingCareerMutation(resumeId || '');

	const {
		handleSubmit,
		watch,
		formState: { errors, isSubmitting, dirtyFields },
	} = resumeEditMethods;
	const getValue = (field: keyof Career<ResumeType>) => watch(field)?.toString();

	const modalQueryKey = 'save-resume';
	const { closeModal } = useModal(modalQueryKey);

	const submitResume = handleSubmit(data => {
		const dirtyValues = getDirtyFields(data, dirtyFields);
		if (!dirtyValues?.doc) {
			toast.info('값을 변경 후에 넣어주세요!');
			return;
		}
		careerCoachingMutation
			.mutateAsync(dirtyValues?.doc)
			.then(() => {
				toast.success('성공적으로 처리되었습니다!');
				navigate('/coach-info/management?tab=INPROGRESS');
			})
			.catch(() => {
				toast.error('처리에 실패했습니다. 다시 시도해 주세요.');
			});
	});

	const invalidateResume = () => {
		if (!isEmpty(errors)) {
			closeModal();
			toast('필수 필드가 비어 있습니다');
		}
	};

	const reviseNavItems = [
		{ name: '이력서 저장' },
		{
			name: '목록으로 돌아가기',
			onClick: () => navigate('/coach-info/management?tab=INPROGRESS'),
		},
	];

	return {
		resumeDetail: resumeDetail.doc,
		resumeEditMethods,
		resumeOrder:
			watch('doc.orderType')?.filter(orderType => orderType.isVisible) || defaultOrder,
		submitResume,
		getValue,
		formId: 'resume-edit-form',
		invalidateResume,
		isSubmitting,
		modalQueryKey,
		reviseNavItems,
	};
}
