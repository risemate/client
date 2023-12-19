import React from 'react';
import styled from 'styled-components';
import { Complete as CompleteType } from 'types/Coach';

import Button from '@common/Button';

interface CompleteProps {
	complete: CompleteType;
}

// eslint-disable-next-line
export default function Complete({ complete }: CompleteProps) {
	return (
		<CompleteWrapper>
			<h4>@ 00님의 이력서 첨삭</h4>
			<time>2023.08.31</time>
			<Button variant='navy' size='medium'>
				이력서 보기
			</Button>
			<Button variant='navy' size='medium'>
				피드백 문서 보기
			</Button>
		</CompleteWrapper>
	);
}

const CompleteWrapper = styled.div`
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
