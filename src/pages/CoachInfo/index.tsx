import { css } from 'styled-components';

import WhiteBoxWrapper from '@components/wrappers/WhiteBoxWrapper';

import CoachInfoDetail from './components/CoachInfoDetail';
import CoachProfile from './components/CoachProfile';

export default function CoachInfo() {
	return (
		<WhiteBoxWrapper type='div' customCss={coachInfoWrapperStyle}>
			<CoachProfile />
			<CoachInfoDetail />
		</WhiteBoxWrapper>
	);
}

const coachInfoWrapperStyle = css`
	width: 100%;
	height: 600px;
	padding: 50px;
	display: flex;
	border: 2px solid ${({ theme }) => theme.colors.navy};
	section:nth-child(2) {
		width: calc(100% - 250px);
		margin-left: 50px;
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
