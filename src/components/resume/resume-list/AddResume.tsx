import { IconAdd } from '@icons';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function AddResume() {
	const navigate = useNavigate();
	return (
		<StyledAddResume type='button' onClick={() => navigate('new')}>
			<IconAdd />
			<p>새 이력서 추가</p>
		</StyledAddResume>
	);
}

const StyledAddResume = styled.button`
	width: 330px;
	height: 255px;
	flex-shrink: 0;
	border: 1px solid ${({ theme }) => theme.colors.grey};
	border-radius: 10px;
	background: white;
	padding: 20px;
	svg {
		color: ${({ theme }) => theme.colors.darkGrey};
		width: 100px;
		height: 100px;
	}
	p {
		color: ${({ theme }) => theme.colors.darkGrey};
		font-weight: bold;
	}
`;
