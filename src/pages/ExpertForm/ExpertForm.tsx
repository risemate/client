import React from 'react';

import Button from '@common/Button';
import CheckBox from '@components/input/CheckBox';
import TextArea from '@components/input/TextArea';
import RequestFormWrapper from '@components/request-form/RequestFormWrapper/RequestFormWrapper';
import BasicCareerList from '@components/resume-view/BasicCareerList';

import ResumeFormCard from './components/ResumeFormCard';
import useExpertForm from './ExpertForm.hook';

export default function ExpertForm() {
	const { resumeShare, resumes, message, resumeId, disableSubmit, onSubmit, onCancel } =
		useExpertForm();
	return (
		<RequestFormWrapper title='전문가 신청폼' onSubmit={onSubmit}>
			<RequestFormWrapper.Consent title='이력서 공유 동의'>
				<CheckBox {...resumeShare}>
					전문가 신청을 위해 본인 이력서를 공유하는 것을 동의합니까? 동의하지 않으면
					전문가 신청을 할 수 없습니다.
					<br /> 선택된 이력서는 전문가 이력서로 저장이 되며 추후 수정이 가능합니다.
				</CheckBox>
			</RequestFormWrapper.Consent>
			<BasicCareerList
				title='이력서'
				resumes={resumes}
				CardComponent={ResumeFormCard}
				selectedId={resumeId.value}
				updateSelectedId={resumeId.update}
			/>
			<RequestFormWrapper.Message title='이력서 첨삭 경력 및 추가 메시지'>
				<TextArea
					placeholder='이력서 첨삭 경력 및 원하는 메세지가 있으면 추가해주세요.'
					{...message}
				/>
			</RequestFormWrapper.Message>
			<RequestFormWrapper.Note>
				<ul>
					<li>시간</li>
					<li>1. 약 1~3일 걸립니다.</li>
				</ul>
			</RequestFormWrapper.Note>
			<RequestFormWrapper.Action>
				<Button variant='blue' size='large' disabled={disableSubmit()}>
					전문가 신청하기
				</Button>
				<Button variant='mint' size='large' onClick={onCancel} type='button'>
					취소
				</Button>
			</RequestFormWrapper.Action>
		</RequestFormWrapper>
	);
}
