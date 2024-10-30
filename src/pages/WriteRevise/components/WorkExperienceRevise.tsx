import { useFormContext } from 'react-hook-form';
import { WorkExperience as WorkExperienceType } from 'types/career/resume';

import ToggleContent from '@common/ToggleContent';
import TextArea from '@components/input/TextArea';
import ResumeViewBaseSection from '@components/resume-view/ResumeViewBaseSection/ResumeViewBaseSection';

import ReviseTemplate from './ReviseTemplate';

interface WorkExperienceReviseProps {
	workExperiences: WorkExperienceType[] | null;
}

export default function WorkExperienceRevise({
	workExperiences,
}: WorkExperienceReviseProps) {
	const FIELD = 'doc.workExperiences';
	const { register } = useFormContext();

	if (!workExperiences || workExperiences.length === 0) {
		return null;
	}

	return (
		<ReviseTemplate title='경력' field='workExperiences'>
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
					<ToggleContent openText='상세 보기' closeText='상세 접기'>
						<ResumeViewBaseSection.Description description={work.description} />
						<ResumeViewBaseSection.Link links={work.links} />
					</ToggleContent>
					<TextArea
						label={`${work.companyName} 첨삭`}
						help
						{...register(`${FIELD}.${index}.description`)}
					/>
				</article>
			))}
		</ReviseTemplate>
	);
}
