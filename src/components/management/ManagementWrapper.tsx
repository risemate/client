import styled, { css } from 'styled-components';

import WhiteBoxWrapper from '@components/base-wrappers/WhiteBoxWrapper';
import Container from '@components/layout/Container';

import ExpertCoachingManagement from './ExpertCoachingManagement';
import UserCoachingManagement from './UserCoachingManagement';

interface ManagementWrapperProps {
	isExpert?: boolean;
}

export default function ManagementWrapper({ isExpert = false }: ManagementWrapperProps) {
	return (
		<Container backgroundColor='lightGrey' padding center>
			<WhiteBoxWrapper type='div' customCss={managementWrapperStyle}>
				<ManagementTitle>{isExpert ? '전문가 코칭 관리' : '첨삭 관리'}</ManagementTitle>
				{isExpert ? <ExpertCoachingManagement /> : <UserCoachingManagement />}
			</WhiteBoxWrapper>
		</Container>
	);
}

const managementWrapperStyle = css`
	min-height: 300px;
	height: calc(100vh - 400px);
	padding: 50px;
`;

const ManagementTitle = styled.h2`
	color: ${({ theme }) => theme.colors.navy};
	font-size: ${({ theme }) => theme.fontSizes.medium};
	font-weight: bold;
	margin-bottom: 30px;
`;
