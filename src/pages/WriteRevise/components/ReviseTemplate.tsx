import { ReactNode } from 'react';
import styled from 'styled-components';

import ToggleContent from '@common/ToggleContent';
import TextArea from '@components/input/TextArea';
import EditBaseSection from '@components/resume-edit/EditBaseSection/EditBaseSection';
import ResumeViewBaseSection from '@components/resume-view/ResumeViewBaseSection/ResumeViewBaseSection';

interface ReviseTemplateProps {
	title: string;
	children: ReactNode;
}

export default function ReviseTemplate({ title, children }: ReviseTemplateProps) {
	return (
		<EditBaseSection>
			<EditBaseSection.Title title={title} />
			<TextAreaWrapper>
				<TextArea label={`${title} 전체 피드백`} />
			</TextAreaWrapper>
			<ToggleContent openText={`${title} 전체보기`} closeText={`${title} 접기`}>
				<EditBaseSection.Content>
					<ResumeViewBaseSection>{children}</ResumeViewBaseSection>
				</EditBaseSection.Content>
			</ToggleContent>
		</EditBaseSection>
	);
}

const TextAreaWrapper = styled.div`
	border-bottom: 2px solid ${({ theme }) => theme.colors.navy};
	margin-bottom: 20px;
	padding-bottom: 10px;
`;
