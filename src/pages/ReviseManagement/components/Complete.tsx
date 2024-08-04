import styled from 'styled-components';
import { CoachingResponse } from 'types/coach/coaching';

import Button from '@common/Button';
import Empty from '@common/Empty';

interface CompleteProps {
	completeList: CoachingResponse[];
}

export default function Complete({ completeList }: CompleteProps) {
	if (completeList.length === 0) {
		return <Empty>완료된 첨삭이 없습니다.</Empty>;
	}
	return (
		<>
			{completeList.map(complete => (
				<CompleteWrapper key={complete._id}>
					<h4>@ 00님의 이력서 첨삭</h4>
					<time>2023.08.31</time>
					<Button variant='navy' size='medium'>
						이력서 보기
					</Button>
					<Button variant='navy' size='medium'>
						피드백 문서 보기
					</Button>
				</CompleteWrapper>
			))}
		</>
	);
}

const CompleteWrapper = styled.li`
	h4 {
		margin-bottom: 20px;
	}
	time {
		position: absolute;
		top: 30px;
		right: 30px;
		font-size: ${({ theme }) => theme.fontSizes.small};
	}
	button:nth-of-type(1) {
		margin-right: 30px;
	}
`;
