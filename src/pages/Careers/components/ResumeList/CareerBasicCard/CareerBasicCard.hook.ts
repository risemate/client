import { useModal } from '@hooks/atoms/useModalAtom';
import { resumeDeleteMutation, resumeUpdateMutation } from '@queries/career';
import { ChangeEvent, useState } from 'react';
import { Career } from 'types/career/careerDocument';
import { Resume } from 'types/career/resume';

export default function useCareerBasicCard(
	career: Career<Resume>,
	selectedId?: string | null,
	updateSelectedId?: (id: string | null) => void,
) {
	const updateResumeMutation = resumeUpdateMutation();
	const [isPublic, setIsPublic] = useState(career.public);
	const [isContact, setIsContact] = useState(career.contactPublic);
	const updateIsPublic = async (event: ChangeEvent<HTMLInputElement>) => {
		const response = await updateResumeMutation.mutateAsync({
			id: career._id,
			body: {
				public: event.target.checked,
			},
		});
		setIsPublic(response.public);
	};
	const updateIsContact = async (event: ChangeEvent<HTMLInputElement>) => {
		const response = await updateResumeMutation.mutateAsync({
			id: career._id,
			body: {
				public: event.target.checked,
			},
		});
		setIsContact(response.public);
	};

	const deleteQueryKey = 'delete-resume';
	const { isModal: isDeleteModal, openModal: openDeleteModal } = useModal(deleteQueryKey);
	const deleteResumeMutation = resumeDeleteMutation();
	const deleteResume = () => {
		selectedId && deleteResumeMutation.mutate(selectedId);
	};
	const handleButtonClick = () => {
		if (updateSelectedId) {
			updateSelectedId(career._id);
		}
	};

	return {
		isPublic,
		isContact,
		updateIsPublic,
		updateIsContact,
		deleteModal: {
			isModal: isDeleteModal,
			open: () => {
				openDeleteModal();
				handleButtonClick();
			},
			queryKey: deleteQueryKey,
		},
		deleteResume,
	};
}
