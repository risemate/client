import { useModal } from '@hooks/atoms/useModalAtom';
import {
	resumeCreateMutation,
	resumeDeleteMutation,
	resumeDetailQuery,
	resumeUpdateMutation,
} from '@queries/resume';
import { isEmpty } from '@utils/helpers';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Career } from 'types/CareerDocument';
import { Resume as ResumeType } from 'types/Resume';
import { defaultResume } from 'types/Resume/data';

export default function useResumeEdit(resumeId: string) {
	const navigate = useNavigate();
	const isNewResume = resumeId === 'new';
	const resumeDetail = resumeDetailQuery(resumeId, {
		enabled: !isEmpty(resumeId) && resumeId !== 'new',
	});
	const resume = isNewResume ? defaultResume : resumeDetail.data;
	const resumeEditMethods = useForm<Career<ResumeType>>({
		mode: 'onSubmit',
		values: resume,
	});

	const { isModal: isUpdateModal, openModal: openUpdateModal } = useModal();
	const { isModal: isCreateModal, openModal: openCreateModal } = useModal();
	const { isModal: isDeleteModal, openModal: openDeleteModal } = useModal();

	const updateResumeMutation = resumeUpdateMutation();
	const createResumeMutation = resumeCreateMutation();
	const deleteResumeMutation = resumeDeleteMutation();

	const { handleSubmit, watch } = resumeEditMethods;
	const getValue = (field: keyof Career<ResumeType>) => watch(field)?.toString();
	const deleteResume = () => {
		deleteResumeMutation.mutate(resumeId);
		navigate(`/my-info/docs`);
	};
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

	const resumeEditNavItems = isNewResume
		? [{ name: '섹션 추가' }, { name: '저장하기', onClick: openCreateModal }]
		: [
				{ name: '섹션 추가' },
				{ name: '삭제하기', onClick: openDeleteModal },
				{ name: '저장하기', onClick: openUpdateModal },
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
		deleteModal: {
			isModal: isDeleteModal,
			deleteResume,
		},
	};
}
