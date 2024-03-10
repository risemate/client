import { CoverLetterContent } from 'types/Coverletter';

export const CareerType = ['RESUME', 'COVERLETTER'] as const;
export type CareerType = (typeof CareerType)[number];

export const DocType = ['BASIC', 'AI', 'COACHING'] as const;
export type DocType = (typeof DocType)[number];

export type ReviseResume = {
	feedback: string;
	coverImage?: string;
	description?: string;
	feed_description: string;
	coverLetter?: string;
	feed_coverLetter: string;
	public: boolean;
	docTitle: string;
	profile: Profile;
	feed_profile: string;
	techStack: {
		skills: string[];
	};
	feed_techStack: string;
	workExperiences: WorkExperience[];
	feed_workExperience: string;
	projects: Project[];
	feed_project: string;
	educations: Education[];
	feed_education: string;
	activities: Activity[];
	feed_activity: string;
	links: Link[];
	careerYears: number;
	lookingForJob: boolean;
};

export type Resume = {
	coverImage: string | null;
	coverLetter: [CoverLetterContent];
	description: string | null;
	public: boolean;
	docTitle: string;
	profile: Profile;
	techStack: {
		skills: string[] | null;
	};
	workExperiences: WorkExperience[] | null;
	projects: Project[] | null;
	educations: Education[] | null;
	activities: Activity[] | null;
	certificates: Certificate[] | null;
	links: Link[] | null;
	careerYears: number;
	lookingForJob: boolean;
	orderType?: OrderType[];
};

export type Profile = {
	name: string;
	email: string;
	birthday: string | null;
	phoneNumber: string | null;
	profileImage: string | null;
	position: string | null;
	job: string | null;
	links: Link[] | null;
};

export type Link = {
	linkTitle: string;
	linkUrl: string;
};

export const JobType = ['선택', '정규직', '계약직', '인턴'] as const;
export type JobType = (typeof JobType)[number];

export const EmploymentStatus = ['선택', '재직 중', '퇴직'] as const;
export type EmploymentStatus = (typeof EmploymentStatus)[number];

export type WorkExperience = {
	companyName: string | null;
	departmentName: string | null;
	role: string | null;
	jobType: JobType;
	employmentStatus: EmploymentStatus;
	startedAt: string | null;
	endedAt: string | null;
	description: string | null;
	links: Link[] | null;
};

export const ProjectStatus = [
	'선택',
	'완료',
	'진행 중',
	'리팩토링 중',
	'완료되지 않음',
] as const;
export type ProjectStatus = (typeof ProjectStatus)[number];
export type Project = {
	projectName: string | null;
	summaryIntro: string | null;
	startedAt: string | null; // 날짜 형식으로 변경 필요
	endedAt: string | null;
	description: string | null;
	projectStatus: ProjectStatus;
	projectOrganization: string | null;
	links: Link[] | null;
};

export const GraduationStatus = ['선택', '학기 중', '졸업', '편입', '중도 퇴학'] as const;
export type GraduationStatus = (typeof GraduationStatus)[number];
export type Education = {
	schoolName: string | null;
	major: string | null;
	graduationStatus: GraduationStatus;
	startedAt: string | null;
	endedAt: string | null;
	description: string | null;
	educationalInstitution: string | null;
	links: Link[] | null;
};

export type Activity = {
	activityName: string | null;
	startedAt: string | null;
	endedAt: string | null;
	description: string | null;
	activityOrganization: string | null;
	links: Link[] | null;
};

export type Certificate = {
	certificateName: string | null;
	certificateOrganization: string | null;
	certificatedAt: string | null;
	certificateGrade: string | null;
	links: Link[] | null;
};

export type Feedback = {
	notice: string;
	total: string;
	coverLetter: string;
	workExperience: string;
	project: string;
	education: string;
	activity: string;
};

export type OrderType = {
	name: string;
	label: string;
	isVisible: boolean;
	_id: number;
};
