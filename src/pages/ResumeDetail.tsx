import React, { useState } from 'react';
import { Resume as ResumeType } from 'types/Resume';

import ResumeEdit from '@components/resume/resume-edit/ResumeEdit';
import ResumeView from '@components/resume/resume-view/ResumeView';

export default function ResumeDetail() {
	const [mode, setMode] = useState<'view' | 'edit'>('view');
	const changeMode = (newMode: 'view' | 'edit') => {
		setMode(newMode);
	};
	// eslint-disable-next-line
	const defaultResume: ResumeType = {
		_id: 0,
		resumeTitle: '',
		parentId: '',
		resumeType: 'BASIC',
		name: '',
		job: '',
		postion: '',
		profileImage: '',
		coverLetter: '',
		techStack: {
			skills: [],
		},
		workExperiences: [],
		projects: [],
		portfolio: {
			links: [],
			attachFiles: [],
		},
		educations: [],
		activities: [],
		careerStatus: false,
		entryLevel: false,
		careerYears: 0,
		lookingForJob: true,
		public: true,
	};
	const resume: ResumeType = {
		_id: 289193,
		resumeTitle: '저...세상으로 가는 개발자',
		parentId: '', // BASIC 이력서 한개당 AI는 1개, COACHING은 여러개 일수 있다,  parentId를 공유한다.  BASIC은 parentId를 가질 수 없다.
		resumeType: 'BASIC',
		name: '김서방',
		job: '프론트엔드 개발자',
		postion: '프론트엔드',
		profileImage: '',
		coverLetter: '프론트엔드 개발자입니다.',
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
				assignedTask: `- 이력서 작성 등록 기능 개발 -알림 확인 여부 기능 개발  -결제 기능 개발`,
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
				assignedTask: `- 이력서 작성 등록 기능 개발 -알림 확인 여부 기능 개발  -결제 기능 개발`,
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
				projectStatus: 'DONE',
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
				projectStatus: 'ATTEND',
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
		portfolio: {
			//기타 추가 링크들
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
			attachFiles: [],
		},
		educations: [
			{
				schoolName: 'NHN NEXT',
				major: 'WEB UI',
				graduationStatus: 'ATTEND',
				enrollmentStartedAt: '1914-03',
				enrollmentEndedAt: '1914-12',
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
				graduationStatus: 'GRADUATED',
				enrollmentStartedAt: '1914-02',
				enrollmentEndedAt: '1910-03',
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

		careerStatus: false, // 재직 유무
		entryLevel: false, //신입 여부
		careerYears: 2, // 신입이면 경력이 0
		lookingForJob: true, //구직 유무
		public: true,
	};

	return (
		<>
			{mode === 'view' && <ResumeView resume={resume} changeMode={changeMode} />}
			{mode === 'edit' && <ResumeEdit initialResume={resume} changeMode={changeMode} />}
		</>
	);
}
