import { useModal } from '@hooks/atoms/useModalAtom';
import { resumeDeleteMutation } from '@queries/career';
import { careerDetailQuery } from '@queries/common';
import { isEmpty } from '@utils/helpers';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { Resume } from 'types/career/resume';

export default function useDocView<T = Resume>() {
	const { id = '' } = useParams();
	const { pathname } = useLocation();
	const navigate = useNavigate();
	const isNetwork = pathname.includes('network');
	const { data, isLoading } = careerDetailQuery<T>(id, isNetwork, {
		enabled: !isEmpty(id),
	});

	const { isModal: isDeleteModal, openModal: openDeleteModal } =
		useModal('delete-resume');

	const resumeViewNavItems = [
		{ name: '이력서 수정', onClick: () => navigate(`/write?redirect=re&id=${id}`) },
		{ name: '이력서 삭제', onClick: openDeleteModal },
		{ name: 'PDF 저장' },
	];

	const deleteResume = resumeDeleteMutation();
	const del = () => {
		deleteResume.mutate(id);
		navigate(`/my-info/docs`);
	};

	return {
		isLoading,
		data,
		resumeViewNavItems,
		isNetwork,
		deleteModal: {
			isModal: isDeleteModal,
			del,
		},
	};
}
