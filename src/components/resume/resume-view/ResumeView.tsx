import React from 'react';
import styled from 'styled-components';
import { Resume } from 'types/Resume';

import DefaultImage from '@common/DefaultImage';
import ResumeNav from '@common/ResumeNav';

import BaseSection from './BaseSection';
import Project from './Project';
import WorkExperience from './WorkExperience';

interface ResumeViewProps {
	resume: Resume;
	changeMode: (newMode: 'view' | 'edit') => void;
}

export default function ResumeView({ resume, changeMode }: ResumeViewProps) {
	const resumeNavItems = [
		{ name: '이력서 수정', onClick: () => changeMode('edit') },
		{ name: 'AI 첨삭 받기', onClick: () => alert('hi') },
		{ name: '전문가 찾아보기', onClick: () => alert('hi') },
	];
	return (
		<StyledResume>
			<StyledBasicSection>
				<DefaultImage variant='navy' size='large' />
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
			<BaseSection>
				<h3>경력</h3>
				{resume.workExperiences.map((work, index) => (
					<WorkExperience key={index} workExperience={work} />
				))}
			</BaseSection>
			<BaseSection>
				<h3>프로젝트</h3>
				{resume.projects.map((project, index) => (
					<Project key={index} project={project} />
				))}
			</BaseSection>

			<ResumeNav resumeNavItems={resumeNavItems} />
		</StyledResume>
	);
}

const StyledResume = styled.div`
	min-height: 500px;
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
