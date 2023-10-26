import { IconPlus } from '@icons';
import React from 'react';
import styled from 'styled-components';
import { Resume as ResumeType } from 'types/Resume';

import FileInput from '@common/input/FileInput';
import Input from '@common/input/Input';
import TextArea from '@common/input/TextArea';

interface ProfileProps {
	profile: ResumeType;
	handleInputChange: (field: keyof ResumeType, value: string | number) => void;
}

export default function Profile({ profile, handleInputChange }: ProfileProps) {
	return (
		<StyledProfile>
			<div className='heading'>
				<h3>기본 정보</h3>
				<label>
					<span className='a11y-hidden'>이력서 이름 입력</span>
					<input
						type='text'
						placeholder='이력서 이름 입력'
						value={profile.resumeTitle}
						onChange={event => handleInputChange('resumeTitle', event.target.value)}
					/>
				</label>
				<p>* 내용이 없을 시 이력서에 표기되지 않습니다.</p>
			</div>
			<StyledInputs>
				<FileInput
					image={profile.profileImage}
					size='medium'
					handleImageInput={handleInputChange}
				/>
				<label className='input-name'>
					<input
						type='text'
						placeholder='이름 입력'
						value={profile.name}
						onChange={event => handleInputChange('name', event.target.value)}
					/>
				</label>
				<label className='input-job'>
					<input
						type='text'
						placeholder='직업 입력'
						value={profile.job}
						onChange={event => handleInputChange('job', event.target.value)}
					/>
				</label>
				<div className='contact-wrapper'>
					<Input label='휴대폰 번호' type='text' />
					<Input label='이메일' type='email' />
				</div>
				<div className='link-wrapper'>
					<Input
						label='Link'
						type='text'
						explanation='예시) [{Github}]https://www.github.com'
					/>
					<button type='button'>
						<IconPlus />
					</button>
				</div>
				<TextArea
					label='자기소개'
					value={profile.coverLetter}
					onChange={event => handleInputChange('coverLetter', event.target.value)}
					help
				/>
			</StyledInputs>
		</StyledProfile>
	);
}

const StyledProfile = styled.section`
	padding: 40px;
	input::placeholder {
		color: ${({ theme }) => theme.colors.grey};
		font-weight: bold;
	}
	& > div.heading {
		border-bottom: 2px solid ${({ theme }) => theme.colors.navy};
		display: flex;
		gap: 30px;
		align-items: end;
		padding-bottom: 10px;
		margin-bottom: 20px;
		h3 {
			color: ${({ theme }) => theme.colors.navy};
			font-weight: bold;
			font-size: ${({ theme }) => theme.fontSizes.medium};
		}
		input {
			width: 300px;
			padding: 5px;
		}
		p {
			color: red;
			font-weight: 200;
			margin-left: auto;
			font-size: ${({ theme }) => theme.fontSizes.small};
		}
	}
`;

const StyledInputs = styled.div`
	display: grid;
	grid-template-columns: 160px 0.8fr 1fr 1fr;
	grid-template-rows: 70px 130px 150px;
	gap: 5px 20px;
	& > div:nth-child(1) {
		grid-column: 1 / 2;
		grid-row: 1 / 2;
	}
	.input-name {
		font-size: ${({ theme }) => theme.fontSizes.large};
		font-weight: bold;
		grid-column: 2 / 3;
		grid-row: 1 / 2;
		margin-top: 15px;
		input {
			width: 100%;
			padding: 5px;
			font-weight: bold;
			color: ${({ theme }) => theme.colors.darkGrey};
		}
	}
	.input-job {
		grid-column: 2 / 3;
		grid-row: 2 / 3;
		margin-left: 5px;
		input {
			width: 100%;
			padding: 5px;
			font-weight: bold;
			color: ${({ theme }) => theme.colors.darkGrey};
		}
	}
	.contact-wrapper {
		grid-column: 3 / 4;
		grid-row: 1 / 3;
		label {
			margin-top: 20px;
		}
	}
	.link-wrapper {
		grid-column: 4 / 5;
		grid-row: 1 / 3;
		position: relative;
		label {
			margin: 20px 0 5px;
		}
		button {
			position: absolute;
			top: 15px;
			right: 10px;
			svg {
				color: ${({ theme }) => theme.colors.navy};
			}
		}
	}
	label:nth-of-type(3) {
		grid-column: 1 / 5;
		grid-row: 3 / 4;
		input {
			height: 100%;
		}
	}
`;
