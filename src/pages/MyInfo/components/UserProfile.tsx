import { useSearchParam } from '@hooks/common/useSearchParam';
import { useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';

import Button from '@common/Button';
import DefaultImage from '@common/DefaultImage';

export default function UserProfile() {
	const { changeParam } = useSearchParam('mode');
	const navigate = useNavigate();
	const isExpert = true;
	const logout = () => {
		localStorage.removeItem('rm-checkpoint');
		navigate('/');
	};
	return (
		<UserInfoSection>
			<UserWrapper>
				<div>
					<DefaultImage variant='mint' size='small' />
					<h2>
						홍길동<span className='a11y-hidden'>의 마이페이지</span>
						<br />
						<span className='nickname'>길동이시다</span>
					</h2>
				</div>
				<button type='button' onClick={() => changeParam('edit')}>
					사용자 정보 수정하기 {'>'}
				</button>
			</UserWrapper>
			<ButtonWrappper>
				{isExpert ? (
					<Button variant='navy' size='full' to='/coach-info'>
						전문가로 변환하기
					</Button>
				) : (
					<Button variant='navy' size='full'>
						전문가 신청하기
					</Button>
				)}
				<Button variant='border' size='full' onClick={logout}>
					로그아웃
				</Button>
			</ButtonWrappper>
		</UserInfoSection>
	);
}

const tabletSizeStyle = css`
	@media screen and (max-width: 990px) {
		max-width: 100%;
		padding: 0 0 20px;
		border-right: none;
		border-bottom: 3px solid ${({ theme }) => theme.colors.navy};
		flex-direction: row;
		align-items: end;
	}
`;

const UserInfoSection = styled.section`
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
	div {
		display: flex;
		gap: 10px;
		h2 {
			color: ${({ theme }) => theme.colors.navy};
			font-size: ${({ theme }) => theme.fontSizes.medium};
			font-weight: bold;
			line-height: 30px;
			.nickname {
				font-size: ${({ theme }) => theme.fontSizes.default};
				font-weight: 400;
			}
		}
	}
	& > button {
		color: ${({ theme }) => theme.colors.darkGrey};
		padding: 10px 5px;
		margin-top: 5px;
	}
`;

const ButtonWrappper = styled.div`
	button:first-child {
		margin-bottom: 10px;
	}
`;
