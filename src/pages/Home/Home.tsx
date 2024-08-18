import styled, { css } from 'styled-components';

import Banner from '@common/Banner';
import Button from '@common/Button';
import SingleAsyncWrapper from '@components/async-wrapper/SingleAsyncWrapper';
import ExpertCardList from '@components/experts/ExpertCardList';
import Container from '@components/layout/Container';
import NetworkCardList from '@components/network/NetworkCardList';

import 'normalize.css';

export default function Home() {
	return (
		<Container>
			<Banner variant='home'>
				라메에서 이력서를 <span className='highlight mint'>코칭</span>받아보세요!
			</Banner>
			<NetworkSection>
				<h3>다양한 이력서를 구경해보세요!</h3>
				<SingleAsyncWrapper>
					<NetworkCardList home />
				</SingleAsyncWrapper>
				<Button variant='navy' size='small' to='/networks'>
					이력서 더보기
				</Button>
			</NetworkSection>
			<ExpertSection>
				<h3>이력서/자소서 전문가를 만나보세요!</h3>
				<SingleAsyncWrapper>
					<ExpertCardList home />
					<Button variant='navy' size='small' to='/experts'>
						전문가 더보기
					</Button>
				</SingleAsyncWrapper>
			</ExpertSection>
		</Container>
	);
}

const sectionCommonStyle = css`
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
`;

const NetworkSection = styled.section`
	${sectionCommonStyle}
	height: 320px;
`;

const ExpertSection = styled.section`
	${sectionCommonStyle}
	height: 474px;
	margin-bottom: 80px;
`;
