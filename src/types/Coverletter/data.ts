import { Career } from 'types/CareerDocument';

import { Coverletter } from '.';

export const defaultCoverLetterContent = { title: '', content: '', _id: '' };
export const defaultCoverLetter: Career<Coverletter> = {
	careerType: 'COVERLETTER',
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

		contents: [defaultCoverLetterContent],

		coverImage: '',

		links: [],

		orderType: [],
		lookingForJob: false,
	},
	createdAt: '',
	updatedAt: '',
	_id: '',
};
