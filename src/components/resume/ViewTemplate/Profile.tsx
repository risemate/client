import styled from 'styled-components';
import { Profile as ProfileType } from 'types/Resume';

import DefaultImage from '@common/DefaultImage';
// import Markdown from '@common/Markdown';
import Markdown from '@common/Markdown';
import BaseSectionFeedback from '@components/wrappers/ResumeViewBaseSection/BaseSectionFeedback';

interface ProfileProps {
	profile: ProfileType;
	description?: string | null;
	techStack?: { skills: string[] | null };
	feedback?: string;
}

// eslint-disable-next-line
export default function Profile({
	profile,
	techStack,
	feedback,
	description,
}: ProfileProps) {
	return (
		<ProfileSection>
			<DefaultImage variant='navy' size='large' image={profile.profileImage} />
			<ProfileHeading>
				{profile.name}
				<br />
				<span>{profile.position}</span>
			</ProfileHeading>
			<ContactList>
				{profile.phoneNumber && (
					<li>
						phone-number: <span>{profile.phoneNumber}</span>
					</li>
				)}
				{profile.email && (
					<li>
						email: <span>{profile.email}</span>
					</li>
				)}
			</ContactList>
			{description && <Markdown>{description}</Markdown>}
			{feedback && (
				<BaseSectionFeedback>
					<h4>자기소개에 대한 피드백</h4>
					<p>{feedback}</p>
				</BaseSectionFeedback>
			)}
			{techStack && (
				<SkillList>
					{techStack?.skills &&
						techStack.skills.map((stack, index) => <li key={index}>{stack}</li>)}
				</SkillList>
			)}
		</ProfileSection>
	);
}

const ProfileSection = styled.section`
	display: grid;
	grid-template-columns: 210px auto;
	gap: 25px;
	.img,
	img {
		grid-column: 1 / 2;
		grid-row: 1 / 3;
	}
	.md-view {
		grid-column: 1 / 3;
		line-height: 28px;
	}
`;

const ProfileHeading = styled.h2`
	font-size: ${({ theme }) => theme.fontSizes.large};
	font-weight: bold;
	grid-column: 2 / 3;
	grid-row: 1 / 2;
	line-height: 40px;
	span {
		font-size: ${({ theme }) => theme.fontSizes.medium};
		font-weight: normal;
	}
`;

const ContactList = styled.ul`
	grid-row: 2 / 3;
	display: flex;
	flex-direction: column;
	gap: 30px;
	justify-content: end;
	li {
		font-weight: bold;
		span {
			font-weight: 400;
		}
	}
`;

const SkillList = styled.ul`
	width: fit-content;
	display: flex;
	gap: 10px;
	grid-column: 1 / 3;
	li {
		width: fit-content;
		border-radius: 50px;
		padding: 5px 15px;
		color: ${({ theme }) => theme.colors.navy};
		border: 2px solid ${({ theme }) => theme.colors.navy};
		display: flex;
		align-items: center;
	}
`;
