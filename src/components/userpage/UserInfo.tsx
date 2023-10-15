import React from 'react';
import styled, { css } from 'styled-components';
import { MyPageMode } from 'types/Page';

import Button from '@common/Button';
import DefaultImage from '@common/DefaultImage';

interface UserInfoProps {
	page: 'mypage' | 'coaching';
	changeMode: (newMode: MyPageMode) => void;
}

// eslint-disable-next-line
export default function UserInfo({ page, changeMode }: UserInfoProps) {
	return (
		<StyledUserInfo>
			<div className='user-wrapper'>
				<div>
					<DefaultImage variant='mint' size='small' />
					<h2>
						홍길동<span className='a11y-hidden'>의 마이페이지</span>
						<br />
						<span className='nickname'>길동이시다</span>
					</h2>
				</div>
				<button type='button' onClick={() => changeMode('edit')}>
					사용자 정보 수정하기 {'>'}
				</button>
			</div>
			<div className='btn-wrapper'>
				<Button variant='navy' size='full'>
					전문가 신청하기
				</Button>
				<Button variant='border' size='full'>
					로그아웃
				</Button>
			</div>
		</StyledUserInfo>
	);
}

const tabletSizeStyle = css`
	@media screen and (max-width: 990px) {
		max-width: 100%;
		padding: 0 0 20px;
		display: flex;
		justify-content: space-between;
		border-right: none;
		border-bottom: 3px solid ${({ theme }) => theme.colors.navy};
		.btn-wrapper {
			margin: 0;
		}
	}
`;

const StyledUserInfo = styled.section`
	max-width: 250px;
	height: 100%;
	padding-right: 50px;
	border-right: 3px solid ${({ theme }) => theme.colors.navy};
	.user-wrapper {
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
	}
	.btn-wrapper {
		margin-top: 245px;
		button:first-child {
			margin-bottom: 10px;
		}
	}
	${tabletSizeStyle}
`;
