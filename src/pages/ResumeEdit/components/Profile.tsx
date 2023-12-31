import React from 'react';
import { useFormContext } from 'react-hook-form';
import styled from 'styled-components';
import { Profile as ProfileType } from 'types/Resume';

import FileInput from '@components/input/FileInput';
import Input from '@components/input/Input';
import LinkInput from '@components/input/LinkInput';
import TextArea from '@components/input/TextArea';
import BaseSection from '@components/wrappers/EditBaseSection';

export default function Profile() {
	const { register, watch } = useFormContext();
	const inputName = (field: keyof ProfileType) => `doc.profile.${field}`;
	return (
		<BaseSection>
			<BaseSection.Title title='기본 정보'>
				<ResumeTitleInput>
					<span className='a11y-hidden'>이력서 이름 입력</span>
					<input
						type='text'
						placeholder='이력서 이름 입력'
						{...register('doc.docTitle')}
					/>
				</ResumeTitleInput>
				<WarningText>* 내용이 없을 시 이력서에 표기되지 않습니다.</WarningText>
			</BaseSection.Title>
			<InputWrapper>
				<FileInput inputName={inputName('profileImage')} size='medium' />
				<NameInput>
					<input type='text' placeholder='이름 입력' {...register(inputName('name'))} />
				</NameInput>
				<JobInput>
					<input
						type='text'
						placeholder='포지션 입력'
						{...register(inputName('position'))}
					/>
				</JobInput>
				<ContactWrapper className='contact-wrapper'>
					<Input
						label='휴대폰 번호'
						type='text'
						{...register(inputName('phoneNumber'))}
					/>
					<Input label='이메일' type='email' {...register(inputName('email'))} />
				</ContactWrapper>
				<LinkInput links={watch('doc.links')} inputName='doc.links' />
				<TextArea label='자기소개' help {...register(inputName('description'))} />
			</InputWrapper>
		</BaseSection>
	);
}

const ResumeTitleInput = styled.label`
	input {
		width: 300px;
		padding: 3px;
		font-weight: bold;
		color: ${({ theme }) => theme.colors.darkGrey};
	}
	input::placeholder {
		color: ${({ theme }) => theme.colors.grey};
		font-weight: bold;
	}
`;

const WarningText = styled.p`
	color: red;
	font-weight: 200;
	margin-left: auto;
	font-size: ${({ theme }) => theme.fontSizes.small};
`;

const NameInput = styled.label`
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
`;

const JobInput = styled.label`
	grid-column: 2 / 3;
	grid-row: 2 / 3;
	margin-left: 5px;
	input {
		width: 100%;
		padding: 5px;
		font-weight: bold;
		color: ${({ theme }) => theme.colors.darkGrey};
	}
`;

const ContactWrapper = styled.div`
	grid-column: 3 / 5;
	grid-row: 1 / 2;
	display: flex;
	gap: 30px;
	margin-top: 20px;
	label {
		width: 100%;
	}
`;

const InputWrapper = styled.div`
	display: grid;
	grid-template-columns: 160px 0.8fr 1fr 1fr;
	grid-template-rows: 70px auto 150px;
	gap: 5px 20px;
	& > div:nth-child(1) {
		grid-column: 1 / 2;
		grid-row: 1 / 3;
	}
	& > div:last-of-type {
		grid-column: 3 / 5;
		grid-row: 2 / 3;
		margin-top: 20px;
	}
	& > label:last-of-type {
		grid-column: 1 / 5;
		grid-row: 3 / 4;
		margin-top: 20px;
	}
`;
