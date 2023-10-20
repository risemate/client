import styled from 'styled-components';

import MyInfoDetail from '@components/user-page/my-info/MyInfoDetail';
import UserProfile from '@components/user-page/my-info/UserProfile';

export default function MyInfoPage() {
	return (
		<StyledPage className='border'>
			<UserProfile />
			<MyInfoDetail />
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
