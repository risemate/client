import { isEmpty } from '@utils/helpers';
import { useFormContext } from 'react-hook-form';
import { Education as EducationType } from 'types/career/resume';

import ToggleContent from '@common/ToggleContent';
import TextArea from '@components/input/TextArea';
import ResumeViewBaseSection from '@components/resume-view/ResumeViewBaseSection/ResumeViewBaseSection';

import ReviseTemplate from './ReviseTemplate';

interface EducationReviseProps {
	educations: EducationType[] | null;
}

export default function EducationRevise({ educations }: EducationReviseProps) {
	const FIELD = 'doc.educations';
	const { register } = useFormContext();

	if (!educations || educations.length === 0) {
		return null;
	}
	return (
		<ReviseTemplate title='교육' field='educations'>
			{educations.map((education, index) => (
				<article key={index}>
					<ResumeViewBaseSection.Title>
						{education.schoolName}
					</ResumeViewBaseSection.Title>
					<ResumeViewBaseSection.BasicInfo>
						<li>
							{education.major} | {education.graduationStatus}
						</li>
						<li>
							{education.startedAt} ~ {education.endedAt}
						</li>
					</ResumeViewBaseSection.BasicInfo>
					<ToggleContent openText='상세 보기' closeText='상세 접기'>
						{!isEmpty(education.description) && (
							<ResumeViewBaseSection.Description description={education.description} />
						)}
						<ResumeViewBaseSection.Link links={education.links} />
					</ToggleContent>
					<TextArea
						label={`${education.schoolName} 설명 첨삭`}
						help
						{...register(`${FIELD}.${index}.description`)}
					/>
				</article>
			))}
		</ReviseTemplate>
	);
}
