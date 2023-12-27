import { formatDate } from '@utils/helpers';
import React, { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Variant } from 'types/Button';
import { Career, DocType } from 'types/CareerDocument';
import { Resume as ResumeType } from 'types/Resume';

export default function useResumeCard(resume: Career<ResumeType>) {
	const navigate = useNavigate();

	// 보이는 resume 요소
	const displayResume = {
		docTitle: resume.docTitle || (
			<React.Fragment>
				{resume.doc.profile.name}
				<span> | {resume.doc.profile.position}</span>
			</React.Fragment>
		),
		createdAt: formatDate(resume.createdAt).period,
		updatedAt: formatDate(resume.updatedAt).period,
	};

	// 공개 여부 업데이트
	const [isPublic, setIsPublic] = useState(resume.public);
	const [isContact, setIsContact] = useState(resume.doc.public);
	const updateIsPublic = (event: ChangeEvent<HTMLInputElement>) => {
		setIsPublic(event.target.checked);
	};
	const updateIsContact = (event: ChangeEvent<HTMLInputElement>) => {
		setIsContact(event.target.checked);
	};
	const publicness = {
		isPublic,
		updateIsPublic,
		isContact,
		updateIsContact,
	};

	// 버튼 클릭시 이벤트
	const clickDefaultButton = () => navigate(`/my-info/resumes/${resume._id}`);
	const clickEditingButton = () => navigate(`/my-info/resumes/${resume._id}/history`);

	const clickHandler = {
		clickDefaultButton,
		clickEditingButton,
	};

	// EditCard 특정 정보
	type TagInfoType = {
		[K in DocType]: {
			name: string;
			color: Variant;
		};
	};

	const tagInfo: TagInfoType = {
		BASIC: { name: '원본', color: 'navy' },
		AI: { name: 'AI', color: 'mint' },
		COACHING: { name: '전문가', color: 'blue' },
	};

	const displayEditResume = {
		tagInfo: tagInfo[resume.docType],
		resumeInfo: 'hello',
	};

	return {
		displayResume,
		publicness,
		clickHandler,
		displayEditResume,
	};
}
