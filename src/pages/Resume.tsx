import { isEmpty } from '@utils/helpers';
import { mockResume } from 'models/ResumeData';
import React from 'react';
import styled from 'styled-components';

import Empty from '@common/Empty';
import AddResume from '@components/resume/resume-list/AddResume';
import ResumeCard from '@components/resume/resume-list/ResumeCard';

export default function Resume() {
	const resumes = [mockResume];
	return (
		<>
			<h2 className='a11y-hidden'>나의 이력서</h2>
			<StyledResume>
				{isEmpty(resumes) && <Empty name='이력서가' moveToLink={() => alert('hello')} />}
				<section>
					<h3>이력서</h3>
					<StyledList>
						<AddResume />
						<ResumeCard />
						<ResumeCard />
						<ResumeCard />
					</StyledList>
				</section>
				<section>
					<h3>자기소개서</h3>
					<StyledList>
						<AddResume />
						<ResumeCard />
						<ResumeCard />
					</StyledList>
				</section>
			</StyledResume>
		</>
	);
}

const StyledResume = styled.div`
	min-height: 500px;
	padding: 50px;
	section {
		display: flex;
		flex-direction: column;
		h3 {
			color: ${({ theme }) => theme.colors.navy};
			font-weight: bold;
			font-size: ${({ theme }) => theme.fontSizes.medium};
			margin-bottom: 30px;
		}
		&:not(:last-child) {
			margin-bottom: 70px;
		}
	}
`;

const StyledList = styled.ul`
	width: 100%;
	display: flex;
	gap: 20px;
	justify-content: start;
	overflow-x: scroll;
	-ms-overflow-style: none;
	scrollbar-width: none;
	&::-webkit-scrollbar {
		display: none;
	}
`;
