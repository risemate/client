import { css } from 'styled-components';

import WhiteBoxWrapper from '@components/wrappers/WhiteBoxWrapper';

import MyInfoDetail from './components/MyInfoDetail';
import UserProfile from './components/UserProfile';

export default function MyInfoPage() {
	return (
		<WhiteBoxWrapper type='div' customCss={myinfoStyle}>
			<UserProfile />
			<MyInfoDetail />
		</WhiteBoxWrapper>
	);
}

const myinfoStyle = css`
	width: 100%;
	height: 600px;
	padding: 50px;
	display: flex;
	border: 2px solid ${({ theme }) => theme.colors.navy};
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
