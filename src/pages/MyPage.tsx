import React, { useState } from 'react';
import styled from 'styled-components';
import { MyPageMode } from 'types/Page';

import EditUserInfo from '@components/mypage/EditUserInfo';
import Payment from '@components/mypage/Payment';
import PageDetail from '@components/userpage/PageDetail';
import UserInfo from '@components/userpage/UserInfo';

export default function MyPage() {
	const [mode, setMode] = useState<MyPageMode>('home');
	const changeMode = (newMode: MyPageMode) => {
		setMode(newMode);
	};

	return (
		<StyledPage className='border'>
			<UserInfo page='mypage' changeMode={changeMode} />
			{mode === 'home' && <PageDetail page='mypage' changeMode={changeMode} />}
			{mode === 'edit' && <EditUserInfo />}
			{mode === 'payment' && <Payment />}
		</StyledPage>
	);
}

const StyledPage = styled.div`
	width: 100%;
	height: 600px;
	padding: 50px;
	display: flex;
	section:nth-child(2) {
		width: calc(100% - 250px);
		margin-left: 50px;
	}
	section > h3 {
		font-weight: bold;
		color: ${({ theme }) => theme.colors.navy};
		padding-bottom: 15px;
		border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
	}
	@media screen and (max-width: 990px) {
		flex-direction: column;
		height: initial;
		section:nth-child(2) {
			width: 100%;
			min-height: 300px;
			margin: 0;
		}
		section > h3 {
			margin-top: 30px;
		}
	}
`;
