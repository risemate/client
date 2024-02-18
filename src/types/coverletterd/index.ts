import { Link, Profile } from 'types/Resume';

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
	profile: Profile;

	public: boolean;

	docTitle: string;

	description: string;

	position: string;

	coverLetter: string;

	coverImage: string;

	links: Link[];

	lookingForJob: boolean;
};
