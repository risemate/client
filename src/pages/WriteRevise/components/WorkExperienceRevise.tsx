import { useFormContext } from 'react-hook-form';
import { WorkExperience as WorkExperienceType } from 'types/career/resume';

import TextArea from '@components/input/TextArea';
import ResumeViewBaseSection from '@components/resume-view/ResumeViewBaseSection/ResumeViewBaseSection';

import ReviseTemplate from './ReviseTemplate';

export default function WorkExperienceRevise() {
	const FIELD = 'doc.workExperiences';
	const { watch, register } = useFormContext();

	const workExperiences: WorkExperienceType[] = watch(FIELD);
	if (workExperiences.length === 0) {
		return null;
	}
	return (
		<ReviseTemplate title='경력'>
			{workExperiences.map((work, index: number) => (
				<article key={index}>
					<ResumeViewBaseSection.Title>{work.companyName}</ResumeViewBaseSection.Title>
					<ResumeViewBaseSection.BasicInfo>
						<li>
							{work.departmentName && `${work.departmentName} |`} {work.role}
						</li>
						<li>
							{work.jobType && `${work.jobType} |`} {work.employmentStatus}
						</li>
						<li>
							{work.startedAt} ~ {work.endedAt}
						</li>
					</ResumeViewBaseSection.BasicInfo>

					<ResumeViewBaseSection.Description description={work.description} />
					<ResumeViewBaseSection.Link links={work.links} />
					<TextArea
						label={`${work.companyName} 설명 첨삭`}
						help
						{...register(`${FIELD}.${index}.description`)}
					/>
				</article>
			))}
		</ReviseTemplate>
	);
}
