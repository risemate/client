import { Career } from 'types/CareerDocument';

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
		public: false,

		docTitle: '',

		description: '',

		contents: [],

		coverImage: '',

		links: [],

		orderType: [],
		lookingForJob: false,
	},
	createdAt: '',
	updatedAt: '',
	_id: '',
};
