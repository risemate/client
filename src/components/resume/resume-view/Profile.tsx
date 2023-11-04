import React from 'react';
import styled from 'styled-components';
import { Resume as ResumeType } from 'types/Resume';

import DefaultImage from '@common/DefaultImage';

interface ProfileProps {
	resume: ResumeType;
}

export default function Profile({ resume }: ProfileProps) {
	return (
		<StyledProfile>
			<DefaultImage variant='navy' size='large' image={resume.profileImage} />
			<h2>
				{resume.name}
				<br />
				<span>{resume.job}</span>
			</h2>
			<ul className='list-contact'>
				<li>
					phone-number: <span>010-0000-0000</span>
				</li>
				<li>
					GitHub: <span>github.com/hongildong</span>
				</li>
				<li>
					email: <span>hongildon@gmail.com</span>
				</li>
				<li>
					Blog: <span>velog.com/@hongildong</span>
				</li>
			</ul>
			<p>{resume.coverLetter}</p>
			<ul className='list-skills'>
				{resume.techStack.skills.map((stack, index) => (
					<li key={index}>{stack}</li>
				))}
			</ul>
		</StyledProfile>
	);
}

const StyledProfile = styled.section`
	display: grid;
	grid-template-columns: 210px calc(100% - 210px);
	gap: 25px;
	.img,
	img {
		grid-column: 1 / 2;
		grid-row: 1 / 3;
	}
	h2 {
		font-size: ${({ theme }) => theme.fontSizes.large};
		font-weight: bold;
		grid-column: 2 / 3;
		grid-row: 1 / 2;
		line-height: 40px;
		span {
			font-size: ${({ theme }) => theme.fontSizes.medium};
			font-weight: normal;
		}
	}
	ul.list-contact {
		grid-row: 2 / 3;
		display: grid;
		grid-template-columns: 1fr 1fr;
		li {
			font-weight: bold;
			span {
				font-weight: 400;
			}
		}
	}
	p {
		grid-column: 1 / 3;
		line-height: 28px;
	}
	ul.list-skills {
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
	}
`;
