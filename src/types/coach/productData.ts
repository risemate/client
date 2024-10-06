import { Profile as ProfileType } from 'types/career/resume';
import {
	CS as InquiryType,
	PackageDetail,
	PackageProviderOption,
	ProductRequest,
	Product as ProductType,
	Review as ReviewType,
} from 'types/coach/product';

export const defaultProviderOptions: PackageProviderOption = {
	name: '',
	description: '',
};

export const defaultPackage: PackageDetail = {
	packageName: 'BASIC',
	price: null,
	packageTitle: '',
	description: '',
	providerOptions: [defaultProviderOptions, defaultProviderOptions],
	_id: '6562b04c461c70f74b259dd5',
};

export const convertToProfile = ({
	productTitle,
	subTitle,
	coverImage,
}: Partial<ProductType>): ProfileType => {
	return {
		name: productTitle || '',
		email: '',
		phoneNumber: '',
		profileImage: coverImage || '',
		position: subTitle || '',
		job: '',
		birthday: '',
		links: [],
	};
};

export type Profile = {
	name: string;
	email: string;
	phoneNumber: string;
	profileImage: string;
	position: string;
	description: string;
};

export const defaultProduct: ProductRequest = {
	_id: '',
	productTitle: '',
	subTitle: '',
	coverImage: '',
	images: [],
	description: '',
	searchKeyword: [],
	careerTypes: ['RESUME'],
	packages: {
		BASIC: defaultPackage,
		ADVANCED: defaultPackage,
		PREMIUM: defaultPackage,
	},
	public: false,
	// defaultPrice: null,
};

