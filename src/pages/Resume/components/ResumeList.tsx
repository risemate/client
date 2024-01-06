import React from 'react';
import styled from 'styled-components';
import { Career } from 'types/CareerDocument';
import { Resume } from 'types/Resume';

import CareerBasicCard from '@components/resume/Card/CareerBasicCard';

import AddResume from './AddResume';

interface ResumeListProps {
	resumes: Career<Resume>[];
}

export default function ResumeList({ resumes }: ResumeListProps) {
	return (
		<StyledResumeList>
			<li>
				<AddResume />
			</li>
			{resumes.map(resume => (
				<li key={resume._id}>
					<CareerBasicCard career={resume} />
				</li>
			))}
		</StyledResumeList>
	);
}

const StyledResumeList = styled.ul`
	width: 100%;
	display: flex;
	gap: 20px;
	justify-content: start;
	overflow-x: hidden;
`;
