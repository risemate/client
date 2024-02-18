import { Career } from 'types/CareerDocument';
import { defaultProfile } from 'types/Resume/data';

import { Coverletter } from '.';

export const defaultCoverletter: Career<Coverletter> = {
	careerType: 'RESUME',
	description: '',
	contactPublic: true,
	childrenDocCount: 3,
	user: { nickname: '', picture: '', _id: '' },
	docType: 'BASIC',
	public: true,
	docTitle: '',
	parentId: null,
	coverImage: '',
	doc: {
		profile: defaultProfile,

		public: false,

		docTitle: '',

		description: '',

		position: '',

		coverLetter: '',

		coverImage: '',

		links: [],

		lookingForJob: false,
	},
	createdAt: '',
	updatedAt: '',
	_id: '',
};
