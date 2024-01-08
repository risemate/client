import { useNavigate } from 'react-router-dom';
import styled, { CSSProp } from 'styled-components';

import Banner from '@common/Banner';
import Button from '@common/Button';
import ExpertCardList from '@components/experts/ExpertCardList';
import NetworkCardList from '@components/network/NetworkCardList';

import 'normalize.css';

function Home() {
	const navigate = useNavigate();
	const experts = Array(5).fill('hello');
	const networks = Array(5).fill('h');
	return (
		<>
			<Banner variant='home'>
				<h2>
					라메에서 이력서를 <span className='highlight mint'>코칭</span>받아보세요!
				</h2>
			</Banner>
			<HomeSection>
				<h3>다양한 이력서를 구경해보세요!</h3>
				<NetworkCardList networks={networks.slice(0, 4)} home />
				<Button variant='navy' size='small' to='/networks'>
					이력서 더보기
				</Button>
			</HomeSection>
			<HomeSection $css={{ marginBottom: '80px' }}>
				<h3>이력서/자소서 전문가를 만나보세요!</h3>
				<ExpertCardList experts={experts.slice(0, 4)} home />
				<Button variant='navy' size='small' to='/experts'>
					전문가 더보기
				</Button>
			</HomeSection>
		</>
	);
}

const HomeSection = styled.section<{ $css?: CSSProp }>`
	${({ theme }) => theme.common.minmaxWidth};
	margin: 100px auto 0;
	position: relative;
	padding: 0 32px;
	ul {
		overflow-x: scroll;
		padding: 10px 0;
		-ms-overflow-style: none;
		scrollbar-width: none;
		&::-webkit-scrollbar {
			display: none;
		}
	}
	h3 {
		font-size: ${({ theme }) => theme.fontSizes.medium};
		font-weight: bold;
		color: ${({ theme }) => theme.colors.navy};
		margin-bottom: 45px;
	}
	& > button {
		box-shadow: 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
		position: absolute;
		top: -3px;
		right: 32px;
	}
	${({ $css }) => $css};
`;

export default Home;
