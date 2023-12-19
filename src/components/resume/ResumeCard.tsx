import React, { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Button from '@common/Button';
import Toggle from '@components/input/Toggle';

interface ResumeCardProps {
	ai?: boolean;
}

export default function ResumeCard({ ai = false }: ResumeCardProps) {
	const navigate = useNavigate();
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
		<ResumeCardWrapper>
			<ResumeInfoWrapper>
				<h4>
					홍길동 <span>| 성장하는 프론트엔드 개발자</span>
				</h4>
				<time>2023.08.25</time>
			</ResumeInfoWrapper>
			<Button variant='border' size='full'>
				기본 이력서
			</Button>
			<Button
				variant='mint'
				size='full'
				onClick={() => ai && navigate('/my-info/resumes/100')}
			>
				AI 첨삭 이력서
			</Button>
			{/* <p>AI 첨삭 받은 이력서가 있습니다</p> */}
			{!ai && (
				<>
					<Button variant='blue' size='full'>
						전문가 첨삭 이력서
					</Button>
					{/* <p>아직 전문가 첨삭이 없습니다.</p> */}
					<ToggleWrapper>
						<Toggle name='게시물 공개' checked={postCheck} onChange={changePostCheck} />
						<Toggle
							name='연락처 공개'
							checked={contactCheck}
							onChange={changeContactCheck}
						/>
					</ToggleWrapper>
				</>
			)}
		</ResumeCardWrapper>
	);
}

const ResumeCardWrapper = styled.div`
	width: 330px;
	max-height: 255px;
	flex-shrink: 0;
	border: 1px solid ${({ theme }) => theme.colors.grey};
	border-radius: 10px;
	background: white;
	padding: 20px;
	${({ theme }) => theme.common.flexCenterColumn};
	gap: 10px;
	position: relative;
	p {
		font-size: ${({ theme }) => theme.fontSizes.small};
		color: ${({ theme }) => theme.colors.darkGrey};
		padding: 13.2px;
	}
`;

const ResumeInfoWrapper = styled.div`
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
`;

const ToggleWrapper = styled.div`
	background: ${({ theme }) => theme.colors.lightGrey};
	width: fit-content;
	border-radius: 10px;
	padding: 5px 20px;
`;
