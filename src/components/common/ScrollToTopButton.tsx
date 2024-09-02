import { IconArrowUpLight } from '@icons';
import styled from 'styled-components';

export default function ScrollToTopButton() {
	// 버튼 클릭 시 페이지 최상단으로 스크롤
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};
	return (
		<StyledButton onClick={scrollToTop}>
			<IconArrowUpLight />
		</StyledButton>
	);
}

const StyledButton = styled.button`
	position: fixed;
	bottom: 100px;
	right: 100px;
	width: 50px;
	height: 50px;
	border: ${({ theme }) => theme.colors.navy} solid 2px;
	border-radius: 50%;
	z-index: 50;
	svg {
		color: ${({ theme }) => theme.colors.navy};
		width: 20px;
		height: 20px;
	}
	&:hover {
		background: ${({ theme }) => theme.colors.lighterGrey};
	}
`;
