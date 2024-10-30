import { ReactNode } from 'react';
import { useFormContext } from 'react-hook-form';
import styled from 'styled-components';

import TextArea from '@components/input/TextArea';
import EditBaseSection from '@components/resume-edit/EditBaseSection/EditBaseSection';
import ResumeViewBaseSection from '@components/resume-view/ResumeViewBaseSection/ResumeViewBaseSection';

interface ReviseTemplateProps {
	title: string;
	field: string;
	children: ReactNode;
}

export default function ReviseTemplate({ title, field, children }: ReviseTemplateProps) {
	const { register } = useFormContext();
	return (
		<EditBaseSection>
			<EditBaseSection.Title title={title} />
			<TextAreaWrapper>
				<TextArea label={`${title} 전체 피드백`} {...register(`doc.feedback.${field}`)} />
			</TextAreaWrapper>
			<EditBaseSection.Content>
				<ResumeViewBaseSection>{children}</ResumeViewBaseSection>
			</EditBaseSection.Content>
		</EditBaseSection>
	);
}

const TextAreaWrapper = styled.div`
	border-bottom: 2px solid ${({ theme }) => theme.colors.navy};
	margin-bottom: 20px;
	padding-bottom: 10px;
`;
