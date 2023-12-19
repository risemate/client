import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Feedback } from 'types/Resume';
import { mockResume } from 'types/Resume/data';

import ResumeNav from '@common/ResumeNav';
import ResumeTemplate from '@components/resume/ResumeTemplate';

export default function ResumeView() {
	const { id } = useParams();
	const navigate = useNavigate();
	const resumeNavItems = [
		{ name: '이력서 수정', onClick: () => navigate(`resume/edit/${id}`) },
		{ name: 'AI 첨삭 받기', onClick: () => alert('hi') },
		{ name: '전문가 찾아보기', onClick: () => alert('hi') },
	];
	const feedback: Feedback = {
		notice:
			'안녕하세요 00님! 기다려주셔서 감사합니다. 요청주신 이력서 첨삭이 끝났습니다. 각 섹션에 관해 피드백과 그 피드백을 토대로 변경된 이력서 내용입니다. 변경된 내용을 확인하고 수정한 다음 해당 내용으로 교체할 수 있습니다',
		total:
			'해당 이력서에 관해 전체적인 피드백입니다. 해당 이력서에 관해 전체적인 피드백입니다. 해당 이력서에 관해 전체적인 피드백입니다. 해당 이력서에 관해 전체적인 피드백입니다. 해당 이력서에 관해 전체적인 피드백입니다.',
		coverLetter:
			'해당 이력서의 자기소개에 대한 피드백입니다. 해당 이력서의 자기소개에 대한 피드백입니다. 해당 이력서의 자기소개에 대한 피드백입니다. 해당 이력서의 자기소개에 대한 피드백입니다. 해당 이력서의 자기소개에 대한 피드백입니다.',
		workExperience:
			'해당 이력서의 경력에 대한 피드백입니다. 해당 이력서의 경력에 대한 피드백입니다. 해당 이력서의 경력에 대한 피드백입니다. 해당 이력서의 경력에 대한 피드백입니다. 해당 이력서의 경력에 대한 피드백입니다.',
		project:
			'해당 이력서의 프로젝트에 대한 피드백입니다. 해당 이력서의 프로젝트에 대한 피드백입니다. 해당 이력서의 프로젝트에 대한 피드백입니다. 해당 이력서의 프로젝트에 대한 피드백입니다. 해당 이력서의 프로젝트에 대한 피드백입니다.',
		education:
			'해당 이력서의 교육에 대한 피드백입니다. 해당 이력서의 교육에 대한 피드백입니다. 해당 이력서의 교육에 대한 피드백입니다. 해당 이력서의 교육에 대한 피드백입니다. 해당 이력서의 교육에 대한 피드백입니다. 해당 이력서의 교육에 대한 피드백입니다.',
		activity:
			'해당 이력서의 대외교육에 대한 피드백입니다. 해당 이력서의 교육에 대한 피드백입니다. 해당 이력서의 교육에 대한 피드백입니다. 해당 이력서의 교육에 대한 피드백입니다. 해당 이력서의 교육에 대한 피드백입니다.',
	};
	return (
		<>
			<ResumeTemplate resume={mockResume.doc} feedback={feedback} />
			<ResumeNav resumeNavItems={resumeNavItems} />
		</>
	);
}
