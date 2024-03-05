import { Link, OrderType, Profile } from 'types/Resume';

export type ReviseCoverletter = {
	profile: Profile;

	public: boolean;

	docTitle: string;

	description: string;

	position: string;

	feedback: string;

	coverLetter: string;
	feed_coverLetter: string;

	coverImage: string;

	links: Link[];

	lookingForJob: boolean;
};

export type Coverletter = {
	public: boolean;

	docTitle: string;

	description: string;

	contents: CoverLetterSection[];

	coverImage: string;

	links: Link[];

	lookingForJob: boolean;

	orderType: OrderType[];
};

type CoverLetterSection = { title: string; content: string };
