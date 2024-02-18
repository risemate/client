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
import { Coverletter as CoverletterType } from 'types/Coverletter';
import { defaultCoverletter } from 'types/Coverletter/data';

export default function useCoverletterWrite() {
	const { queryParam: coverletterId } = useSearchParam<string>('id');
	const navigate = useNavigate();
	const isNewCoverletter = isEmpty(coverletterId);

	const coverletterDetail = coverletterDetailQuery(coverletterId || '', {
		enabled: !isEmpty(coverletterId),
	});
	const coverletter = isNewCoverletter ? defaultCoverletter : coverletterDetail.data;
	const coverletterEditMethods = useForm<Career<CoverletterType>>({
		mode: 'onSubmit',
		values: coverletter,
	});

	const { isModal: isUpdateModal, openModal: openUpdateModal } =
		useModal('update-coverletter');
	const { isModal: isCreateModal, openModal: openCreateModal } =
		useModal('create-coverletter');

	const updateCoverletterMutation = coverletterUpdateMutation();
	const createCoverletterMutation = coverletterCreateMutation();

	const { handleSubmit, watch } = coverletterEditMethods;
	const getValue = (field: keyof Career<CoverletterType>) => watch(field)?.toString();

	const submitCoverletter = () => {
		return handleSubmit(data => {
			if (isNewCoverletter) {
				createCoverletterMutation
					.mutateAsync(data.doc)
					.then(({ _id }) => navigate(`/my-info/docs/${_id}`));
			} else {
				updateCoverletterMutation.mutate({ id: coverletterId, body: data.doc });
				navigate(`/my-info/docs/${coverletterId}`);
			}
		});
	};

	const coverletterEditNavItems = [
		{ name: '미리보기' },
		{ name: '저장하기', onClick: isNewCoverletter ? openCreateModal : openUpdateModal },
	];

	return {
		coverletterDetail,
		coverletterEditNavItems,
		coverletterEditMethods,
		submitCoverletter,
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
