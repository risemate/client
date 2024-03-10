import { Career } from 'types/CareerDocument';
import { defaultCoverLetterContent } from 'types/Coverletter/data';
import {
	Activity,
	Certificate,
	Education,
	OrderType,
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
	job: '',
	birthday: '',
	links: [],
};

export const defaultWorkExperience: WorkExperience = {
	companyName: '',
	departmentName: '',
	role: '',
	jobType: '선택',
	employmentStatus: '선택',
	startedAt: '',
	endedAt: '',
	description: '',
	links: [],
};

export const defaultProject: Project = {
	projectName: '',
	summaryIntro: '',
	startedAt: '2023-08',
	endedAt: '2023-10',
	description: '',
	projectStatus: '선택',
	projectOrganization: '',
	links: [],
};

export const defaultEducation: Education = {
	schoolName: '',
	educationalInstitution: '',
	major: '',
	graduationStatus: '선택',
	startedAt: '',
	endedAt: '',
	description: '',
	links: [],
};

export const defaultActivity: Activity = {
	activityName: '',
	startedAt: '',
	endedAt: '',
	description: '',
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

export const defaultOrder: OrderType[] = [
	{
		_id: 1,
		name: 'coverLetter',
		label: '자기소개',
		isVisible: true,
	},
	{
		_id: 2,
		name: 'workExperiences',
		label: '경력',
		isVisible: true,
	},
	{
		_id: 3,
		name: 'projects',
		label: '프로젝트',
		isVisible: true,
	},
	{
		_id: 4,
		name: 'educations',
		label: '교육',
		isVisible: true,
	},
	{
		_id: 5,
		name: 'activities',
		label: '대외활동',
		isVisible: true,
	},
	{
		_id: 6,
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
	user: { nickname: '', picture: '', _id: '' },
	docType: 'BASIC',
	public: true,
	docTitle: '',
	parentId: null,
	coverImage: '',
	doc: {
		description: '',
		coverImage: '',
		coverLetter: [defaultCoverLetterContent],
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
	_id: '',
};

export const mockResume: Career<Resume> = {
	_id: '1',
	contactPublic: true,
	childrenDocCount: 3,
	description: '안녕하슈',
	user: { nickname: '', picture: '', _id: '' },
	docType: 'BASIC',
	careerType: 'RESUME',
	docTitle: '저...세상으로 가는 개발자',
	parentId: null,
	public: true,
	coverImage: 'string url, default: null',
	doc: {
		coverImage: '',
		coverLetter: [defaultCoverLetterContent],
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
	createdAt: 'Thu Dec 8 2011 20:14:56 GMT-0600 (CST)',
	updatedAt: 'Thu Dec 8 2011 20:14:56 GMT-0600 (CST)',
};

export const mockResumeAi: Career<ReviseResume> = {
	_id: '1',
	description: '안녕하슈',

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
		description: '프론트엔드 개발자입니다.',
		feed_description: '프론트엔드 개발자입니다.',
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
			birthday: '2011-12-12',
			phoneNumber: '010-1111-2222',
			profileImage: '',
			position: '프론트엔드',
			job: '백수',
			links: [],
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
		feed_workExperience:
			'해당 이력서의 자기소개에 대한 피드백입니다. 해당 이력서의 자기소개에 대한 피드백입니다. 해당 이력서의 자기소개에 대한 피드백입니다. 해당 이력서의 자기소개에 대한 피드백입니다. 해당 이력서의 자기소개에 대한 피드백입니다.',
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
		feed_education:
			'해당 이력서의 자기소개에 대한 피드백입니다. 해당 이력서의 자기소개에 대한 피드백입니다. 해당 이력서의 자기소개에 대한 피드백입니다. 해당 이력서의 자기소개에 대한 피드백입니다. 해당 이력서의 자기소개에 대한 피드백입니다.',

		//대외활동
		activities: [
			{
				activityName: 'Samsung Software Developer Conference',
				startedAt: '1914-03',
				endedAt: '1914-12',
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
	description: '안녕하슈',
	user: { nickname: '', picture: '', _id: '' },
	docType: 'COACHING',
	careerType: 'RESUME',
	docTitle: '저...세상으로 가는 개발자',
	parentId: null,
	public: true,
	coverImage: 'string url, default: null',
	doc: {
		feed_description: '',
		feedback: '',
		coverImage: 'string',
		docTitle: '저...세상으로 가는 개발자',
		careerYears: 2, // 신입이면 경력이 0
		lookingForJob: true, //구직 유무
		coverLetter: '자기소개서 ',
		description: '프론트엔드 개발자입니다. -aws 배포경험 보유.',
		feed_coverLetter:
			'해당 이력서의 자기소개에 대한 피드백입니다. 해당 이력서의 자기소개에 대한 피드백입니다. 해당 이력서의 자기소개에 대한 피드백입니다. 해당 이력서의 자기소개에 대한 피드백입니다. 해당 이력서의 자기소개에 대한 피드백입니다.',
		public: true,
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
		feed_workExperience:
			'해당 이력서의 자기소개에 대한 피드백입니다. 해당 이력서의 자기소개에 대한 피드백입니다. 해당 이력서의 자기소개에 대한 피드백입니다. 해당 이력서의 자기소개에 대한 피드백입니다. 해당 이력서의 자기소개에 대한 피드백입니다.',
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
		feed_education:
			'해당 이력서의 자기소개에 대한 피드백입니다. 해당 이력서의 자기소개에 대한 피드백입니다. 해당 이력서의 자기소개에 대한 피드백입니다. 해당 이력서의 자기소개에 대한 피드백입니다. 해당 이력서의 자기소개에 대한 피드백입니다.',

		//대외활동
		activities: [
			{
				activityName: 'Samsung Software Developer Conference',
				startedAt: '1914-02',
				endedAt: '1910-03',
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
		feed_activity:
			'해당 이력서의 자기소개에 대한 피드백입니다. 해당 이력서의 자기소개에 대한 피드백입니다. 해당 이력서의 자기소개에 대한 피드백입니다. 해당 이력서의 자기소개에 대한 피드백입니다. 해당 이력서의 자기소개에 대한 피드백입니다.',
	},
	createdAt: 'Thu Dec 8 2011 20:14:56 GMT-0600 (CST)',
	updatedAt: 'Thu Dec 8 2011 20:14:56 GMT-0600 (CST)',
};
