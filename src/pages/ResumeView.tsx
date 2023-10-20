import React from 'react';
import styled from 'styled-components';
import { Resume as ResumeType } from 'types/Resume';

import DefaultImage from '@common/DefaultImage';
import ResumeNav from '@common/ResumeNav';
import Projects from '@components/resume/resume-view/Projects';
import WorkExperiences from '@components/resume/resume-view/WorkExperiences';

export default function ResumeView() {
	const resumeNavItems = [
		{ name: '이력서 수정', onClick: () => alert('hi') },
		{ name: 'AI 첨삭 받기', onClick: () => alert('hi') },
		{ name: '전문가 찾아보기', onClick: () => alert('hi') },
	];
	const resumes: ResumeType = {
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
				employmentStatus: 'EMPLOYMENT',
				workStartedAt: '2018-10',
				workEndedAt: '2020-10',
				assignedTask: `- 이력서 작성 등록 기능 개발 -알림 확인 여부 기능 개발  -결제 기능 개발`,
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
				companyName: 'Risemate',
				departmentName: '기능개발',
				role: '프론트엔드 개발자',
				jobType: '정규직',
				employmentStatus: 'RESIGNATION',
				workStartedAt: '2018-10',
				workEndedAt: '2020-10',
				assignedTask: `- 이력서 작성 등록 기능 개발 -알림 확인 여부 기능 개발  -결제 기능 개발`,
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
						linkUrl: 'https:',
					},
					{
						linkTitle: '라메 기술 블로그',
						linkUrl: 'https://',
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
						linkUrl: 'https:',
					},
					{
						linkTitle: '라메 기술 블로그',
						linkUrl: 'https://',
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
	};
	return (
		<StyledResume>
			<StyledBasicSection>
				<DefaultImage variant='navy' size='medium' />
				<h2>
					홍길동
					<br />
					<span>성장하는 프론트엔드 개발자</span>
				</h2>
				<ul className='list-contact'>
					<li>
						phone-number: <span>010-0000-0000</span>
					</li>
					<li>
						GitHub: <span>github.com/hongildong</span>
					</li>
					<li>
						email: <span>hongildon@gmail.com</span>
					</li>
					<li>
						Blog: <span>velog.com/@hongildong</span>
					</li>
				</ul>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia velit,
					reiciendis quo sed recusandae maxime quas animi quam quibusdam est temporibus
					fuga maiores. Vel temporibus corporis, maxime impedit eos ut!
				</p>
				<ul className='list-skills'>
					<li>JavaScript</li>
					<li>TypeScript</li>
					<li>React</li>
				</ul>
			</StyledBasicSection>
			<WorkExperiences workExperiences={resumes.workExperiences} />
			<Projects projects={resumes.projects} />
			<ResumeNav resumeNavItems={resumeNavItems} />
		</StyledResume>
	);
}

const StyledResume = styled.div`
	min-height: 500px;
	height: calc(100vh - 300px);
	padding: 50px;
	section {
		padding-bottom: 30px;
		&:not(:last-child) {
			border-bottom: 2px solid ${({ theme }) => theme.colors.navy};
		}
		h3 {
			font-weight: bold;
			color: ${({ theme }) => theme.colors.navy};
			font-size: ${({ theme }) => theme.fontSizes.medium};
			padding: 20px 0px;
		}
	}
`;

const StyledBasicSection = styled.section`
	display: grid;
	grid-template-columns: 210px calc(100% - 210px);
	gap: 25px;
	.img,
	img {
		grid-column: 1 / 2;
		grid-row: 1 / 3;
	}
	h2 {
		font-size: ${({ theme }) => theme.fontSizes.large};
		font-weight: bold;
		grid-column: 2 / 3;
		grid-row: 1 / 2;
		line-height: 40px;
		span {
			font-size: ${({ theme }) => theme.fontSizes.medium};
			font-weight: normal;
		}
	}
	ul.list-contact {
		grid-row: 2 / 3;
		display: grid;
		grid-template-columns: 1fr 1fr;
		li {
			font-weight: bold;
			span {
				font-weight: 400;
			}
		}
	}
	p {
		grid-column: 1 / 3;
		line-height: 28px;
	}
	ul.list-skills {
		width: fit-content;
		display: flex;
		gap: 10px;
		grid-column: 1 / 3;
		li {
			width: fit-content;
			background: ${({ theme }) => theme.colors.grey};
			border-radius: 50px;
			padding: 8px 15px;
			color: white;
			display: flex;
			align-items: center;
		}
	}
`;
