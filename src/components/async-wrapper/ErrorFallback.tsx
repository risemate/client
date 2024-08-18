import { getErrorDataByCode } from '#services/errors/errorMessage';
import { IconError } from '@icons';
import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import { FallbackProps } from 'react-error-boundary';
import styled from 'styled-components';

import Button from '@common/Button';

export default function ErrorBoundaryComponent({
	error,
	resetErrorBoundary,
}: FallbackProps) {
	const { reset } = useQueryErrorResetBoundary();
	const errorData = getErrorDataByCode(error);

	// 인증이 필요한 에러일 경우 상위 Boundary로 Error를 전파
	if (errorData.requireLogin) throw error;

	const handleClickReset = () => {
		resetErrorBoundary();
		reset();
	};
	return (
		<ErrorFallbackWrapper>
			<p>
				{errorData?.code} <IconError />
			</p>
			<p>{errorData?.message}</p>
			<Button onClick={handleClickReset} variant='border'>
				재시도
			</Button>
		</ErrorFallbackWrapper>
	);
}

const ErrorFallbackWrapper = styled.div`
	width: 100%;
	height: 100%;
	${({ theme }) => theme.common.flexCenterColumn};
	gap: 10px;
	p:nth-of-type(1) {
		color: ${({ theme }) => theme.colors.navy};
		font-weight: 700;
		font-size: ${({ theme }) => theme.fontSizes.medium};
	}
	p:nth-of-type(2) {
		color: ${({ theme }) => theme.colors.darkGrey};
	}
	svg {
		width: 30px;
		height: 30px;
		color: ${({ theme }) => theme.colors.navy};
	}
`;
