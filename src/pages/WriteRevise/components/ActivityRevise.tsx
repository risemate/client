import { useFormContext } from 'react-hook-form';
import { Activity as ActivityType } from 'types/career/resume';

import ToggleContent from '@common/ToggleContent';
import TextArea from '@components/input/TextArea';
import ResumeViewBaseSection from '@components/resume-view/ResumeViewBaseSection/ResumeViewBaseSection';

import ReviseTemplate from './ReviseTemplate';

interface ActivityReviseProps {
	activities: ActivityType[] | null;
}

export default function ActivityRevise({ activities }: ActivityReviseProps) {
	const FIELD = 'doc.activities';
	const { register } = useFormContext();

	if (!activities || activities.length === 0) {
		return null;
	}
	return (
		<ReviseTemplate title='대외활동' field='activities'>
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
					<ToggleContent openText='상세 보기' closeText='상세 접기'>
						<ResumeViewBaseSection.Description description={activity.description} />
						<ResumeViewBaseSection.Link links={activity.links} />
					</ToggleContent>
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
