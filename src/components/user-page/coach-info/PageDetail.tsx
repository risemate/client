import { useShearchParam } from '@hooks/useShearchParams';
import {
	IconCheck,
	IconCoin,
	IconComment,
	IconProceeding,
	IconQuestion,
	IconWaiting,
} from '@icons';
import styled from 'styled-components';

import EditUserInfo from '../common/EditUserInfo';
import PageItem from '../common/PageItem';
import Payment from '../common/Payment';
import Review from '../common/Review';

export default function CoachInfoDetail() {
	const { queryParam } = useShearchParam('mode');

	return (
		<>
			{!queryParam && (
				<StyledPageDetail>
					<div>
						<PageItem
							items={[{ name: '보유 캐시', icon: <IconCoin />, state: '100,000' }]}
							buttonEvent={{ name: '출금 요청하기', onClick: () => alert('hello') }}
						/>
						<PageItem
							items={[{ name: '후기', icon: <IconComment />, state: '100개' }]}
							buttonEvent={{ name: '후기 관리하기', onClick: () => alert('hello') }}
						/>
						<PageItem
							items={[{ name: '문의', icon: <IconQuestion />, state: '100개' }]}
							buttonEvent={{ name: '문의 관리하기', onClick: () => alert('hello') }}
						/>
					</div>
					<div>
						<PageItem
							items={[
								{ name: '응답 대기', icon: <IconWaiting />, state: '10개' },
								{ name: '진행 중', icon: <IconProceeding />, state: '10개' },
								{ name: '완료', icon: <IconCheck />, state: '10개' },
							]}
							buttonEvent={{ name: '페이지로 이동', onClick: () => alert('hello') }}
						/>
					</div>
				</StyledPageDetail>
			)}

			{queryParam === 'edit' && <EditUserInfo />}
			{queryParam === 'payment' && <Payment />}
			{queryParam === 'review' && <Review />}
		</>
	);
}

const StyledPageDetail = styled.section`
	${({ theme }) => theme.common.flexCenterColumn};
	justify-content: space-between;
	& > div:first-child {
		border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
		padding: 30px 0 50px;
	}
	& > div:nth-child(2) {
		padding: 50px 0 30px;
	}
	& > div {
		height: calc(100% / 2);
		width: 100%;
		${({ theme }) => theme.common.flexCenter};
	}
	@media screen and (max-width: 990px) {
		& > div:first-child {
			padding: 50px 0;
		}
		& > div:nth-child(2) {
			padding: 50px 0 0;
		}
	}
`;
