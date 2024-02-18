import { useModal } from '@hooks/atoms/useModalAtom';
import { useSearchParam } from '@hooks/common/useSearchParam';
import {
	coverletterCreateMutation,
	coverletterDetailQuery,
	coverletterUpdateMutation,
} from '@queries/coverletter';
import { isEmpty } from '@utils/helpers';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Career } from 'types/CareerDocument';
import { Resume as ResumeType } from 'types/Resume';
import { defaultResume } from 'types/Resume/data';

export default function useCoverletterWrite() {
	const { queryParam: coverletterId } = useSearchParam<string>('id');
	const navigate = useNavigate();
	const isNewResume = isEmpty(coverletterId);

	const coverletterDetail = coverletterDetailQuery(coverletterId || '', {
		enabled: !isEmpty(coverletterId),
	});
	const coverletter = isNewResume ? defaultResume : coverletterDetail.data;
	const coverletterEditMethods = useForm<Career<ResumeType>>({
		mode: 'onSubmit',
		values: coverletter,
	});

	const { isModal: isUpdateModal, openModal: openUpdateModal } =
		useModal('update-coverletter');
	const { isModal: isCreateModal, openModal: openCreateModal } =
		useModal('create-coverletter');

	const updateResumeMutation = coverletterUpdateMutation();
	const createResumeMutation = coverletterCreateMutation();

	const { handleSubmit, watch } = coverletterEditMethods;
	const getValue = (field: keyof Career<ResumeType>) => watch(field)?.toString();

	const submitResume = () => {
		return handleSubmit(data => {
			if (isNewResume) {
				createResumeMutation
					.mutateAsync(data.doc)
					.then(({ _id }) => navigate(`/my-info/docs/${_id}`));
			} else {
				updateResumeMutation.mutate({ id: coverletterId, body: data.doc });
				navigate(`/my-info/docs/${coverletterId}`);
			}
		});
	};

	const coverletterEditNavItems = [
		{ name: '미리보기' },
		{ name: '저장하기', onClick: isNewResume ? openCreateModal : openUpdateModal },
	];

	return {
		coverletterDetail,
		coverletterEditNavItems,
		coverletterEditMethods,
		submitResume,
		getValue,
		formId: 'coverletter-edit-form',
		createModal: {
			isModal: isCreateModal,
		},
		updateModal: {
			isModal: isUpdateModal,
		},
	};
}
