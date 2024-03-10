import theme from '@styles/theme';
import { formatDate } from '@utils/helpers';
import styled from 'styled-components';
import { Variant } from 'types/Button';
import { Career, DocType } from 'types/CareerDocument';
import { ReviseResume } from 'types/Resume';

import Button from '@common/Button';
import CardWrapper from '@components/resume-view/ResumeCardWrapper';

interface ReviseCareerCardProps {
	career: Career<ReviseResume>;
}

export default function ReviseCareerCard({ career }: ReviseCareerCardProps) {
	return (
		<CardWrapper>
			<Tag $color={tagInfo[career.docType].color}>{tagInfo[career.docType].name}</Tag>
			<CardWrapper.Title>{career.docTitle}</CardWrapper.Title>
			<SummaryText>
				안녕하세요 00님! 기다려주셔서 감사합니다. 요청주신 이력서 첨삭이 끝났습니다. 각
				섹션에 관해 피드백과 그 피드백을 토대로 변경된 이력서 내용입니다. 변경된 내용을
				확인하고 수정한 다음 해당 내용으로 교체할 수 있습니다
			</SummaryText>

			<Button variant={tagInfo[career.docType].color} size='full' to={`${career._id}`}>
				보기
			</Button>
			{career.docType !== 'BASIC' && (
				<Button variant={tagInfo[career.docType].color} size='full'>
					기본 문서와 비교하기
				</Button>
			)}

			<CardWrapper.Title time={formatDate(career.updatedAt).period}>
				최근 업데이트
			</CardWrapper.Title>
		</CardWrapper>
	);
}

interface StyledTagProps {
	$color: Variant;
}

const Tag = styled.span<StyledTagProps>`
	position: absolute;
	top: 0;
	right: 0;
	padding: 10px 15px;
	border-radius: 0px 10px;
	color: white;
	font-size: ${({ theme }) => theme.fontSizes.small};
	background: ${({ theme, $color }) => theme.colors[$color as keyof typeof theme.colors]};
`;

type TagInfoType = {
	[K in DocType]: {
		name: string;
		color: Variant;
	};
};

const tagInfo: TagInfoType = {
	BASIC: { name: '기본', color: 'navy' },
	AI: { name: 'AI', color: 'mint' },
	COACHING: { name: '전문가', color: 'blue' },
};

export const SummaryText = styled.p`
	padding: 5px 0;
	width: 100%;
	height: 40px;
	font-size: 14px;
	color: ${theme.colors.grey};
	line-height: 1.2;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
`;
