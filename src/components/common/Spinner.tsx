import styled, { css } from 'styled-components';

interface SpinnerProps {
	height?: string;
}

export default function Spinner({ height = '100%' }: SpinnerProps) {
	return (
		<SpinnerWrapper $height={height}>
			<StyledSpinner />
		</SpinnerWrapper>
	);
}

const SpinnerWrapper = styled.div<{ $height: string }>`
	width: 100%;
	height: ${({ $height }) => $height};
	${({ theme }) => theme.common.flexCenter};
`;

const loaderAnimation = css`
	@keyframes mulShdSpin {
		0%,
		100% {
			box-shadow:
				0em -2.6em 0em 0em #313964,
				1.8em -1.8em 0 0em rgba(49, 57, 100, 0.2),
				2.5em 0em 0 0em rgba(49, 57, 100, 0.2),
				1.75em 1.75em 0 0em rgba(49, 57, 100, 0.2),
				0em 2.5em 0 0em rgba(49, 57, 100, 0.2),
				-1.8em 1.8em 0 0em rgba(49, 57, 100, 0.2),
				-2.6em 0em 0 0em rgba(49, 57, 100, 0.5),
				-1.8em -1.8em 0 0em rgba(49, 57, 100, 0.7);
		}
		12.5% {
			box-shadow:
				0em -2.6em 0em 0em rgba(49, 57, 100, 0.7),
				1.8em -1.8em 0 0em #313964,
				2.5em 0em 0 0em rgba(49, 57, 100, 0.2),
				1.75em 1.75em 0 0em rgba(49, 57, 100, 0.2),
				0em 2.5em 0 0em rgba(49, 57, 100, 0.2),
				-1.8em 1.8em 0 0em rgba(49, 57, 100, 0.2),
				-2.6em 0em 0 0em rgba(49, 57, 100, 0.2),
				-1.8em -1.8em 0 0em rgba(49, 57, 100, 0.5);
		}
		25% {
			box-shadow:
				0em -2.6em 0em 0em rgba(49, 57, 100, 0.5),
				1.8em -1.8em 0 0em rgba(49, 57, 100, 0.7),
				2.5em 0em 0 0em #313964,
				1.75em 1.75em 0 0em rgba(49, 57, 100, 0.2),
				0em 2.5em 0 0em rgba(49, 57, 100, 0.2),
				-1.8em 1.8em 0 0em rgba(49, 57, 100, 0.2),
				-2.6em 0em 0 0em rgba(49, 57, 100, 0.2),
				-1.8em -1.8em 0 0em rgba(49, 57, 100, 0.2);
		}
		37.5% {
			box-shadow:
				0em -2.6em 0em 0em rgba(49, 57, 100, 0.2),
				1.8em -1.8em 0 0em rgba(49, 57, 100, 0.5),
				2.5em 0em 0 0em rgba(49, 57, 100, 0.7),
				1.75em 1.75em 0 0em #313964,
				0em 2.5em 0 0em rgba(49, 57, 100, 0.2),
				-1.8em 1.8em 0 0em rgba(49, 57, 100, 0.2),
				-2.6em 0em 0 0em rgba(49, 57, 100, 0.2),
				-1.8em -1.8em 0 0em rgba(49, 57, 100, 0.2);
		}
		50% {
			box-shadow:
				0em -2.6em 0em 0em rgba(49, 57, 100, 0.2),
				1.8em -1.8em 0 0em rgba(49, 57, 100, 0.2),
				2.5em 0em 0 0em rgba(49, 57, 100, 0.5),
				1.75em 1.75em 0 0em rgba(49, 57, 100, 0.7),
				0em 2.5em 0 0em #313964,
				-1.8em 1.8em 0 0em rgba(49, 57, 100, 0.2),
				-2.6em 0em 0 0em rgba(49, 57, 100, 0.2),
				-1.8em -1.8em 0 0em rgba(49, 57, 100, 0.2);
		}
		62.5% {
			box-shadow:
				0em -2.6em 0em 0em rgba(49, 57, 100, 0.2),
				1.8em -1.8em 0 0em rgba(49, 57, 100, 0.2),
				2.5em 0em 0 0em rgba(49, 57, 100, 0.2),
				1.75em 1.75em 0 0em rgba(49, 57, 100, 0.5),
				0em 2.5em 0 0em rgba(49, 57, 100, 0.7),
				-1.8em 1.8em 0 0em #313964,
				-2.6em 0em 0 0em rgba(49, 57, 100, 0.2),
				-1.8em -1.8em 0 0em rgba(49, 57, 100, 0.2);
		}
		75% {
			box-shadow:
				0em -2.6em 0em 0em rgba(49, 57, 100, 0.2),
				1.8em -1.8em 0 0em rgba(49, 57, 100, 0.2),
				2.5em 0em 0 0em rgba(49, 57, 100, 0.2),
				1.75em 1.75em 0 0em rgba(49, 57, 100, 0.2),
				0em 2.5em 0 0em rgba(49, 57, 100, 0.5),
				-1.8em 1.8em 0 0em rgba(49, 57, 100, 0.7),
				-2.6em 0em 0 0em #313964,
				-1.8em -1.8em 0 0em rgba(49, 57, 100, 0.2);
		}
		87.5% {
			box-shadow:
				0em -2.6em 0em 0em rgba(49, 57, 100, 0.2),
				1.8em -1.8em 0 0em rgba(49, 57, 100, 0.2),
				2.5em 0em 0 0em rgba(49, 57, 100, 0.2),
				1.75em 1.75em 0 0em rgba(49, 57, 100, 0.2),
				0em 2.5em 0 0em rgba(49, 57, 100, 0.2),
				-1.8em 1.8em 0 0em rgba(49, 57, 100, 0.5),
				-2.6em 0em 0 0em rgba(49, 57, 100, 0.7),
				-1.8em -1.8em 0 0em #313964;
		}
	}
	@keyframes load5 {
		0%,
		100% {
			box-shadow:
				0em -2.6em 0em 0em #313964,
				1.8em -1.8em 0 0em rgba(49, 57, 100, 0.2),
				2.5em 0em 0 0em rgba(49, 57, 100, 0.2),
				1.75em 1.75em 0 0em rgba(49, 57, 100, 0.2),
				0em 2.5em 0 0em rgba(49, 57, 100, 0.2),
				-1.8em 1.8em 0 0em rgba(49, 57, 100, 0.2),
				-2.6em 0em 0 0em rgba(49, 57, 100, 0.5),
				-1.8em -1.8em 0 0em rgba(49, 57, 100, 0.7);
		}
		12.5% {
			box-shadow:
				0em -2.6em 0em 0em rgba(49, 57, 100, 0.7),
				1.8em -1.8em 0 0em #313964,
				2.5em 0em 0 0em rgba(49, 57, 100, 0.2),
				1.75em 1.75em 0 0em rgba(49, 57, 100, 0.2),
				0em 2.5em 0 0em rgba(49, 57, 100, 0.2),
				-1.8em 1.8em 0 0em rgba(49, 57, 100, 0.2),
				-2.6em 0em 0 0em rgba(49, 57, 100, 0.2),
				-1.8em -1.8em 0 0em rgba(49, 57, 100, 0.5);
		}
		25% {
			box-shadow:
				0em -2.6em 0em 0em rgba(49, 57, 100, 0.5),
				1.8em -1.8em 0 0em rgba(49, 57, 100, 0.7),
				2.5em 0em 0 0em #313964,
				1.75em 1.75em 0 0em rgba(49, 57, 100, 0.2),
				0em 2.5em 0 0em rgba(49, 57, 100, 0.2),
				-1.8em 1.8em 0 0em rgba(49, 57, 100, 0.2),
				-2.6em 0em 0 0em rgba(49, 57, 100, 0.2),
				-1.8em -1.8em 0 0em rgba(49, 57, 100, 0.2);
		}
		37.5% {
			box-shadow:
				0em -2.6em 0em 0em rgba(49, 57, 100, 0.2),
				1.8em -1.8em 0 0em rgba(49, 57, 100, 0.5),
				2.5em 0em 0 0em rgba(49, 57, 100, 0.7),
				1.75em 1.75em 0 0em #313964,
				0em 2.5em 0 0em rgba(49, 57, 100, 0.2),
				-1.8em 1.8em 0 0em rgba(49, 57, 100, 0.2),
				-2.6em 0em 0 0em rgba(49, 57, 100, 0.2),
				-1.8em -1.8em 0 0em rgba(49, 57, 100, 0.2);
		}
		50% {
			box-shadow:
				0em -2.6em 0em 0em rgba(49, 57, 100, 0.2),
				1.8em -1.8em 0 0em rgba(49, 57, 100, 0.2),
				2.5em 0em 0 0em rgba(49, 57, 100, 0.5),
				1.75em 1.75em 0 0em rgba(49, 57, 100, 0.7),
				0em 2.5em 0 0em #313964,
				-1.8em 1.8em 0 0em rgba(49, 57, 100, 0.2),
				-2.6em 0em 0 0em rgba(49, 57, 100, 0.2),
				-1.8em -1.8em 0 0em rgba(49, 57, 100, 0.2);
		}
		62.5% {
			box-shadow:
				0em -2.6em 0em 0em rgba(49, 57, 100, 0.2),
				1.8em -1.8em 0 0em rgba(49, 57, 100, 0.2),
				2.5em 0em 0 0em rgba(49, 57, 100, 0.2),
				1.75em 1.75em 0 0em rgba(49, 57, 100, 0.5),
				0em 2.5em 0 0em rgba(49, 57, 100, 0.7),
				-1.8em 1.8em 0 0em #313964,
				-2.6em 0em 0 0em rgba(49, 57, 100, 0.2),
				-1.8em -1.8em 0 0em rgba(49, 57, 100, 0.2);
		}
		75% {
			box-shadow:
				0em -2.6em 0em 0em rgba(49, 57, 100, 0.2),
				1.8em -1.8em 0 0em rgba(49, 57, 100, 0.2),
				2.5em 0em 0 0em rgba(49, 57, 100, 0.2),
				1.75em 1.75em 0 0em rgba(49, 57, 100, 0.2),
				0em 2.5em 0 0em rgba(49, 57, 100, 0.5),
				-1.8em 1.8em 0 0em rgba(49, 57, 100, 0.7),
				-2.6em 0em 0 0em #313964,
				-1.8em -1.8em 0 0em rgba(49, 57, 100, 0.2);
		}
		87.5% {
			box-shadow:
				0em -2.6em 0em 0em rgba(49, 57, 100, 0.2),
				1.8em -1.8em 0 0em rgba(49, 57, 100, 0.2),
				2.5em 0em 0 0em rgba(49, 57, 100, 0.2),
				1.75em 1.75em 0 0em rgba(49, 57, 100, 0.2),
				0em 2.5em 0 0em rgba(49, 57, 100, 0.2),
				-1.8em 1.8em 0 0em rgba(49, 57, 100, 0.5),
				-2.6em 0em 0 0em rgba(49, 57, 100, 0.7),
				-1.8em -1.8em 0 0em #313964;
		}
	}
`;

const StyledSpinner = styled.span`
	${loaderAnimation}
	font-size: 10px;
	width: 1em;
	height: 1em;
	border-radius: 50%;
	position: relative;
	text-indent: -9999em;
	animation: mulShdSpin 1.1s infinite ease;
	transform: translateZ(0);
`;