// export const mockProduct: ProductType = {
// 	user: {
// 		nickname: 'bonobono',
// 		picture:
// 			'https://lh3.googleusercontent.com/a/ACg8ocJMMK0-56PhKyhKJkdy3UhcAXaNHM7uBFQeA_JAZwwz2w=s96-c',
// 		_id: '650d44a6398de0dbd2eb30bd',
// 	},
// 	// expert: 'ss',
// 	public: false,
// 	productTitle: '프론트엔드 개발자 이력서 첨삭해드립니다.',
// 	subTitle: '취업 성공까지 책입지겠습니다.....',
// 	careerTypes: ['RESUME'],
// 	coverImage: '',
// 	category: {
// 		rootCategory: '이력서',
// 		subCategory: '',
// 		thirdCategory: [],
// 	},
// 	images: [
// 		{
// 			name: 'image1',
// 			url: 'https://...',
// 			_id: '6562b04c461c70f74b259dd2',
// 		},
// 		{
// 			name: 'image1',
// 			url: 'https://...',
// 			_id: '6562b04c461c70f74b259dd3',
// 		},
// 	],
// 	description: '',
// 	reviewCount: 0,
// 	avgReviewScore: 4.9,
// 	csCount: 0,
// 	noAnswerCsCount: 0,
// 	searchKeyword: ['frontend', 'naver', '당근', '면접'],
// 	packages: {
// 		BASIC: {
// 			packageName: 'BASIC',
// 			price: 10000,
// 			packageTitle: '기본적인 가성비 첨삭!',
// 			description: '이력서에 대한 첨삭본과 30분 간의 화상 면접 및 피드백을 제공합니다.',
// 			providerOptions: [
// 				{
// 					name: '화상면접 및 피드백',
// 					description: '',
// 				},
// 				{
// 					name: '이력서 수정본 제공',
// 					description: '',
// 				},
// 			],
// 			_id: '6562b04c461c70f74b259dd5',
// 		},
// 		ADVANCED: null,
// 		PREMIUM: {
// 			packageName: 'BASIC',
// 			price: 30000,
// 			packageTitle: '기본적인 가성비 첨삭!',
// 			description: '이력서에 대한 첨삭본과 30분 간의 화상 면접 및 피드백을 제공합니다.',
// 			providerOptions: [
// 				{
// 					name: '화상면접 및 피드백',
// 					description: '',
// 				},
// 				{
// 					name: '이력서 수정본 제공',
// 					description: '',
// 				},
// 				{
// 					name: '이력서 수정본 제공',
// 					description: '',
// 				},
// 			],
// 			_id: '6562b04c461c70f74b259dd5',
// 		},
// 	},
// 	workExperiences: [
// 		{
// 			companyName: 'Risemate',
// 			departmentName: '기능개발',
// 			role: '프론트엔드 개발자',
// 			jobType: '정규직',
// 			employmentStatus: '재직 중',
// 			startedAt: '2018-10',
// 			endedAt: '2020-10',
// 			description:
// 				'- 이력서 작성 등록 기능 개발 -알림 확인 여부 기능 개발  -결제 기능 개발',
// 			links: [
// 				{
// 					linkTitle: '라메 기술 블로그',
// 					linkUrl: 'https://...',
// 				},
// 			],
// 		},
// 	],
// 	projects: [
// 		{
// 			projectName: '개발자 이력서 첨삭 프로젝트',
// 			summaryIntro: '개발자 이력서 첨삭 프로젝트',
// 			startedAt: '2023-08',
// 			endedAt: '2023-10',
// 			description:
// 				'- 기존에 Server Side Rendering으로 생성하던 페이지에 Static Site Generation을 적용하여 서버 자원 절약 및 응답 속도 개선',
// 			projectStatus: '완료',
// 			projectOrganization: 'https://github.com/risemate/client',
// 			links: [
// 				{
// 					linkTitle: '라메 기술 블로그',
// 					linkUrl: 'https:',
// 				},
// 			],
// 		},
// 		{
// 			projectName: '정적 페이지 생성과 캐싱을 활용한 렌더링 성능 개선',
// 			summaryIntro: '개발자 이력서 첨삭 프로젝트',
// 			startedAt: '2023-08',
// 			endedAt: '2023-10',
// 			description:
// 				'- 기존에 Server Side Rendering으로 생성하던 페이지에 Static Site Generation을 적용하여 서버 자원 절약 및 응답 속도 개선',
// 			projectStatus: '진행 중',
// 			projectOrganization: '',
// 			links: [
// 				{
// 					linkTitle: '라메 기술 블로그',
// 					linkUrl: 'https:',
// 				},
// 				{
// 					linkTitle: '라메 기술 블로그',
// 					linkUrl: 'https://',
// 				},
// 			],
// 		},
// 	],
// 	_id: '6562b04c461c70f74b259dd1',
// 	__v: 0,
// };

