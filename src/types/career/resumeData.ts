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

export const mockResume: Career<Resume> = {
	_id: '1',
	contactPublic: true,
	childrenDocCount: 3,
	description: '안녕하슈',
	user: { nickname: '', picture: '', _id: '', name: '', email: '', role: 'GENERAL' },
	docType: 'BASIC',
	careerType: 'RESUME',
	docTitle: '저...세상으로 가는 개발자',
	parentId: null,
	public: true,
	coverImage: 'string url, default: null',
	doc: {
		coverImage: '',
		docTitle: '저...세상으로 가는 개발자',
		careerYears: 2, // 신입이면 경력이 0
		lookingForJob: true, //구직 유무
		public: true,
		description: '프론트엔드 개발자입니다.',
		profile: {
			name: '김서방',
			email: 'gildong@risemate.com',
			phoneNumber: '010-1111-2222',
			profileImage: '',
			position: '프론트엔드',
			job: '백수',
			birthday: '1999-05-25',
			links: [],
		},
		techStack: {
			skills: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Jest'],
		},
		workExperiences: [
			{
				companyName: 'Risemate',
				departmentName: '기능개발',
				role: '프론트엔드 개발자',
				jobType: '정규직',
				employmentStatus: '재직 중',
				startedAt: '2018-10',
				endedAt: '2020-10',
				description: `- 이력서 작성 등록 기능 개발\n- 알림 확인 여부 기능 개발\n- 결제 기능 개발`,
				links: [
					{
						linkTitle: '라메 기술 블로그',
						linkUrl: 'https://velog.com',
					},
					{
						linkTitle: '라메 기술 블로그',
						linkUrl: 'https://velog.com',
					},
				],
			},
			{
				companyName: 'Risemate',
				departmentName: '기능개발',
				role: '프론트엔드 개발자',
				jobType: '정규직',
				employmentStatus: '퇴직',
				startedAt: '2018-10',
				endedAt: '2020-10',
				description: `- 이력서 작성 등록 기능 개발\n- 알림 확인 여부 기능 개발\n- 결제 기능 개발`,
				links: [
					{
						linkTitle: '라메 기술 블로그',
						linkUrl: 'https://velog.com',
					},
					{
						linkTitle: '라메 기술 블로그',
						linkUrl: 'https://velog.com',
					},
				],
			},
		],
		projects: [
			{
				projectName: '개발자 이력서 첨삭 프로젝트',
				summaryIntro: '개발자 이력서 첨삭 프로젝트',
				startedAt: '2023-08',
				endedAt: '2023-10',
				description:
					'- 기존에 Server Side Rendering으로 생성하던 페이지에 Static Site Generation을 적용하여 서버 자원 절약 및 응답 속도 개선',
				projectStatus: '완료',
				projectOrganization: 'https://github.com/risemate/client',
				links: [
					{
						linkTitle: '라메 기술 블로그',
						linkUrl: 'https://velog.com',
					},
					{
						linkTitle: '라메 기술 블로그',
						linkUrl: 'https://velog.com',
					},
				],
			},
			{
				projectName: '정적 페이지 생성과 캐싱을 활용한 렌더링 성능 개선',
				summaryIntro: '개발자 이력서 첨삭 프로젝트',
				startedAt: '2023-08',
				endedAt: '2023-10',
				description:
					'- 기존에 Server Side Rendering으로 생성하던 페이지에 Static Site Generation을 적용하여 서버 자원 절약 및 응답 속도 개선',
				projectStatus: '완료',
				projectOrganization: '',
				links: [
					{
						linkTitle: '라메 기술 블로그',
						linkUrl: 'https://velog.com',
					},
					{
						linkTitle: '라메 기술 블로그',
						linkUrl: 'https://velog.com',
					},
				],
			},
		],
		links: [
			{
				linkTitle: '라메 기술 블로그',
				linkUrl: 'https:',
			},
			{
				linkTitle: '라메 기술 블로그',
				linkUrl: 'https://',
			},
		],
		educations: [
			{
				schoolName: 'NHN NEXT',
				major: 'WEB UI',
				graduationStatus: '학기 중',
				startedAt: '1914-03',
				endedAt: '1914-12',
				description: '',
				educationalInstitution: '',
				links: [
					{
						linkTitle: '라메 기술 블로그',
						linkUrl: 'https:',
					},
					{
						linkTitle: '라메 기술 블로그',
						linkUrl: 'https://',
					},
				],
			},
			{
				schoolName: '경희대학교',
				major: '기계공학과',
				graduationStatus: '졸업',
				startedAt: '1914-02',
				endedAt: '1910-03',
				description: '',
				educationalInstitution: '',
				links: [
					{
						linkTitle: '라메 기술 블로그',
						linkUrl: 'https:',
					},
					{
						linkTitle: '라메 기술 블로그',
						linkUrl: 'https://',
					},
				],
			},
		],
		//대외활동
		activities: [
			{
				activityName: 'Samsung Software Developer Conference',
				startedAt: '0000-00-00',
				endedAt: '0000-00-00',
				description: 'Samsung Software Developer Conference',
				activityOrganization: 'Samsung', //주관사
				links: [
					{
						linkTitle: '라메 기술 블로그',
						linkUrl: 'https:',
					},
					{
						linkTitle: '라메 기술 블로그',
						linkUrl: 'https://',
					},
				],
			},
		],
		certificates: [],
	},
	aiStatus: null,
	childAi: null,
	createdAt: 'Thu Dec 8 2011 20:14:56 GMT-0600 (CST)',
	updatedAt: 'Thu Dec 8 2011 20:14:56 GMT-0600 (CST)',
};
