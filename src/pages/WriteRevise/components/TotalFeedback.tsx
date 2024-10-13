import React from 'react';

import TextArea from '@components/input/TextArea';
import EditBaseSection from '@components/resume-edit/EditBaseSection/EditBaseSection';

export default function TotalFeedback() {
	return (
		<EditBaseSection>
			<EditBaseSection.Title title='전체 피드백' />
			<EditBaseSection.Content>
				<TextArea />
			</EditBaseSection.Content>
		</EditBaseSection>
	);
}
