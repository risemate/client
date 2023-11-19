import useInput from '@hooks/useInput';
import { ChangeEvent, FormEvent, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import styled from 'styled-components';
import { Auth } from 'types/User';

import Button from '@common/Button';
import FileInput from '@common/input/FileInput';
import Input from '@common/input/Input';

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

	const { getValues, watch, register, handleSubmit } = methods;
	const [isSelfVerified, setIsSelfVerified] = useState(false);
	const {
		warning: passwordWarning,
		changeValue: changePasswordValue,
		checkTarget: checkPasswordTarget,
	} = useInput('', userInfo.password);

	const checkPassword = (event: FormEvent) => {
		event.preventDefault();
		checkPasswordTarget(() => {
			setIsSelfVerified(true);
		}, '비밀번호가 틀렸습니다.');
	};

	const changePassword = (event: ChangeEvent<HTMLInputElement>) => {
		changePasswordValue(event.target.value);
	};

	const changeUserInfo = (data: Auth) => {
		// eslint-disable-next-line
		console.log(data);
	};

	return (
		<FormProvider {...methods}>
			<StyledEditUserInfo>
				<h3>사용자 정보 수정</h3>
				{isSelfVerified ? (
					<form onSubmit={handleSubmit(changeUserInfo)}>
						<FileInput
							label='이미지'
							image={watch('picture')}
							inputName='picture'
							size='small'
						/>
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
				) : (
					<form onSubmit={event => checkPassword(event)}>
						<Input
							label='비밀번호'
							warning={passwordWarning}
							type='password'
							placeholder='비밀번호를 입력해주세요.'
							onChange={event => changePassword(event)}
						/>
						<Button variant='navy' size='medium' type='submit'>
							비밀번호 확인
						</Button>
					</form>
				)}
			</StyledEditUserInfo>
		</FormProvider>
	);
}

const StyledEditUserInfo = styled.section`
	width: 100%;
	& > form {
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 30px;
		& > button {
			align-self: center;
		}
	}
	@media screen and (max-width: 990px) {
		& > form {
			gap: 20px;
		}
	}
`;
