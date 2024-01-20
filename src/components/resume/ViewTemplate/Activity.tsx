import { Activity as ActivityType } from 'types/Resume';

import BaseSection from '@components/wrappers/ResumeViewBaseSection';

interface ActivityProps {
	activities: ActivityType[];
	feedback?: string;
}

export default function Activity({ activities, feedback }: ActivityProps) {
	return (
		<BaseSection>
			<BaseSection.MainTitle>대외활동</BaseSection.MainTitle>
			{feedback && (
				<BaseSection.Feedback>
					<h4>대외활동에 대한 피드백</h4>
					<p>{feedback}</p>
				</BaseSection.Feedback>
			)}
			{activities.map((activity, index) => (
				<article key={index}>
					<BaseSection.Title>{activity.activityName}</BaseSection.Title>
					<BaseSection.BasicInfo>
						<li>
							{activity.startedAt} ~ {activity.endedAt}
						</li>
						<li>{activity.activityOrganization}</li>
					</BaseSection.BasicInfo>
					<BaseSection.description description={activity.description} />
					<BaseSection.Link links={activity.links} />
				</article>
			))}
		</BaseSection>
	);
}
