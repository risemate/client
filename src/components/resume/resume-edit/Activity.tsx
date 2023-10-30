import useResumeEdit from '@hooks/useResumeEdit';
import { IconPlus, IconTrash } from '@icons';
import React from 'react';
import { Activity as ActivityType, Resume as ResumeType } from 'types/Resume';

import Input from '@common/input/Input';
import LinkInput from '@common/input/LinkInput';
import TextArea from '@common/input/TextArea';

import BaseSection from './BaseSection';

interface ActivityProps {
	activities: ActivityType[];
	handleInputChange: (field: keyof ResumeType, value: ActivityType[]) => void;
}

export default function Activity({ activities, handleInputChange }: ActivityProps) {
	const defaultActivity: ActivityType = {
		activityName: '',
		activityYear: undefined,
		activityDescription: '',
		activityOrganization: '',
		links: [],
	};
	const {
		addData: addAcitivty,
		deleteData: deleteActivity,
		updateData: updateActivity,
	} = useResumeEdit<ActivityType>(
		activities,
		defaultActivity,
		'activities',
		handleInputChange,
	);

	return (
		<BaseSection>
			<div>
				<h3>대외활동</h3>
				<button type='button' onClick={addAcitivty}>
					<IconPlus />
				</button>
			</div>
			{activities.map((activity, index) => (
				<div key={index}>
					<h4>대외활동</h4>
					<ul>
						<li>
							<Input
								label='대외활동명'
								type='text'
								value={activity.activityName}
								onChange={event =>
									updateActivity(index, 'activityName', event.target.value)
								}
							/>
						</li>
						<li>
							<Input
								label='활동년도'
								type='number'
								value={activity.activityYear}
								onChange={event =>
									updateActivity(index, 'activityYear', event.target.value)
								}
							/>
						</li>
						<li>
							<Input
								label='주관사'
								value={activity.activityOrganization}
								onChange={event =>
									updateActivity(index, 'activityOrganization', event.target.value)
								}
							/>
						</li>
						<li>
							<TextArea
								label='활동 설명'
								value={activity.activityDescription}
								onChange={event =>
									updateActivity(index, 'activityDescription', event.target.value)
								}
							/>
						</li>
						<li>
							<LinkInput
								links={activity.links}
								index={index}
								updateLinks={updateActivity}
							/>
						</li>
					</ul>
					<button type='button' onClick={() => deleteActivity(index)}>
						<IconTrash />
					</button>
				</div>
			))}
		</BaseSection>
	);
}
