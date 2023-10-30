import useResumeEdit from '@hooks/useResumeEdit';
import { IconPlus, IconTrash } from '@icons';
import React from 'react';
import {
	Education as EducationType,
	Resume as ResumeType,
	GraduationStatus,
} from 'types/Resume';

import DateInput from '@common/input/DateInput';
import Input from '@common/input/Input';
import LinkInput from '@common/input/LinkInput';
import Select from '@common/input/Select';

import BaseSection from './BaseSection';

interface EducationProps {
	educations: EducationType[];
	handleInputChange: (field: keyof ResumeType, value: EducationType[]) => void;
}

export default function Education({ educations, handleInputChange }: EducationProps) {
	const defaultEducation: EducationType = {
		schoolName: '',
		major: '',
		graduationStatus: '학기 중',
		enrollmentStartedAt: '',
		enrollmentEndedAt: '',
		links: [],
	};
	const {
		addData: addEducation,
		deleteData: deleteEducation,
		updateData: updateEducation,
	} = useResumeEdit<EducationType>(
		educations,
		defaultEducation,
		'educations',
		handleInputChange,
	);

	return (
		<BaseSection>
			<div>
				<h3>교육</h3>
				<button type='button' onClick={addEducation}>
					<IconPlus />
				</button>
			</div>
			{educations.map((education, index) => (
				<div key={index}>
					<h4>교육</h4>
					<ul>
						<li>
							<Input
								label='교육 이름'
								value={education.schoolName}
								onChange={event =>
									updateEducation(index, 'schoolName', event.target.value)
								}
							/>
						</li>
						<li>
							<Input
								label='전공'
								value={education.major}
								onChange={event => updateEducation(index, 'major', event.target.value)}
							/>
						</li>
						<li>
							<Select
								label='상태'
								options={GraduationStatus}
								value={education.graduationStatus}
								onChange={event =>
									updateEducation(index, 'graduationStatus', event.target.value)
								}
							/>
						</li>
						<li>
							<DateInput<EducationType>
								label='교육 기간'
								index={index}
								keyword='enrollment'
								startDate={education.enrollmentStartedAt}
								endDate={education.enrollmentEndedAt}
								updateDateInput={updateEducation}
								type='month'
							/>
						</li>
						<li>
							<LinkInput
								links={education.links}
								index={index}
								updateLinks={updateEducation}
							/>
						</li>
					</ul>
					<button type='button' onClick={() => deleteEducation(index)}>
						<IconTrash />
					</button>
				</div>
			))}
		</BaseSection>
	);
}