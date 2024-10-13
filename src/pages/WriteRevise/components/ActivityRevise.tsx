import { useFormContext } from 'react-hook-form';
import { Activity as ActivityType } from 'types/career/resume';

import TextArea from '@components/input/TextArea';
import ResumeViewBaseSection from '@components/resume-view/ResumeViewBaseSection/ResumeViewBaseSection';

import ReviseTemplate from './ReviseTemplate';

export default function ActivityRevise() {
	const FIELD = 'doc.activities';
	const { watch, register } = useFormContext();

	const activities: ActivityType[] = watch(FIELD);
	if (activities.length === 0) {
		return null;
	}
	return (
		<ReviseTemplate title='대외활동'>
			{activities.map((activity, index) => (
				<article key={index}>
					<ResumeViewBaseSection.Title>
						{activity.activityName}
					</ResumeViewBaseSection.Title>
					<ResumeViewBaseSection.BasicInfo>
						<li>
							{activity.startedAt} ~ {activity.endedAt}
						</li>
						<li>{activity.activityOrganization}</li>
					</ResumeViewBaseSection.BasicInfo>
					<ResumeViewBaseSection.Description description={activity.description} />
					<ResumeViewBaseSection.Link links={activity.links} />
					<TextArea
						label={`${activity.activityName} 설명 첨삭`}
						help
						{...register(`${FIELD}.${index}.description`)}
					/>
				</article>
			))}
		</ReviseTemplate>
	);
}
