import { IconCheck, IconCoin, IconComment, IconProceeding, IconWaiting } from '@icons';
import styled from 'styled-components';

import PageItem from '../../../../components/user-page/PageItem';
import EditUserInfo from '../EditUserInfo/EditUserInfo';
import Payment from '../Payment';
import Review from '../Review';
import useMyInfoDetail from './MyInfoDetail.hook';

export default function MyInfoDetail() {
	const { displayedAuth, changeParam, queryParam, navigateToDocs } = useMyInfoDetail();

	return (
		<>
			{queryParam.detail && (
				<PageDetailSection>
					<div>
						<PageItem
							items={[
								{ name: '보유 코인', icon: <IconCoin />, state: displayedAuth.coin },
							]}
							buttonEvent={{
								name: '결제 내역 보기',
								onClick: changeParam.toPayment,
							}}
						/>
						<PageItem
							items={[
								{ name: '내 후기', icon: <IconComment />, state: displayedAuth.review },
							]}
							buttonEvent={{
								name: '후기 관리하기',
								onClick: changeParam.toReview,
							}}
						/>
					</div>
					<div>
						<PageItem
							items={[
								{
									name: '응답 대기',
									icon: <IconWaiting />,
									state: displayedAuth.waiting,
								},
								{
									name: '진행 중',
									icon: <IconProceeding />,
									state: displayedAuth.progress,
								},
								{ name: '완료', icon: <IconCheck />, state: displayedAuth.complete },
							]}
							buttonEvent={{
								name: '첨삭 관리하기',
								onClick: navigateToDocs,
							}}
						/>
					</div>
				</PageDetailSection>
			)}
			{queryParam.edit && <EditUserInfo />}
			{queryParam.payment && <Payment />}
			{queryParam.review && <Review />}
		</>
	);
}

const PageDetailSection = styled.section`
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
