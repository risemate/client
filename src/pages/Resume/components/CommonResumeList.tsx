import React, { Suspense } from 'react';
import styled from 'styled-components';
import { Career } from 'types/CareerDocument';
import { Resume } from 'types/Resume';

import Loader from '@common/Loader';
import CareerBasicCard from '@components/resume/Card/CareerBasicCard';
import ReviseCareerCard from '@components/resume/Card/ReviseCareerCard';

import AddResume from './AddResume';

interface CommonResumeListProps {
	title: string;
	resumes: Career<Resume>[];
	isRevise?: boolean;
}

export default function CommonResumeList({
	title,
	resumes,
	isRevise,
}: CommonResumeListProps) {
	return (
		<section>
			<h3>{title}</h3>
			<StyledResumeList>
				<Suspense fallback={<Loader />}>
					{isRevise || (
						<li>
							<AddResume />
						</li>
					)}
					{resumes.map(resume => (
						<li key={resume._id}>
							{isRevise ? (
								<ReviseCareerCard career={resume} />
							) : (
								<CareerBasicCard career={resume} />
							)}
						</li>
					))}
				</Suspense>
			</StyledResumeList>
		</section>
	);
}

const StyledResumeList = styled.ul`
	width: 100%;
	display: flex;
	gap: 20px;
	justify-content: start;
	// overflow-x: hidden;
	overflow-y: scroll;'
`;
