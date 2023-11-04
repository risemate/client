import useResumeEdit from '@hooks/useResumeEdit';
import React from 'react';
import {
	EmploymentStatus,
	JobType,
	Resume as ResumeType,
	WorkExperience as WorkExperienceType,
} from 'types/Resume';

import DateInput from '@common/input/DateInput';
import Input from '@common/input/Input';
import Select from '@common/input/Select';
import TextArea from '@common/input/TextArea';

import LinkInput from '../../common/input/LinkInput';
import BaseSection from './BaseSection';
import EditButton from './EditButton';

interface WorkExperienceProps {
	workExperiences: WorkExperienceType[];
	handleInputChange: (field: keyof ResumeType, value: WorkExperienceType[]) => void;
}

export default function WorkExperience({
	workExperiences,
	handleInputChange,
}: WorkExperienceProps) {
	const defaultWorkExperience: WorkExperienceType = {
		companyName: '',
		departmentName: '',
		role: '',
		jobType: '정규직',
		employmentStatus: '재직 중',
		workStartedAt: '',
		workEndedAt: '',
		assignedTask: '',
		links: [],
	};
	const {
		addData: addWorkExperience,
		deleteData: deleteWorkExperience,
		updateData: updateWorkExperience,
		changeIndex,
	} = useResumeEdit<WorkExperienceType>(
		workExperiences,
		defaultWorkExperience,
		'workExperiences',
		handleInputChange,
	);

	return (
		<BaseSection title='경력' addData={addWorkExperience}>
			{workExperiences.map((work, index) => (
				<div key={index}>
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
							<DateInput<WorkExperienceType>
								label='재직 기간'
								index={index}
								keyword='work'
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
					<EditButton
						index={index}
						changeIndex={changeIndex}
						deleteData={deleteWorkExperience}
					/>
				</div>
			))}
		</BaseSection>
	);
}
