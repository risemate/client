import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import styled from 'styled-components';
import { Auth } from 'types/User';

import Button from '@common/Button';
import FileInput from '@components/input/FileInput';
import Input from '@components/input/Input';

export default function EditUserInfo() {
	const userInfo = {
		name: '홍길동',
		password: 'hello',
		nickaname: '길동이시오다',
		picture: '',
		email: 'gildong@gmail.com',
	};
	const methods = useForm<Auth>({
		mode: 'onSubmit',
		defaultValues: userInfo,
	});

	const { getValues, register, handleSubmit } = methods;

	const changeUserInfo = (data: Auth) => {
		// eslint-disable-next-line
		console.log(data);
	};

	return (
		<FormProvider {...methods}>
			<UserInfoSection>
				<h3>사용자 정보 수정</h3>
				<form onSubmit={handleSubmit(changeUserInfo)}>
					<FileInput label='이미지' inputName='picture' size='small' />
					<Input
						label='본명'
						warning='변경할 수 없습니다.'
						type='text'
						value={getValues('name')}
						readOnly
					/>
					<Input
						label='이메일'
						warning='변경할 수 없습니다.'
						type='text'
						value={getValues('email')}
						readOnly
					/>
					<Input
						label='닉네임'
						type='text'
						placeholder='닉네임을 입력해주세요.'
						{...register('nickname')}
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
