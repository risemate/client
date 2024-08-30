import { getErrorDataByCode } from '#services/errors/errorMessage';
import { IconError } from '@icons';
import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import { FallbackProps } from 'react-error-boundary';
import styled from 'styled-components';

import Button from '@common/Button';

interface ErrorFallbackProps extends FallbackProps {
	height?: string;
}

export default function ErrorFallback({
	error,
	resetErrorBoundary,
	height = '100%',
}: ErrorFallbackProps) {
	const { reset } = useQueryErrorResetBoundary();
	const errorData = getErrorDataByCode(error);

	// 인증이 필요한 에러일 경우 상위 Boundary로 Error를 전파
	if (errorData.requireLogin) throw error;

	const handleClickReset = () => {
		resetErrorBoundary();
		reset();
	};
	return (
		<ErrorFallbackWrapper $height={height}>
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

const ErrorFallbackWrapper = styled.div<{ $height: string }>`
	width: 100%;
	height: ${({ $height }) => $height};
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
