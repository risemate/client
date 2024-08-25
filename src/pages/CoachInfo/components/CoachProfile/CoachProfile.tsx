// import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

import Button from '@common/Button';

import useCoachProfile from './CoachProfile.hook';

export default function CoachProfile() {
	const { displayAuth } = useCoachProfile();
	return (
		<InfoSection>
			<UserWrapper>
				<h2>
					전문가 {displayAuth.name}
					<span className='a11y-hidden'>의 마이페이지</span>
					<br />
				</h2>
				{/* {displayAuth.hasPost && <Link to='link'>내 게시물 확인하러 가기 {'>'}</Link>} */}
			</UserWrapper>
			<ButtonWrapper>
				<Button variant='blue' size='full' to='/coach-info/docs'>
					전문가 이력서 수정
				</Button>
				<Button variant='blue' size='full' to='/coach-info/product-docs'>
					상품 등록
				</Button>
				<Button variant='navy' size='full' to='/my-info'>
					일반 유저로 전환하기
				</Button>
				<Button variant='border' size='full'>
					로그아웃
				</Button>
			</ButtonWrapper>
		</InfoSection>
	);
}

const tabletSizeStyle = css`
	@media screen and (max-width: 990px) {
		max-width: 100%;
		padding: 0 0 20px;
		border-right: none;
		border-bottom: 3px solid ${({ theme }) => theme.colors.navy};
		flex-direction: row;
		align-items: start;
	}
`;

const InfoSection = styled.section`
	max-width: 250px;
	height: 100%;
	padding-right: 50px;
	border-right: 3px solid ${({ theme }) => theme.colors.navy};
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	${tabletSizeStyle}
`;

const UserWrapper = styled.div`
	h2 {
		color: ${({ theme }) => theme.colors.navy};
		font-size: ${({ theme }) => theme.fontSizes.medium};
		font-weight: bold;
		margin-bottom: 10px;
	}
	& > a {
		color: ${({ theme }) => theme.colors.darkGrey};
	}
`;

const ButtonWrapper = styled.div`
	max-width: 250px;
	button:not(:last-child) {
		margin-bottom: 10px;
	}
`;
