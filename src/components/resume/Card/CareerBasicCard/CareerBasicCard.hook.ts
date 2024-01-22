import { resumeUpdateMutation } from '@queries/resume';
import { ChangeEvent, useState } from 'react';
import { Career } from 'types/CareerDocument';

export default function useCareerBasicCard(career: Career) {
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

	return {
		isPublic,
		isContact,
		updateIsPublic,
		updateIsContact,
	};
}
