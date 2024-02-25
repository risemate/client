import { useModal } from '@hooks/atoms/useModalAtom';
import { useSearchParam } from '@hooks/common/useSearchParam';
import {
	resumeCreateMutation,
	resumeDetailQuery,
	resumeUpdateMutation,
} from '@queries/resume';
import { isEmpty } from '@utils/helpers';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Career } from 'types/CareerDocument';
import { Resume as ResumeType } from 'types/Resume';
import { defaultResume } from 'types/Resume/data';

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

	const { isModal: isUpdateModal, openModal: openUpdateModal } =
		useModal('update-resume');
	const { isModal: isCreateModal, openModal: openCreateModal } =
		useModal('create-resume');

	const updateResumeMutation = resumeUpdateMutation();
	const createResumeMutation = resumeCreateMutation();

	const { handleSubmit, watch } = resumeEditMethods;
	const getValue = (field: keyof Career<ResumeType>) => watch(field)?.toString();

	const submitResume = () => {
		return handleSubmit(data => {
			if (isNewResume) {
				createResumeMutation
					.mutateAsync(data.doc)
					.then(({ _id }) => navigate(`/my-info/docs/${_id}`));
			} else {
				updateResumeMutation.mutate({ id: resumeId, body: data.doc });
				navigate(`/my-info/docs/${resumeId}`);
			}
		});
	};

	const resumeEditNavItems = [
		{ name: '미리보기' },
		{ name: '저장하기', onClick: isNewResume ? openCreateModal : openUpdateModal },
	];

	return {
		resumeDetail,
		resumeEditNavItems,
		resumeEditMethods,
		submitResume,
		getValue,
		formId: 'resume-edit-form',
		createModal: {
			isModal: isCreateModal,
		},
		updateModal: {
			isModal: isUpdateModal,
		},
	};
}
