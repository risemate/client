import styled from 'styled-components';

import CoachInfoDetail from '@components/user-page/coach-info/CoachInfoDetail';
import CoachProfile from '@components/user-page/coach-info/CoachProfile';

export default function CoachInfo() {
	return (
		<StyledPage className='border'>
			<CoachProfile />
			<CoachInfoDetail />
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
