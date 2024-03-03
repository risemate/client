import React from 'react';
import { FormProvider } from 'react-hook-form';
import styled from 'styled-components';

import Button from '@common/Button';
import FileInput from '@components/input/FileInput';
import Input from '@components/input/Input';

import useEditUserInfo from './EditUserInfo.hook';

export default function EditUserInfo() {
	const { methods, registerAuth, submitEditUserInfo } = useEditUserInfo();

	return (
		<FormProvider {...methods}>
			<UserInfoSection>
				<h3>사용자 정보 수정</h3>
				<form onSubmit={submitEditUserInfo()}>
					<FileInput label='이미지' inputName='picture' size='small' />
					<Input label='이름' type='text' {...registerAuth.name} />
					<Input
						label='이메일'
						warning='변경할 수 없습니다.'
						type='text'
						readOnly
						{...registerAuth.email}
					/>
					<Input
						label='닉네임'
						type='text'
						placeholder='닉네임을 입력해주세요.'
						{...registerAuth.nickname}
					/>
					<Button variant='navy' size='medium' type='submit'>
						정보 수정
					</Button>
				</form>
			</UserInfoSection>
		</FormProvider>
	);
}

const UserInfoSection = styled.section`
	width: 100%;
	& > form {
		height: 100%;
		display: grid;
		grid-template-columns: 200px auto;
		padding: 30px;
		& > label:nth-of-type(2),
		& > label:nth-of-type(3) {
			grid-column: 1 / 3;
		}
		& > button {
			grid-column: 1 / 3;
			place-self: center;
		}
	}
	@media screen and (max-width: 990px) {
		& > form {
			gap: 20px;
		}
	}
`;
