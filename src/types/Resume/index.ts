import { User } from '../User';

export type Resume = {
	user: User;
	public: boolean;
	resumeType: 'BASIC' | 'AI' | 'COACHING';
	docsTitle: string;
	parentId: string | null;
	profile: Profile;
	techStack: {
		skills: string[];
	};
	workExperiences: WorkExperience[];
	projects: Project[];
	educations: Education[];
	activities: Activity[];
	links: Link[];
	hasNewCommentAlarm: boolean;
	careerYears: number;
	lookingForJob: boolean;
	_id: string;
	createdAt: string;
	updatedAt: string;
};

export type Profile = {
	name: string;
	email: string;
	phoneNumber: string;
	profileImage: string;
	position: string;
	coverLetter: string;
};

export type Link = {
	linkTitle: string;
	linkUrl: string;
};

type JobType = '정규직' | '계약직' | '인턴' | '선택';
export const JobType: JobType[] = ['선택', '정규직', '계약직', '인턴'];

type EmploymentStatus = '재직 중' | '퇴직' | '선택';
export const EmploymentStatus: EmploymentStatus[] = ['선택', '재직 중', '퇴직'];

export type WorkExperience = {
	companyName: string;
	departmentName: string;
	role: string;
	jobType: JobType;
	employmentStatus: EmploymentStatus;
	workStartedAt: string; // 날짜 형식으로 변경 필요
	workEndedAt: string; // 날짜 형식으로 변경 필요
	assignedTask: string;
	links: Link[];
};

type ProjectStatus = '완료' | '진행 중' | '리팩토링 중' | '완료되지 않음' | '선택';
export const ProjectStatus: ProjectStatus[] = [
	'선택',
	'완료',
	'진행 중',
	'리팩토링 중',
	'완료되지 않음',
];
export type Project = {
	projectName: string;
	summaryIntro: string; // 오타 수정: summaryintro -> projectSummaryIntro
	projectStartedAt: string; // 날짜 형식으로 변경 필요
	projectEndedAt: string; // 날짜 형식으로 변경 필요
	projectDescription: string;
	projectStatus: ProjectStatus;
	projectOrganization: string; // 또는 다른 유형 추가
	links: Link[];
};

type GraduationStatus = '학기 중' | '졸업' | '편입' | '중도 퇴학' | '선택';
export const GraduationStatus: GraduationStatus[] = [
	'선택',
	'학기 중',
	'졸업',
	'편입',
	'중도 퇴학',
];
export type Education = {
	schoolName: string;
	major: string;
	graduationStatus: GraduationStatus;
	enrollmentStartedAt: string; // 날짜 형식으로 변경 필요
	enrollmentEndedAt: string; // 날짜 형식으로 변경 필요
	educationDescription: string;
	links: Link[];
};

export type Activity = {
	activityName: string;
	activityYear: number | undefined;
	activityDescription: string;
	activityOrganization: string;
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