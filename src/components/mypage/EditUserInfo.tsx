import React, { useState } from 'react';
import styled from 'styled-components';

import Button from '@common/Button';
import Input from '@common/Input';

export default function EditUserInfo() {
	// eslint-disable-next-line
	const [isSelfVerified, setIsSelfVerified] = useState(false);
	return (
		<StyledEditUserInfo>
			<h3>사용자 정보 수정</h3>
			<div>
				{isSelfVerified ? (
					<div></div>
				) : (
					<>
						<Input
							label='비밀번호'
							type='password'
							placeholder='비밀번호를 입력해주세요.'
						/>
						<Button variant='navy' size='medium'>
							비밀번호 확인
						</Button>
					</>
				)}
			</div>
		</StyledEditUserInfo>
	);
}

const StyledEditUserInfo = styled.section`
	width: 100%;

	& > div {
		width: 100%;
		min-height: 300px;
		padding-top: 30px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		& > button {
			align-self: center;
		}
	}
`;
