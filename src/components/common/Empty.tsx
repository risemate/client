import { IconFileOff } from '@icons';
import React, { ReactNode } from 'react';
import styled from 'styled-components';

import Button from './Button';

interface EmptyProps {
	children?: ReactNode;
	btnText?: string;
	onClick?: (() => void) | undefined;
}

export default function Empty({
	children = <>불러올 데이터가 없습니다</>,
	btnText,
	onClick = undefined,
}: EmptyProps) {
	return (
		<EmptyWrapper>
			<IconFileOff />
			<p>{children}</p>
			{btnText && (
				<Button variant='blue' onClick={onClick}>
					{btnText}
				</Button>
			)}
		</EmptyWrapper>
	);
}

const EmptyWrapper = styled.div`
	${({ theme }) => theme.common.flexCenterColumn};
	gap: 20px;
	flex: 1;
	padding: 30px 0;
	svg {
		width: 50px;
		height: 50px;
		color: ${({ theme }) => theme.colors.navy};
	}
	p {
		font-size: ${({ theme }) => theme.fontSizes.medium};
		color: ${({ theme }) => theme.colors.navy};
		font-weight: bold;
	}
`;
