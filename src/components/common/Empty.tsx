import React from 'react';
import styled from 'styled-components';

import Button from './Button';

interface EmptyProps {
	name: string;
	moveToLink: () => void;
}

export default function Empty({ name, moveToLink }: EmptyProps) {
	return (
		<EmptySection>
			<span />
			<h3>아직 작성하신 {name} 없어요!</h3>
			<Button variant='blue' onClick={() => moveToLink()}>
				{name.slice(0, -1)} 작성하기 ➔
			</Button>
		</EmptySection>
	);
}

const EmptySection = styled.section`
	${({ theme }) => theme.common.flexCenterColumn};
	gap: 20px;
	span {
		display: inline-block;
		outline: 5px dashed ${({ theme }) => theme.colors.navy};
		border-radius: 10px;
		width: 50px;
		height: 50px;
	}
	h3 {
		font-size: ${({ theme }) => theme.fontSizes.medium};
		color: ${({ theme }) => theme.colors.navy};
		font-weight: bold;
	}
`;
