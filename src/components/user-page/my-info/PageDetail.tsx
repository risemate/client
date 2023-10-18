import { useShearchParam } from '@hooks/useShearchParams';
import { IconCheck, IconCoin, IconComment, IconProceeding } from '@icons';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import EditUserInfo from '../common/EditUserInfo';
import PageItem from '../common/PageItem';
import Payment from '../common/Payment';
import Review from '../common/Review';

export default function MyInfoDetail() {
	const { queryParam, changeParam } = useShearchParam('mode');
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
								{ name: '진행 중인 첨삭', icon: <IconProceeding />, state: '0개' },
								{ name: '완료한 첨삭', icon: <IconCheck />, state: '1개' },
							]}
							buttonEvent={{ name: '페이지로 이동', onClick: () => navigate('/resumes') }}
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
