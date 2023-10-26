import React from 'react';
import styled from 'styled-components';
import { WorkExperience } from 'types/Resume';

interface WorkExperiencesProps {
	workExperiences: WorkExperience[];
}

export default function WorkExperiences({ workExperiences }: WorkExperiencesProps) {
	return (
		<StyledWork>
			<h3>경력</h3>
			{workExperiences.map((work, index) => (
				<div key={index}>
					<h4>{work.companyName}</h4>
					<ul className='list-workinfo'>
						<li>
							{work.departmentName} | {work.role}
						</li>
						<li>
							{work.jobType} | {work.employmentStatus}
						</li>
						<li>
							{work.workStartedAt} ~ {work.workEndedAt}
						</li>
					</ul>
					<div>
						<ul className='list-task'>
							{work.assignedTask.split('-').map((task, taskIndex) => (
								<li key={taskIndex}>{task}</li>
							))}
						</ul>
						<ul className='list-link'>
							{work.links.map((link, linkIndex) => (
								<li key={linkIndex}>
									<a href={link.linkUrl} target='_blank' rel='noopener noreferrer'>
										{link.linkTitle}
									</a>
								</li>
							))}
						</ul>
					</div>
				</div>
			))}
		</StyledWork>
	);
}

const StyledWork = styled.section`
	& > div {
		padding: 20px 5px 0;
		display: grid;
		grid-template-columns: 1fr 3fr;
		&:not(:last-child) {
			border-bottom: 0.5px solid ${({ theme }) => theme.colors.grey};
			padding-bottom: 20px;
		}
		& > div {
			grid-column: 2 / 3;
			grid-row: 1 / 3;
		}
	}
	h4 {
		font-weight: bold;
		font-size: ${({ theme }) => theme.fontSizes.medium};
		grid-column: 1 / 2;
		margin-bottom: 10px;
	}
	.list-workinfo {
		grid-column: 1 / 2;
		color: ${({ theme }) => theme.colors.darkGrey};
		li {
			margin-bottom: 3px;
		}
	}
	.list-task {
		display: flex;
		flex-direction: column;
		gap: 3px;
	}
	a {
		text-decoration: underline;
		color: ${({ theme }) => theme.colors.blue};
	}
`;
