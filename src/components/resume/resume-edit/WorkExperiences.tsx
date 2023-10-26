import { IconPlus, IconTrash } from '@icons';
import React from 'react';
import styled from 'styled-components';
import {
	EmploymentStatus,
	JobType,
	Link as LinkType,
	Resume as ResumeType,
	WorkExperience as WorkExperienceType,
} from 'types/Resume';

import DateInput from '@common/input/DateInput';
import Input from '@common/input/Input';
import Select from '@common/input/Select';
import TextArea from '@common/input/TextArea';

import LinkInput from './LinkInput';

interface WorkExperienceProps {
	workExperiences: WorkExperienceType[];
	handleInputChange: (field: keyof ResumeType, value: WorkExperienceType[]) => void;
}

export default function WorkExperiences({
	workExperiences,
	handleInputChange,
}: WorkExperienceProps) {
	const addWorkExperience = () => {
		const newWorkExperiences: WorkExperienceType[] = [
			{
				companyName: '',
				departmentName: '',
				role: '',
				jobType: '정규직',
				employmentStatus: '재직 중',
				workStartedAt: '',
				workEndedAt: '',
				assignedTask: '',
				links: [],
			},
			...workExperiences,
		];
		handleInputChange('workExperiences', newWorkExperiences);
	};

	const deleteWorkExperience = (index: number) => {
		const newWorkExperiences = [...workExperiences];
		newWorkExperiences.splice(index, 1);
		handleInputChange('workExperiences', newWorkExperiences);
	};

	const updateWorkExperience = (
		index: number,
		field: keyof WorkExperienceType,
		value: string | LinkType[],
	) => {
		const updatedWorkExperience = [...workExperiences];
		updatedWorkExperience[index] = {
			...updatedWorkExperience[index],
			[field]: value,
		};
		handleInputChange('workExperiences', updatedWorkExperience);
	};

	return (
		<StyledWork>
			<div className='heading'>
				<h3>경력</h3>
				<button type='button' onClick={addWorkExperience}>
					<IconPlus />
				</button>
			</div>
			{workExperiences.map((work, index) => (
				<StyledItem key={index}>
					<h4>경력</h4>
					<ul>
						<li>
							<Input
								label='회사명'
								type='text'
								value={work.companyName}
								onChange={event =>
									updateWorkExperience(index, 'companyName', event.target.value)
								}
							/>
						</li>
						<li>
							<Input
								label='직책'
								type='text'
								value={work.role}
								onChange={event =>
									updateWorkExperience(index, 'role', event.target.value)
								}
							/>
						</li>
						<li>
							<Input
								label='부서명'
								type='text'
								value={work.departmentName}
								onChange={event =>
									updateWorkExperience(index, 'departmentName', event.target.value)
								}
							/>
						</li>
						<li>
							<Select
								label='근무 형태'
								options={JobType}
								value={work.jobType}
								onChange={event =>
									updateWorkExperience(index, 'jobType', event.target.value)
								}
							/>
						</li>
						<li>
							<Select
								label='재직 여부'
								options={EmploymentStatus}
								value={work.employmentStatus}
								onChange={event =>
									updateWorkExperience(index, 'employmentStatus', event.target.value)
								}
							/>
						</li>
						<li>
							<DateInput
								label='재직 기간'
								index={index}
								startDate={work.workStartedAt}
								endDate={work.workEndedAt}
								updateDateInput={updateWorkExperience}
								type='month'
							/>
						</li>
						<li>
							<TextArea
								label='담당 업무'
								help
								value={work.assignedTask}
								onChange={event =>
									updateWorkExperience(index, 'assignedTask', event.target.value)
								}
							/>
						</li>
						<li>
							<LinkInput
								links={work.links}
								index={index}
								updateLinks={updateWorkExperience}
							/>
						</li>
					</ul>
					<button type='button' onClick={() => deleteWorkExperience(index)}>
						<IconTrash />
					</button>
				</StyledItem>
			))}
		</StyledWork>
	);
}

const StyledWork = styled.section`
	padding: 40px;
	& > div:not(:last-child) {
		margin-bottom: 30px;
		padding-bottom: 30px;
		border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
	}
	& > div.heading {
		border-bottom: 2px solid ${({ theme }) => theme.colors.navy};
		display: flex;
		gap: 30px;
		justify-content: space-between;
		align-items: end;
		padding-bottom: 10px;
		margin-bottom: 20px;
		h3 {
			color: ${({ theme }) => theme.colors.navy};
			font-weight: bold;
			font-size: ${({ theme }) => theme.fontSizes.medium};
		}
		button {
			svg {
				color: ${({ theme }) => theme.colors.navy};
			}
		}
	}
`;

const StyledItem = styled.div`
	position: relative;
	h4 {
		color: ${({ theme }) => theme.colors.navy};
		font-weight: bold;
		margin-bottom: 20px;
	}
	ul {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 20px;
		li:nth-child(7),
		:last-child {
			grid-column: 1 / 4;
		}
	}
	& > button {
		width: 30px;
		height: 30px;
		border: 0.5px solid ${({ theme }) => theme.colors.grey};
		padding: 6px 5px;
		border-radius: 5px;
		background: white;
		position: absolute;
		top: 0;
		right: 0;
		&:hover {
			filter: brightness(0.95);
		}
		svg {
			color: ${({ theme }) => theme.colors.grey};
		}
	}
`;
