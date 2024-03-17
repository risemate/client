import { isEmpty } from '@utils/helpers';
import { Education as EducationType } from 'types/career/resume';

import BaseSection from '@components/resume-view/ResumeViewBaseSection';

interface EducationProps {
	educations: EducationType[];
	feedback?: string;
}

export default function Education({ educations, feedback }: EducationProps) {
	return (
		<BaseSection>
			<BaseSection.MainTitle>교육</BaseSection.MainTitle>
			{feedback && (
				<BaseSection.Feedback>
					<h4>교육에 대한 피드백</h4>
					<p>{feedback}</p>
				</BaseSection.Feedback>
			)}
			{educations.map((education, index) => (
				<article key={index}>
					<BaseSection.Title>{education.schoolName}</BaseSection.Title>
					<BaseSection.BasicInfo>
						<li>
							{education.major} | {education.graduationStatus}
						</li>
						<li>
							{education.startedAt} ~ {education.endedAt}
						</li>
					</BaseSection.BasicInfo>
					{!isEmpty(education.description) && (
						<BaseSection.Description description={education.description} />
					)}
					<BaseSection.Link links={education.links} />
				</article>
			))}
		</BaseSection>
	);
}
