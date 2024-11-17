import { Career, CareerExpert } from 'types/career/careerDocument';
import {
	Activity,
	Certificate,
	Education,
	EmploymentStatus,
	Feedback,
	GraduationStatus,
	JobType,
	OrderType,
	Profile,
	Project,
	ProjectStatus,
	Resume,
	WorkExperience,
} from 'types/career/resume';
import { ExpertResumeType } from 'types/coach/expert';

export const defaultProfile: Profile = {
	name: '',
	email: '',
	phoneNumber: null,
	profileImage: '',
	position: '',
	job: '',
	birthday: null,
	links: [],
};

export const defaultWorkExperience: WorkExperience = {
	companyName: '',
	departmentName: '',
	role: '',
	jobType: JobType[0],
	employmentStatus: EmploymentStatus[0],
	startedAt: null,
	endedAt: null,
	description: '',
	links: [],
};

export const defaultProject: Project = {
	projectName: '',
	summaryIntro: '',
	startedAt: null,
	endedAt: null,
	description: '',
	projectStatus: ProjectStatus[0],
	projectOrganization: '',
	links: [],
};

export const defaultEducation: Education = {
	schoolName: '',
	educationalInstitution: '',
	major: '',
	graduationStatus: GraduationStatus[0],
	startedAt: null,
	endedAt: null,
	description: '',
	links: [],
};

export const defaultActivity: Activity = {
	activityName: '',
	startedAt: null,
	endedAt: null,
	description: '',
	activityOrganization: '',
	links: [],
};

export const defaultCertificate: Certificate = {
	certificateName: '',
	certificateOrganization: '',
	certificatedAt: null,
	certificateGrade: '',
	links: [],
};

export const defaultFeedback: Feedback = {
	feedback: '',
	introduce: '',
	techStack: '',
	workExperiences: '',
	projects: '',
	educations: '',
	activities: '',
	certificates: '',
};

export const defaultOrder: OrderType[] = [
	{
		_id: 1,
		name: 'workExperiences',
		label: '경력',
		isVisible: true,
	},
	{
		_id: 2,
		name: 'projects',
		label: '프로젝트',
		isVisible: true,
	},
	{
		_id: 3,
		name: 'educations',
		label: '교육',
		isVisible: true,
	},
	{
		_id: 4,
		name: 'activities',
		label: '대외활동',
		isVisible: true,
	},
	{
		_id: 5,
		name: 'certificates',
		label: '자격증',
		isVisible: true,
	},
];

export const defaultResume: Career<Resume> = {
	careerType: 'RESUME',
	description: '',
	contactPublic: true,
	childrenDocCount: 3,
	user: { nickname: '', picture: '', _id: '', name: '', email: '', role: 'GENERAL' },
	docType: 'BASIC',
	public: true,
	docTitle: '',
	parentId: null,
	coverImage: '',
	doc: {
		description: '',
		coverImage: '',
		public: true,
		docTitle: '',
		profile: defaultProfile,
		techStack: {
			skills: [],
		},
		workExperiences: [defaultWorkExperience],
		projects: [defaultProject],
		educations: [defaultEducation],
		activities: [defaultActivity],
		certificates: [defaultCertificate],
		links: [],
		careerYears: 1,
		lookingForJob: true,
		orderType: defaultOrder,
	},
	createdAt: '',
	updatedAt: '',
	aiStatus: null,
	childAi: null,
	_id: '',
};

export const defaultCoachReumse: CareerExpert<ExpertResumeType> = {
	careerType: 'RESUME',
	description: '',
	contactPublic: true,
	childrenDocCount: 3,
	user: { nickname: '', picture: '', _id: '', name: '', email: '', role: 'GENERAL' },

	docType: 'BASIC',
	public: true,
	docTitle: '',
	parentId: null,
	coverImage: '',
	career: {
		workExperiences: [defaultWorkExperience],
		projects: [defaultProject],
		educations: [defaultEducation],
		activities: [defaultActivity],
	},
	createdAt: '',
	updatedAt: '',
	aiStatus: null,
	childAi: null,
	_id: '',
};
