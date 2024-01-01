import { isEmpty } from '@utils/helpers';
import styled, { css } from 'styled-components';
import { Career } from 'types/CareerDocument';
import { mockResumeAi, mockResumeCoaching } from 'types/Resume/data';

import Empty from '@common/Empty';
import ReviseCareerCard from '@components/resume/Card/ReviseCareerCard';
import WhiteBoxWrapper from '@components/wrappers/WhiteBoxWrapper';

export default function ReviseList() {
	const resumes: Career[] = [mockResumeAi, mockResumeCoaching];
	return (
		<>
			<h2 className='a11y-hidden'>첨삭 이력서 목록</h2>
			<WhiteBoxWrapper type='div' customCss={resumeWrapperStyle}>
				{isEmpty(resumes) && <Empty name='이력서가' moveToLink={() => alert('hello')} />}

				<ResumeList>
					{resumes.map(resume => (
						<ReviseCareerCard key={resume._id} career={resume} />
					))}
				</ResumeList>
			</WhiteBoxWrapper>
		</>
	);
}

const resumeWrapperStyle = css`
	min-height: 500px;
	padding: 50px;
`;

const ResumeList = styled.ul`
	width: 100%;
	display: flex;
	gap: 20px;
	justify-content: start;
	flex-wrap: wrap;
`;
