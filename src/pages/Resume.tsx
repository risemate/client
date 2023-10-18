import { isEmpty } from '@utils/helpers';
import React from 'react';
import styled from 'styled-components';
import { Resume as ResumeType } from 'types/Resume';

import Empty from '@common/Empty';
import ResumeCard from '@components/resume/resume-home//ResumeCard';
import AddResume from '@components/resume/resume-home/AddResume';

export default function Resume() {
	const resumes: ResumeType[] = [
		{
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
		},
	];

	return (
		<>
			<h2 className='a11y-hidden'>나의 이력서</h2>
			<StyledResume>
				{isEmpty(resumes) && <Empty name='이력서가' moveToLink={() => alert('hello')} />}
				<section>
					<h3>이력서</h3>
					<StyledList>
						<AddResume />
						<ResumeCard />
						<ResumeCard />
						<ResumeCard />
					</StyledList>
				</section>
				<section>
					<h3>자기소개서</h3>
					<StyledList>
						<AddResume />
						<ResumeCard />
						<ResumeCard />
					</StyledList>
				</section>
			</StyledResume>
		</>
	);
}

const StyledResume = styled.div`
	min-height: 500px;
	height: calc(100vh - 300px);
	padding: 50px;
	section {
		display: flex;
		flex-direction: column;
		h3 {
			color: ${({ theme }) => theme.colors.navy};
			font-weight: bold;
			font-size: ${({ theme }) => theme.fontSizes.medium};
			margin-bottom: 30px;
		}
		&:not(:last-child) {
			margin-bottom: 70px;
		}
	}
`;

const StyledList = styled.ul`
	width: 100%;
	display: flex;
	gap: 20px;
	justify-content: start;
	overflow-x: scroll;
	-ms-overflow-style: none;
	scrollbar-width: none;
	&::-webkit-scrollbar {
		display: none;
	}
`;
