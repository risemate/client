import {
	Activity,
	Education,
	Profile,
	Project,
	Resume,
	WorkExperience,
} from 'types/Resume';

export const defaultProfile: Profile = {
	name: '',
	email: '',
	phoneNumber: '',
	profileImage: '',
	position: '',
	coverLetter: '',
};

export const defaultWorkExperience: WorkExperience = {
	companyName: '',
	departmentName: '',
	role: '',
	jobType: '선택',
	employmentStatus: '선택',
	workStartedAt: '',
	workEndedAt: '',
	assignedTask: '',
	links: [],
};

export const defaultProject: Project = {
	projectName: '',
	summaryIntro: '',
	projectStartedAt: '',
	projectEndedAt: '',
	projectDescription: '',
	projectStatus: '선택',
	projectOrganization: '',
	links: [],
};

export const defaultEducation: Education = {
	schoolName: '',
	major: '',
	graduationStatus: '선택',
	enrollmentStartedAt: '',
	enrollmentEndedAt: '',
	educationDescription: '',
	links: [],
};

export const defaultActivity: Activity = {
	activityName: '',
	activityYear: undefined,
	activityDescription: '',
	activityOrganization: '',
	links: [],
};

export const defaultResume: Resume = {
	user: { nickname: '', picture: '', _id: '' },
	public: true,
	resumeType: 'BASIC',
	docsTitle: '',
	parentId: null,
	profile: defaultProfile,
	techStack: {
		skills: [],
	},
	workExperiences: [defaultWorkExperience],
	projects: [defaultProject],
	educations: [defaultEducation],
	activities: [defaultActivity],
	links: [],
	hasNewCommentAlarm: false,
	careerYears: 1,
	lookingForJob: true,
	_id: '',
	createdAt: '',
	updatedAt: '',
};

export const mockResume: Resume = {
	_id: '',
	user: { nickname: '', picture: '', _id: '' },
	hasNewCommentAlarm: false,
	docsTitle: '저...세상으로 가는 개발자',
	parentId: '', // BASIC 이력서 한개당 AI는 1개, COACHING은 여러개 일수 있다,  parentId를 공유한다.  BASIC은 parentId를 가질 수 없다.
	resumeType: 'BASIC',
	careerYears: 2, // 신입이면 경력이 0
	lookingForJob: true, //구직 유무
	public: true,
	profile: {
		name: '김서방',
		email: 'gildong@risemate.com',
		phoneNumber: '010-1111-2222',
		profileImage: '',
		position: '프론트엔드',
		coverLetter: '프론트엔드 개발자입니다.',
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
			workStartedAt: '2018-10',
			workEndedAt: '2020-10',
			assignedTask: `- 이력서 작성 등록 기능 개발\n- 알림 확인 여부 기능 개발\n- 결제 기능 개발`,
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
			workStartedAt: '2018-10',
			workEndedAt: '2020-10',
			assignedTask: `- 이력서 작성 등록 기능 개발\n- 알림 확인 여부 기능 개발\n- 결제 기능 개발`,
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
			projectStartedAt: '2023-08',
			projectEndedAt: '2023-10',
			projectDescription:
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
			projectStartedAt: '2023-08',
			projectEndedAt: '2023-10',
			projectDescription:
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
			enrollmentStartedAt: '1914-03',
			enrollmentEndedAt: '1914-12',
			educationDescription: '',
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
			enrollmentStartedAt: '1914-02',
			enrollmentEndedAt: '1910-03',
			educationDescription: '',
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
			activityYear: 2023,
			activityDescription: 'Samsung Software Developer Conference',
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
	createdAt: '',
	updatedAt: '',
};
