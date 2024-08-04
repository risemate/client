import React from 'react';
import styled from 'styled-components';
import { CoachingExpertResponse } from 'types/coach/coaching';

import Button from '@common/Button';
import Empty from '@common/Empty';

interface ProgressProps {
	progressList: CoachingExpertResponse[];
}

export default function Progress({ progressList }: ProgressProps) {
	const level = 1;
	const progressBarItems = [
		'결제 완료',
		'요청 완료',
		'피드백\n문서 완성\nand\n온/오프 미팅\n완료',
		'첨삭 완료\n및 정산',
	];
	if (progressList.length === 0) {
		return <Empty>현재 진행 중인 첨삭이 없습니다</Empty>;
	}
	return (
		<>
			{progressList.map(progress => (
				<ProgressWrapper key={progress._id}>
					<h4>@ 00님의 이력서 첨삭 코칭</h4>
					<div>
						이력서 Link{' '}
						<Button variant='blue' size='small'>
							바로 가기
						</Button>
					</div>
					<ProgressBarWrapper>
						{progressBarItems.map((item, index) =>
							level >= index + 1 ? (
								<ColoredProgressBar key={index}>
									{item.split('\n').map((text, i) => (
										<React.Fragment key={i}>
											{i > 0 && <br />}
											{text}
										</React.Fragment>
									))}
								</ColoredProgressBar>
							) : (
								<NoColoredProgressBar key={index}>
									{item.split('\n').map((text, i) => (
										<React.Fragment key={i}>
											{i > 0 && <br />}
											{text}
										</React.Fragment>
									))}
								</NoColoredProgressBar>
							),
						)}
					</ProgressBarWrapper>
				</ProgressWrapper>
			))}
		</>
	);
}

const ProgressWrapper = styled.li`
	/* overflow: hidden; */
	& > div:nth-of-type(1) {
		margin: 10px 0;
		button {
			margin-left: 10px;
		}
	}
`;

const ProgressBarWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	p {
		width: 100px;
		height: 100px;
		color: white;
		font-weight: bold;
		border-radius: 50%;
		text-align: center;
		line-height: 20px;
		${({ theme }) => theme.common.flexCenter};
		position: relative;
		&:nth-of-type(3) {
			width: 150px;
			height: 150px;
		}
		&:not(:last-child):after {
			content: '';
			width: 150px;
			height: 10px;
			display: inline-block;
			position: absolute;
			left: 100px;
		}
		&:nth-of-type(3):after {
			left: 150px;
		}
	}
	@media screen and (max-width: 920px) {
		p:not(:last-child):after {
			width: 100px;
		}
	}
`;

const NoColoredProgressBar = styled.p`
	background: ${({ theme }) => theme.colors.grey};
	&:after {
		background: ${({ theme }) => theme.colors.grey};
	}
`;

const ColoredProgressBar = styled.p`
	background: ${({ theme }) => theme.colors.navy};
	&:after {
		background: ${({ theme }) => theme.colors.navy};
	}
`;
