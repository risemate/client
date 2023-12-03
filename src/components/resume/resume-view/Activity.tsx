import React from 'react';
import { Activity as ActivityType } from 'types/Resume';

import BaseSection from './BaseSection';

interface ActivityProps {
	activities: ActivityType[];
}

export default function Activity({ activities }: ActivityProps) {
	return (
		<BaseSection>
			{activities.map((activity, index) => (
				<article key={index}>
					<BaseSection.Title>{activity.activityName}</BaseSection.Title>
					<BaseSection.BasicInfo>
						<li>{activity.activityYear}</li>
						<li>{activity.activityOrganization}</li>
					</BaseSection.BasicInfo>
					<BaseSection.Task>
						{activity.activityDescription.split('\n').map((task, taskIndex) => (
							<li key={taskIndex}>{task.replace('-', '')}</li>
						))}
					</BaseSection.Task>
					<BaseSection.Link>
						{activity.links.map((link, linkIndex) => (
							<li key={linkIndex}>
								<a href={link.linkUrl} target='_black'>
									🔗 {link.linkTitle}
								</a>
							</li>
						))}
					</BaseSection.Link>
				</article>
			))}
		</BaseSection>
	);
}