export const mockInquiry: InquiryType[] = [
	{
		_id: '656d80faa277ee4836b8fc8',
		user: {
			nickname: 'bonobono',
			picture:
				'https://lh3.googleusercontent.com/a/ACg8ocJMMK0-56PhKyhKJkdy3UhcAXaNHM7uBFQeA_JAZwwz2w=s96-c',
			_id: '650d44a6398de0dbd2eb30bd',
		},
		// product: {
		// 	productTitle: '프론트엔드 개발자 이력서 첨삭해드립니다.',
		// 	subTitle: '취업 성공까지 책입지겠습니다.....',
		// 	coverImage: '취업 성공까지 책입지겠습니다.....',
		// 	expert: {
		// 		nickname: 'aba',
		// 		name: 'aba',
		// 		_id: '650d44a6398de0dbd2eb30bd',
		// 	},
		// 	_id: '6565404a6b54e0c960d92c6a',
		// },
		product: '',
		content: 'cs내용 변경',
		completed: false,
		answer: {
			content: 'cs 답변 등록, 답변 수정',
			expert: {
				nickname: 'aba',
				name: 'aba',
				_id: '650d44a6398de0dbd2eb30bd',
			},
			_id: '656d88f06d1416deae807327',
			createdAt: '2023-12-04T08:08:16.874Z',
			updatedAt: '2023-12-04T08:08:16.874Z',
		},
		__v: 0,
		createdAt: '2023-12-05T02:56:42.996Z',
		updatedAt: '2023-12-05T02:56:42.996Z',
	},
	{
		_id: '656d80faa277ee4836b8fc',
		user: {
			nickname: 'bonobono',
			picture:
				'https://lh3.googleusercontent.com/a/ACg8ocJMMK0-56PhKyhKJkdy3UhcAXaNHM7uBFQeA_JAZwwz2w=s96-c',
			_id: '650d44a6398de0dbd2eb30bd',
		},
		// product: {
		// 	productTitle: '프론트엔드 개발자 이력서 첨삭해드립니다.',
		// 	subTitle: '취업 성공까지 책입지겠습니다.....',
		// 	coverImage: '취업 성공까지 책입지겠습니다.....',
		// 	expert: {
		// 		nickname: 'aba',
		// 		name: 'aba',
		// 		_id: '650d44a6398de0dbd2eb30bd',
		// 	},
		// 	_id: '6565404a6b54e0c960d92c6a',
		// },
		product: '',
		content: 'cs내용 변경',
		completed: false,
		answer: null,
		__v: 0,
		createdAt: '2023-12-05T02:56:42.996Z',
		updatedAt: '2023-12-05T02:56:42.996Z',
	},
];

export const mockReview: ReviewType[] = [
	{
		_id: '656e8ec09f14054fcebd7c6a',
		user: {
			nickname: 'shin kim',
			picture:
				'https://lh3.googleusercontent.com/a/ACg8ocLZT1jIxyzAyNCy4nDmT_T9fcRor38HAOrKADUIf4oyZeA=s96-c',
			_id: '650d43fcaec6caefbadc15c7',
		},
		product: '',
		score: 4.2,
		content:
			'리뷰테스트 업데이트 2 리뷰테스트 업데이트 2 리뷰테스트 업데이트 2 리뷰테스트 업데이트 2 리뷰테스트 업데이트 2 리뷰테스트 업데이트 2 리뷰테스트 업데이트 2 리뷰테스트 업데이트 2 리뷰테스트 업데이트 2 리뷰테스트 업데이트 2 리뷰테스트 업데이트 2 리뷰테스트 업데이트 2 리뷰테스트 업데이트 2 리뷰테스트 업데이트 2 리뷰테스트 업데이트 2',
		answer: {
			content: '리뷰에 대한 답변',
			expert: {
				nickname: 'aba',
				name: 'aba',
				_id: '650d44a6398de0dbd2eb30bd',
			},
			_id: '656e916a9f14054fcebd7c9e',
			createdAt: '2023-12-05T02:56:42.996Z',
			updatedAt: '2023-12-05T02:56:42.996Z',
		},
		createdAt: '2023-12-05T02:56:42.996Z',
		updatedAt: '2023-12-05T02:56:42.996Z',
		__v: 0,
	},
	{
		_id: '656e8ec09f14054fcebd7c6',
		user: {
			nickname: 'shin kim',
			picture: '',
			_id: '650d43fcaec6caefbadc15c7',
		},
		product: '',
		score: 4.2,
		content: '리뷰테스트 업데이트 2',
		answer: null,
		createdAt: '2023-12-05T02:56:42.996Z',
		updatedAt: '2023-12-05T02:56:42.996Z',
		__v: 0,
	},
	{
		_id: '656e8ec09f14054fcebd7c',
		user: {
			nickname: 'shin kim',
			picture: '',
			_id: '650d43fcaec6caefbadc15c7',
		},
		product: '',
		score: 4.2,
		content: '리뷰테스트 업데이트 2',
		answer: null,
		createdAt: '2023-12-05T02:56:42.996Z',
		updatedAt: '2023-12-05T02:56:42.996Z',
		__v: 0,
	},
];
