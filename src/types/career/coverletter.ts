import { Link, OrderType, Profile } from 'types/career/resume';

export type CoverLetterContent = { title: string; content: string; _id: string };

export type Coverletter = {
	public: boolean;
	docTitle: string;
	description: string;
	contents: CoverLetterContent[];
	coverImage: string;
	links: Link[];
	lookingForJob: boolean;
	orderType: OrderType[];
};

export type ReviseCoverletter = Coverletter & {
	profile: Profile;
	feedback: string;
	feed_coverLetter: string;
};
