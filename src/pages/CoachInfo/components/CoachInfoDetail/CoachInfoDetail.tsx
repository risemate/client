import {
	IconCheck,
	IconCoin,
	IconComment,
	IconProceeding,
	IconQuestion,
	IconWaiting,
} from '@icons';
import styled from 'styled-components';

import Empty from '@common/Empty';

import PageItem from '../../../../components/user-page/PageItem';
import Withdraw from '../Withdraw';
import useCoachInfoDetail from './CoachInfoDetail.hook';

export default function CoachInfoDetail() {
	const { hasPost, queryParam, changeParam, navigate, displayInfo } =
		useCoachInfoDetail();

	return (
		<>
			{!hasPost && (
				<Empty btnText='게시글 작성하기' onClick={navigate.toProduct}>
					{/* //: 여기 수정 */}
					아직 작성하신 게시글이 없습니다
				</Empty>
			)}
			{hasPost && queryParam.detail && (
				<InfoDetailSection>
					<div>
						<PageItem
							items={[{ name: '보유 캐시', icon: <IconCoin />, state: displayInfo.cash }]}
							buttonEvent={{
								name: '출금 요청하기',
								onClick: changeParam.toWithdraw,
							}}
						/>
						<PageItem
							items={[{ name: '후기', icon: <IconComment />, state: displayInfo.review }]}
							buttonEvent={{ name: '후기 관리하기', onClick: () => alert('hello') }}
						/>
						<PageItem
							items={[{ name: '문의', icon: <IconQuestion />, state: displayInfo.cs }]}
							buttonEvent={{ name: '문의 관리하기', onClick: () => alert('hello') }}
						/>
					</div>
					<div>
						<PageItem
							items={[
								{ name: '응답 대기', icon: <IconWaiting />, state: displayInfo.waiting },
								{
									name: '진행 중',
									icon: <IconProceeding />,
									state: displayInfo.progress,
								},
								{ name: '완료', icon: <IconCheck />, state: displayInfo.complete },
							]}
							buttonEvent={{
								name: '코칭 관리하기',
								onClick: navigate.toManagement,
							}}
						/>
					</div>
				</InfoDetailSection>
			)}
			{queryParam.withdraw && <Withdraw />}
		</>
	);
}

const InfoDetailSection = styled.section`
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
