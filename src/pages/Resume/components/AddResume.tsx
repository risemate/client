import { IconAdd } from '@icons';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Container from '@components/layout/Container';

export default function AddResume() {
	const navigate = useNavigate();
	return (
		<Container>
			<ResumeAddResume type='button' onClick={() => navigate('/write?redirect=re')}>
				<IconAdd />
				<p>새 이력서 추가</p>
			</ResumeAddResume>
		</Container>
	);
}

const ResumeAddResume = styled.button`
	width: 330px;
	min-height: 215px;
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
