import { Link, OrderType, Profile } from 'types/Resume';

export type ReviseCoverletter = {
	profile: Profile;

	public: boolean;

	docTitle: string;

	description: string;

	position: string;

	feedback: string;

	coverLetter: CoverLetterContent;
	feed_coverLetter: string;

	coverImage: string;

	links: Link[];

	lookingForJob: boolean;
};

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

export type CoverLetterContent = { title: string; content: string; _id: string };
