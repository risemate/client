import { formatDate } from '@utils/helpers';
import { ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import { Career } from 'types/CareerDocument';

import Button from '@common/Button';
import Toggle from '@components/input/Toggle';
import CardWrapper from '@components/wrappers/ResumeCardWrapper';

interface ResumeCardProps {
	career: Career;
}

export default function CareerBasicCard({ career }: ResumeCardProps) {
	// 공개 여부 업데이트
	const [isPublic, setIsPublic] = useState(career.public);
	const [isContact, setIsContact] = useState(career.contactPublic);
	const updateIsPublic = (event: ChangeEvent<HTMLInputElement>) => {
		setIsPublic(event.target.checked);
	};
	const updateIsContact = (event: ChangeEvent<HTMLInputElement>) => {
		setIsContact(event.target.checked);
	};

	return (
		<CardWrapper>
			<CardWrapper.Info time={formatDate(career.createdAt).period}>
				{career.docTitle}
			</CardWrapper.Info>
			<ButtonGorup>
				<Button variant='border' size='full' to={`${career._id}/edit`}>
					수정
				</Button>
				<Button variant='border' size='full' to={`${career._id}`}>
					보기
				</Button>
			</ButtonGorup>
			<Button variant='blue' size='full' to={`${career._id}/revise-docs`}>
				첨삭 중 문서 ({career.childrenDocCount})
			</Button>

			<ToggleWrapper>
				<Toggle name='게시물 공개' checked={isPublic} onChange={updateIsPublic} />
				<Toggle name='연락처 공개' checked={isContact} onChange={updateIsContact} />
			</ToggleWrapper>
		</CardWrapper>
	);
}

const ToggleWrapper = styled.div`
	background: ${({ theme }) => theme.colors.lightGrey};
	width: 100%;
	border-radius: 10px;
	padding: 5px 20px;
	${({ theme }) => theme.common.flexCenter};
`;

const ButtonGorup = styled.div`
	display: flex;
	gap: 10px;
	width: 100%;
`;
