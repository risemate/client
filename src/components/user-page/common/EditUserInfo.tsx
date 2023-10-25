import useInput from '@hooks/useInput';
import { ChangeEvent, FormEvent, useState } from 'react';
import styled from 'styled-components';

import Button from '@common/Button';
import FileInput from '@common/input/FileInput';
import Input from '@common/input/Input';

export default function EditUserInfo() {
	const [isSelfVerified, setIsSelfVerified] = useState(false);
	const userInfo = {
		name: '홍길동',
		password: 'hello',
		nickaname: '길동이시오다',
		image: '',
		email: 'gildong@gmail.com',
	};
	const {
		warning: passwordWarning,
		changeValue: changePasswordValue,
		checkTarget: checkPasswordTarget,
	} = useInput('', userInfo.password);
	const { inputValue: nickname, changeValue: changeNicknameValue } = useInput(
		userInfo.nickaname,
	);

	const checkPassword = (event: FormEvent) => {
		event.preventDefault();
		checkPasswordTarget(() => {
			setIsSelfVerified(true);
		}, '비밀번호가 틀렸습니다.');
	};

	const changePassword = (event: ChangeEvent<HTMLInputElement>) => {
		changePasswordValue(event.target.value);
	};

	const changeNickname = (event: ChangeEvent<HTMLInputElement>) => {
		changeNicknameValue(event.target.value);
	};

	const changeUserInfo = (event: FormEvent) => {
		event.preventDefault();
	};

	return (
		<StyledEditUserInfo>
			<h3>사용자 정보 수정</h3>
			{isSelfVerified ? (
				<form onSubmit={changeUserInfo}>
					<FileInput label='이미지' image={userInfo.image} size='small' />
					<Input
						label='본명'
						warning='변경할 수 없습니다.'
						type='text'
						value={userInfo.name}
						readOnly
					/>
					<Input
						label='이메일'
						warning='변경할 수 없습니다.'
						type='text'
						value={userInfo.email}
						readOnly
					/>
					<Input
						label='닉네임'
						type='text'
						value={nickname}
						placeholder='닉네임을 입력해주세요.'
						onChange={event => changeNickname(event)}
					/>
					<Button
						variant='navy'
						size='medium'
						type='submit'
						onClick={event => checkPassword(event)}
					>
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
