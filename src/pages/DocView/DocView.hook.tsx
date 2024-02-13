import { useModal } from '@hooks/atoms/useModalAtom';
import { networkDetailQuery } from '@queries/network';
import { resumeDeleteMutation, resumeDetailQuery } from '@queries/resume';
import { isEmpty } from '@utils/helpers';
import { useNavigate } from 'react-router-dom';

export default function useDocView(resumeId: string, pathname: string) {
	const navigate = useNavigate();
	const isNetwork = pathname.includes('network');
	const resumeDetail = resumeDetailQuery(resumeId, {
		enabled: !isEmpty(resumeId) && !isNetwork,
	});
	const networkDetail = networkDetailQuery(resumeId, {
		enabled: !isEmpty(resumeId) && isNetwork,
	});
	const { isModal: isDeleteModal, openModal: openDeleteModal } =
		useModal('delete-resume');
	const deleteResumeMutation = resumeDeleteMutation();
	const resumeViewNavItems = [
		{ name: '이력서 수정', onClick: () => navigate(`/write?redirect=re&id=${resumeId}`) },
		{ name: '이력서 삭제', onClick: openDeleteModal },
		{ name: 'pdf로 저장' },
	];
	const deleteResume = () => {
		deleteResumeMutation.mutate(resumeId);
		navigate(`/my-info/docs`);
	};
	return {
		resumeDetail: isNetwork ? networkDetail.data : resumeDetail.data,
		resumeViewNavItems,
		isNetwork,
		deleteModal: {
			isModal: isDeleteModal,
			deleteResume,
		},
	};
}
