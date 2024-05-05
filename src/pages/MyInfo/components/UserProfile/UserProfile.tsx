import styled, { css } from 'styled-components';

import Button from '@common/Button';
import DefaultImage from '@common/DefaultImage';
import SingleAsyncWrapper from '@components/async-wrapper/SingleAsyncWrapper';

import useUserProfile from './UserProfile.hook';

export default function UserProfile() {
	const { displayAuth, logout, changeParamToEdit, expertButton } = useUserProfile();

	return (
		<UserInfoSection>
			<SingleAsyncWrapper>
				<UpperWrapper>
					<div>
						<DefaultImage variant='mint' size='small' image={displayAuth.picture} />
						<UserWrapper>
							<h2>
								{displayAuth.name} 님<span className='a11y-hidden'>의 마이페이지</span>
							</h2>
							<span className='nickname'>{displayAuth.nickname} </span>
							<span>{displayAuth.email}</span>
						</UserWrapper>
					</div>
					<button type='button' onClick={changeParamToEdit}>
						사용자 정보 수정하기 {'>'}
					</button>
				</UpperWrapper>
				<ButtonWrappper>
					<Button
						variant='navy'
						size='full'
						to={expertButton.to}
						disabled={expertButton.disabled}
					>
						{expertButton.label()}
					</Button>
					<Button variant='border' size='full' onClick={logout}>
						로그아웃
					</Button>
				</ButtonWrappper>
			</SingleAsyncWrapper>
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
	margin-right: 50px;
	${tabletSizeStyle}
`;

const UpperWrapper = styled.div`
	& > div {
		display: flex;
		flex-wrap: wrap;
	}

	& > button {
		color: ${({ theme }) => theme.colors.darkGrey};
		padding: 10px 5px;
		margin-top: 5px;
	}
`;

const UserWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: 10px;
	margin-top: 10px;
	h2 {
		color: ${({ theme }) => theme.colors.navy};
		font-size: ${({ theme }) => theme.fontSizes.medium};
		font-weight: bold;
		line-height: 30px;
		margin-bottom: 10px;
	}
	.nickname {
		font-size: ${({ theme }) => theme.fontSizes.default};
		font-weight: 400;
	}
`;

const ButtonWrappper = styled.div`
	button:first-child {
		margin-bottom: 10px;
	}
`;
