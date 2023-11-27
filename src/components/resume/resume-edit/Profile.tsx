import React from 'react';
import { useFormContext } from 'react-hook-form';
import styled from 'styled-components';

import FileInput from '@common/input/FileInput';
import Input from '@common/input/Input';
import LinkInput from '@common/input/LinkInput';
import TextArea from '@common/input/TextArea';

export default function Profile() {
	const { register, watch } = useFormContext();
	return (
		<StyledProfile>
			<div className='heading'>
				<h3>기본 정보</h3>
				<label>
					<span className='a11y-hidden'>이력서 이름 입력</span>
					<input type='text' placeholder='이력서 이름 입력' {...register('docsTitle')} />
				</label>
				<p>* 내용이 없을 시 이력서에 표기되지 않습니다.</p>
			</div>
			<StyledInputs>
				<FileInput inputName='profile.profileImage' size='medium' />
				<label className='input-name'>
					<input type='text' placeholder='이름 입력' {...register('profile.name')} />
				</label>
				<label className='input-job'>
					<input
						type='text'
						placeholder='포지션 입력'
						{...register('profile.position')}
					/>
				</label>
				<div className='contact-wrapper'>
					<Input label='휴대폰 번호' type='text' {...register('profile.phoneNumber')} />
					<Input label='이메일' type='email' {...register('profile.email')} />
				</div>
				<LinkInput links={watch('links')} inputName='links' />
				<TextArea label='자기소개' help {...register('profile.coverLetter')} />
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
			padding: 3px;
			font-weight: bold;
			color: ${({ theme }) => theme.colors.darkGrey};
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
	grid-template-rows: 70px auto 150px;
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
		grid-column: 3 / 5;
		grid-row: 1 / 2;
		display: flex;
		gap: 30px;
		margin-top: 20px;
		label {
			width: 100%;
		}
	}
	& > div:last-of-type {
		grid-column: 3 / 5;
		grid-row: 2 / 3;
		margin-top: 20px;
	}
	label:nth-of-type(3) {
		grid-column: 1 / 5;
		grid-row: 3 / 4;
		margin-top: 20px;
	}
`;
