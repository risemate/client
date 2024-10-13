import { isEmpty } from '@utils/helpers';
import { useFormContext } from 'react-hook-form';
import { Education as EducationType } from 'types/career/resume';

import TextArea from '@components/input/TextArea';
import ResumeViewBaseSection from '@components/resume-view/ResumeViewBaseSection/ResumeViewBaseSection';

import ReviseTemplate from './ReviseTemplate';

export default function EducationRevise() {
	const FIELD = 'doc.educations';
	const { watch, register } = useFormContext();

	const educations: EducationType[] = watch(FIELD);
	if (educations.length === 0) {
		return null;
	}
	return (
		<ReviseTemplate title='교육'>
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
					{!isEmpty(education.description) && (
						<ResumeViewBaseSection.Description description={education.description} />
					)}
					<ResumeViewBaseSection.Link links={education.links} />
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
