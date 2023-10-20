import React from 'react';
import styled from 'styled-components';

export default function Withdraw() {
	return (
		<StyledWithdraw>
			<h3>출금 요청</h3>
		</StyledWithdraw>
	);
}

const StyledWithdraw = styled.section`
	h3 {
		font-weight: bold;
		color: ${({ theme }) => theme.colors.navy};
		padding-bottom: 15px;
		border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
	}
`;
