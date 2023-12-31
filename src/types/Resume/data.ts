import { Career } from 'types/CareerDocument';
import {
	Activity,
	Certificate,
	Education,
	Profile,
	Project,
	Resume,
	ReviseResume,
	WorkExperience,
} from 'types/Resume';

export const defaultProfile: Profile = {
	name: '',
	email: '',
	phoneNumber: '',
	profileImage: '',
	position: '',
	description: '',
	job: '',
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

export const defaultCertificate: Certificate = {
	certificateName: '',
	certificateOrganization: '',
	certificatedAt: '',
	certificateGrade: '',
	links: [],
};

export const defaultResume: Career<Resume> = {
	careerType: 'RESUME',
	coverLetter: '안녕하세유',
	contactPublic: true,
	childrenDocCount: 3,
	user: { nickname: '', picture: '', _id: '' },
	docType: 'BASIC',
	public: true,
	docTitle: '',
	parentId: null,
	coverImage: '',
	doc: {
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
	},
	createdAt: '',
	updatedAt: '',
	_id: '',
};

export const mockResume: Career<Resume> = {
	_id: '1',
	contactPublic: true,
	childrenDocCount: 3,
	coverLetter: '안녕하슈',
	user: { nickname: '', picture: '', _id: '' },
	docType: 'BASIC',
	careerType: 'RESUME',
	docTitle: '저...세상으로 가는 개발자',
	parentId: null,
	public: true,
	coverImage: 'string url, default: null',
	doc: {
		coverImage: 'string',
		coverLetter: '간단한 소개내용',
		docTitle: '저...세상으로 가는 개발자',
		careerYears: 2, // 신입이면 경력이 0
		lookingForJob: true, //구직 유무
		public: true,
		profile: {
			name: '김서방',
			email: 'gildong@risemate.com',
			phoneNumber: '010-1111-2222',
			profileImage: '',
			position: '프론트엔드',
			description: '프론트엔드 개발자입니다.',
			job: '백수',
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
		certificates: [],
	},
	createdAt: 'Thu Dec 8 2011 20:14:56 GMT-0600 (CST)',
	updatedAt: 'Thu Dec 8 2011 20:14:56 GMT-0600 (CST)',
};

export const mockResumeAi: Career<ReviseResume> = {
	_id: '1',
	coverLetter: '안녕하슈',

	contactPublic: true,
	childrenDocCount: 3,

	user: { nickname: '', picture: '', _id: '' },
	docType: 'COACHING',
	careerType: 'RESUME',
	docTitle: '저...세상으로 가는 개발자',
	parentId: null,
	public: true,
	coverImage: 'string url, default: null',
	doc: {
		feedback: '',
		coverImage: 'string',
		docTitle: '저...세상으로 가는 개발자',
		careerYears: 2, // 신입이면 경력이 0
		lookingForJob: true, //구직 유무
		coverLetter: '간단소개 내용 \n 간단소개',
		feed_coverLetter:
			'해당 이력서의 자기소개에 대한 피드백입니다. 해당 이력서의 자기소개에 대한 피드백입니다. 해당 이력서의 자기소개에 대한 피드백입니다. 해당 이력서의 자기소개에 대한 피드백입니다. 해당 이력서의 자기소개에 대한 피드백입니다.',
		public: true,
		profile: {
			name: '김서방',
			email: 'gildong@risemate.com',
			phoneNumber: '010-1111-2222',
			profileImage: '',
			position: '프론트엔드',
			description: '프론트엔드 개발자입니다.',
			job: '백수',
		},
		feed_profile:
			'해당 이력서의 자기소개에 대한 피드백입니다. 해당 이력서의 자기소개에 대한 피드백입니다. 해당 이력서의 자기소개에 대한 피드백입니다. 해당 이력서의 자기소개에 대한 피드백입니다. 해당 이력서의 자기소개에 대한 피드백입니다.',
		techStack: {
			skills: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Jest'],
		},
		feed_techStack:
			'해당 이력서의 자기소개에 대한 피드백입니다. 해당 이력서의 자기소개에 대한 피드백입니다. 해당 이력서의 자기소개에 대한 피드백입니다. 해당 이력서의 자기소개에 대한 피드백입니다. 해당 이력서의 자기소개에 대한 피드백입니다.',
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
		feed_workExperience:
			'해당 이력서의 자기소개에 대한 피드백입니다. 해당 이력서의 자기소개에 대한 피드백입니다. 해당 이력서의 자기소개에 대한 피드백입니다. 해당 이력서의 자기소개에 대한 피드백입니다. 해당 이력서의 자기소개에 대한 피드백입니다.',
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
		feed_project:
			'해당 이력서의 자기소개에 대한 피드백입니다. 해당 이력서의 자기소개에 대한 피드백입니다. 해당 이력서의 자기소개에 대한 피드백입니다. 해당 이력서의 자기소개에 대한 피드백입니다. 해당 이력서의 자기소개에 대한 피드백입니다.',

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
		feed_education:
			'해당 이력서의 자기소개에 대한 피드백입니다. 해당 이력서의 자기소개에 대한 피드백입니다. 해당 이력서의 자기소개에 대한 피드백입니다. 해당 이력서의 자기소개에 대한 피드백입니다. 해당 이력서의 자기소개에 대한 피드백입니다.',

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
		feed_activity:
			'해당 이력서의 자기소개에 대한 피드백입니다. 해당 이력서의 자기소개에 대한 피드백입니다. 해당 이력서의 자기소개에 대한 피드백입니다. 해당 이력서의 자기소개에 대한 피드백입니다. 해당 이력서의 자기소개에 대한 피드백입니다.',
	},
	createdAt: 'Thu Dec 8 2011 20:14:56 GMT-0600 (CST)',
	updatedAt: 'Thu Dec 8 2011 20:14:56 GMT-0600 (CST)',
};
export const mockResumeCoaching: Career<ReviseResume> = {
	_id: '1',
	contactPublic: true,
	childrenDocCount: 3,
	coverLetter: '안녕하슈',
	user: { nickname: '', picture: '', _id: '' },
	docType: 'COACHING',
	careerType: 'RESUME',
	docTitle: '저...세상으로 가는 개발자',
	parentId: null,
	public: true,
	coverImage: 'string url, default: null',
	doc: {
		feedback: '',
		coverImage: 'string',
		docTitle: '저...세상으로 가는 개발자',
		careerYears: 2, // 신입이면 경력이 0
		lookingForJob: true, //구직 유무
		coverLetter: '간단소개 내용 \n 간단소개',
		feed_coverLetter:
			'해당 이력서의 자기소개에 대한 피드백입니다. 해당 이력서의 자기소개에 대한 피드백입니다. 해당 이력서의 자기소개에 대한 피드백입니다. 해당 이력서의 자기소개에 대한 피드백입니다. 해당 이력서의 자기소개에 대한 피드백입니다.',
		public: true,
		profile: {
			name: '김서방',
			email: 'gildong@risemate.com',
			phoneNumber: '010-1111-2222',
			profileImage: '',
			position: '프론트엔드',
			description: '프론트엔드 개발자입니다.',
			job: '백수',
		},
		feed_profile:
			'해당 이력서의 자기소개에 대한 피드백입니다. 해당 이력서의 자기소개에 대한 피드백입니다. 해당 이력서의 자기소개에 대한 피드백입니다. 해당 이력서의 자기소개에 대한 피드백입니다. 해당 이력서의 자기소개에 대한 피드백입니다.',
		techStack: {
			skills: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Jest'],
		},
		feed_techStack:
			'해당 이력서의 자기소개에 대한 피드백입니다. 해당 이력서의 자기소개에 대한 피드백입니다. 해당 이력서의 자기소개에 대한 피드백입니다. 해당 이력서의 자기소개에 대한 피드백입니다. 해당 이력서의 자기소개에 대한 피드백입니다.',
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
		feed_workExperience:
			'해당 이력서의 자기소개에 대한 피드백입니다. 해당 이력서의 자기소개에 대한 피드백입니다. 해당 이력서의 자기소개에 대한 피드백입니다. 해당 이력서의 자기소개에 대한 피드백입니다. 해당 이력서의 자기소개에 대한 피드백입니다.',
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
		feed_project:
			'해당 이력서의 자기소개에 대한 피드백입니다. 해당 이력서의 자기소개에 대한 피드백입니다. 해당 이력서의 자기소개에 대한 피드백입니다. 해당 이력서의 자기소개에 대한 피드백입니다. 해당 이력서의 자기소개에 대한 피드백입니다.',

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
		feed_education:
			'해당 이력서의 자기소개에 대한 피드백입니다. 해당 이력서의 자기소개에 대한 피드백입니다. 해당 이력서의 자기소개에 대한 피드백입니다. 해당 이력서의 자기소개에 대한 피드백입니다. 해당 이력서의 자기소개에 대한 피드백입니다.',

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
		feed_activity:
			'해당 이력서의 자기소개에 대한 피드백입니다. 해당 이력서의 자기소개에 대한 피드백입니다. 해당 이력서의 자기소개에 대한 피드백입니다. 해당 이력서의 자기소개에 대한 피드백입니다. 해당 이력서의 자기소개에 대한 피드백입니다.',
	},
	createdAt: 'Thu Dec 8 2011 20:14:56 GMT-0600 (CST)',
	updatedAt: 'Thu Dec 8 2011 20:14:56 GMT-0600 (CST)',
};
