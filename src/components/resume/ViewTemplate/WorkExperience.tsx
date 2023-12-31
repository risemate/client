import React from 'react';
import { WorkExperience as WorkExperienceType } from 'types/Resume';

import BaseSection from '@components/wrappers/ResumeViewBaseSection';

interface WorkExperiencesProps {
	workExperiences: WorkExperienceType[];
	feedback?: string;
}

export default function WorkExperience({
	workExperiences,
	feedback,
}: WorkExperiencesProps) {
	return (
		<BaseSection>
			<BaseSection.MainTitle>경력</BaseSection.MainTitle>
			{feedback && (
				<BaseSection.Feedback>
					<h4>경력에 대한 피드백</h4>
					<p>{feedback}</p>
				</BaseSection.Feedback>
			)}
			{workExperiences.map((work, index) => (
				<article key={index}>
					<BaseSection.Title>{work.companyName}</BaseSection.Title>
					<BaseSection.BasicInfo>
						<li>
							{work.departmentName} | {work.role}
						</li>
						<li>
							{work.jobType} | {work.employmentStatus}
						</li>
						<li>
							{work.workStartedAt} ~ {work.workEndedAt}
						</li>
					</BaseSection.BasicInfo>
					<BaseSection.Task tasks={work.assignedTask} />
					<BaseSection.Link links={work.links} />
				</article>
			))}
		</BaseSection>
	);
}
