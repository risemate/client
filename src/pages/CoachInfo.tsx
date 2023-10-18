import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { MyPageMode } from 'types/Page';

import CoachInfoDetail from '@components/user-page/coach-info/PageDetail';
import EditUserInfo from '@components/user-page/common/EditUserInfo';
import Payment from '@components/user-page/common/Payment';
import Review from '@components/user-page/common/Review';
import MyInfoDetail from '@components/user-page/my-info/PageDetail';
import UserInfo from '@components/user-page/my-info/UserInfo';

export default function CaochInfo() {
	const [searchParams, setSearchParams] = useSearchParams('');
	const mode = searchParams.get('mode');
	const changeMode = (newMode: MyPageMode) => {
		setSearchParams({ mode: newMode });
	};

	return (
		<StyledPage className='border'>
			<UserInfo />
			{<CoachInfoDetail />}
			{mode === 'edit' && <EditUserInfo />}
			{mode === 'payment' && <Payment />}
			{mode === 'review' && <Review />}
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
