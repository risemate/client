export type CareerType = 'RESUME' | 'COVERLETTER';
export const CareerTypeList: CareerType[] = ['RESUME', 'COVERLETTER'];

export type DocType = 'BASIC' | 'AI' | 'COACHING';
export const DocTypeList: DocType[] = ['BASIC', 'AI', 'COACHING'];

export type ReviseResume = {
	feedback: string;
	coverImage?: string;
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
	coverImage?: string;
	coverLetter?: string;
	public: boolean;
	docTitle: string;
	profile: Profile;
	techStack: {
		skills: string[];
	};
	workExperiences: WorkExperience[];
	projects: Project[];
	educations: Education[];
	activities: Activity[];
	certificates: Certificate[];
	links: Link[];
	careerYears: number;
	lookingForJob: boolean;
};

export type Profile = {
	name: string;
	email: string;
	phoneNumber: string;
	profileImage: string;
	position: string;
	description: string;
	job: string;
	birthday: string;
	links: Link[];
};

export type Link = {
	linkTitle: string;
	linkUrl: string;
};

export const JobType = ['선택', '정규직', '계약직', '인턴'];
type JobType = typeof JobType[number];

export const EmploymentStatus = ['선택', '재직 중', '퇴직'];
type EmploymentStatus = typeof EmploymentStatus[number];

export type WorkExperience = {
	companyName: string;
	departmentName: string;
	role: string;
	jobType: JobType;
	employmentStatus: EmploymentStatus;
	startedAt: string; // 날짜 형식으로 변경 필요
	endedAt: string; // 날짜 형식으로 변경 필요
	description: string;
	links: Link[];
};

export const ProjectStatus = [
	'선택',
	'완료',
	'진행 중',
	'리팩토링 중',
	'완료되지 않음',
];
type ProjectStatus = typeof ProjectStatus[number];
export type Project = {
	projectName: string;
	summaryIntro: string; // 오타 수정: summaryIntro -> projectsummaryIntro
	startedAt: string; // 날짜 형식으로 변경 필요
	endedAt: string; // 날짜 형식으로 변경 필요
	description: string;
	projectStatus: ProjectStatus;
	projectOrganization: string; // 또는 다른 유형 추가
	links: Link[];
};

export const GraduationStatus = [
	'선택',
	'학기 중',
	'졸업',
	'편입',
	'중도 퇴학',
];
type GraduationStatus = typeof GraduationStatus[number];
export type Education = {
	schoolName: string;
	major: string;
	graduationStatus: GraduationStatus;
	startedAt: string; // 날짜 형식으로 변경 필요
	endedAt: string; // 날짜 형식으로 변경 필요
	description: string;
	educationalInstitution: string;
	links: Link[];
};

export type Activity = {
	activityName: string;
	startedAt: string;
	endedAt: string;
	description: string;
	activityOrganization: string;
	links: Link[];
};

export type Certificate = {
	certificateName: string;
	certificateOrganization: string;
	certificatedAt: string;
	certificateGrade: string;
	links: Link[];
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
