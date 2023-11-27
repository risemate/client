import { useSearchParam } from '@hooks/useSearchParam';
import { IconCheck, IconCoin, IconComment, IconProceeding, IconWaiting } from '@icons';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import PageItem from '../common/PageItem';
import EditUserInfo from './EditUserInfo';
import Payment from './Payment';
import Review from './Review';

export default function MyInfoDetail() {
	const { queryParam, changeParam } = useSearchParam('mode');
	const navigate = useNavigate();

	return (
		<>
			{!queryParam && (
				<StyledPageDetail>
					<div>
						<PageItem
							items={[{ name: '보유 코인', icon: <IconCoin />, state: '220p' }]}
							buttonEvent={{
								name: '결제 내역 보기',
								onClick: () => changeParam('payment'),
							}}
						/>
						<PageItem
							items={[{ name: '내 후기', icon: <IconComment />, state: '1개' }]}
							buttonEvent={{
								name: '후기 관리하기',
								onClick: () => changeParam('review'),
							}}
						/>
					</div>
					<div>
						<PageItem
							items={[
								{ name: '응답 대기', icon: <IconWaiting />, state: '10개' },
								{ name: '진행 중', icon: <IconProceeding />, state: '0개' },
								{ name: '완료', icon: <IconCheck />, state: '1개' },
							]}
							buttonEvent={{
								name: '첨삭 페이지 이동',
								onClick: () => navigate('/resumes'),
							}}
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
