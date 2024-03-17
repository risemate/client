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
import { Career } from 'types/career/careerDocument';
import { Coverletter as CoverletterType } from 'types/career/coverletter';
import { defaultCoverLetter } from 'types/career/coverletterData';

export default function useCoverletterWrite() {
	const { queryParam: coverletterId } = useSearchParam<string>('id');
	const navigate = useNavigate();
	const isNewCoverletter = isEmpty(coverletterId);

	const coverLetterDetail = coverletterDetailQuery(coverletterId || '', {
		enabled: !isEmpty(coverletterId),
	});
	const coverLetter = isNewCoverletter ? defaultCoverLetter : coverLetterDetail.data;
	const coverLetterEditMethods = useForm<Career<CoverletterType>>({
		mode: 'onSubmit',
		values: coverLetter,
	});

	const { openModal: openSaveModal } = useModal('save-coverletter');

	const updateCoverletterMutation = coverletterUpdateMutation();
	const createCoverletterMutation = coverletterCreateMutation();

	const { handleSubmit, watch } = coverLetterEditMethods;
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

	const coverLetterEditNavItems = [
		{ name: '미리보기' },
		{ name: '저장하기', onClick: openSaveModal },
	];

	return {
		coverLetterDetail,
		coverLetterEditNavItems,
		coverLetterEditMethods,
		submitCoverletter,
		getValue,
		formId: 'coverletter-edit-form',
	};
}
