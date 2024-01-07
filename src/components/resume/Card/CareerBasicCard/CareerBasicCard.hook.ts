// import { resumeUpdateMutation } from "@queries/resume";
import { ChangeEvent, useState } from 'react';
import { Career } from 'types/CareerDocument';

export default function useCareerBasicCard(career: Career) {
	const [isPublic, setIsPublic] = useState(career.public);
	const [isContact, setIsContact] = useState(career.contactPublic);
	// const updateResumeMutation = resumeUpdateMutation();
	const updateIsPublic = (event: ChangeEvent<HTMLInputElement>) => {
		// const data = updateResumeMutation.mutateAsync({id: career._id, body: })
		setIsPublic(event.target.checked);
	};
	const updateIsContact = (event: ChangeEvent<HTMLInputElement>) => {
		setIsContact(event.target.checked);
	};

	return {
		isPublic,
		isContact,
		updateIsPublic,
		updateIsContact,
	};
}
