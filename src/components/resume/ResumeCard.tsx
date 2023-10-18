import React, { ChangeEvent, useState } from 'react';
import styled from 'styled-components';

import Button from '@common/Button';

import Toggle from './Toggle';

export default function ResumeCard() {
	const publicPost = true;
	const publicContact = false;
	const [postCheck, setPostCheck] = useState(publicPost);
	const [contactCheck, setContactCheck] = useState(publicContact);
	const changePostCheck = (event: ChangeEvent<HTMLInputElement>) => {
		setPostCheck(event.target.checked);
	};
	const changeContactCheck = (event: ChangeEvent<HTMLInputElement>) => {
		setContactCheck(event.target.checked);
	};

	return (
		<StyledResumeCard>
			<div>
				<h4>
					홍길동 <span>| 성장하는 프론트엔드 개발자</span>
				</h4>
				<time>2023.08.25</time>
			</div>
			<Button variant='border' size='full'>
				기본 이력서
			</Button>
			<Button variant='mint' size='full'>
				AI 첨삭 이력서
			</Button>
			<Button variant='blue' size='full'>
				전문가 첨삭 이력서
			</Button>
			{/* <p>아직 전문가 첨삭이 없습니다.</p> */}
			<div className='toggle-wrapper'>
				<Toggle name='게시물 공개' checked={postCheck} onChange={changePostCheck} />
				<Toggle name='연락처 공개' checked={contactCheck} onChange={changeContactCheck} />
			</div>
		</StyledResumeCard>
	);
}

const StyledResumeCard = styled.div`
	width: 330px;
	height: 255px;
	flex-shrink: 0;
	border: 1px solid ${({ theme }) => theme.colors.grey};
	border-radius: 10px;
	background: white;
	padding: 20px;
	${({ theme }) => theme.common.flexCenterColumn};
	gap: 10px;
	position: relative;
	& > div {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 10px;
		h4 {
			${({ theme }) => theme.common.ellipsisOneLine};
			span {
				font-size: ${({ theme }) => theme.fontSizes.small};
			}
		}
		time {
			font-size: ${({ theme }) => theme.fontSizes.small};
			color: ${({ theme }) => theme.colors.darkGrey};
		}
	}
	p {
		font-size: ${({ theme }) => theme.fontSizes.small};
		color: ${({ theme }) => theme.colors.darkGrey};
		padding: 13.2px;
	}
	.toggle-wrapper {
		background: ${({ theme }) => theme.colors.lightGrey};
		width: fit-content;
		border-radius: 10px;
		padding: 5px 20px;
	}
`;
