import ResumeFormCard from 'pages/ExpertForm/components/ResumeFormCard';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { CoachingRequestState } from 'types/coach/coaching';

import Button from '@common/Button';
import CheckBox from '@components/input/CheckBox';
import Select from '@components/input/Select';
import TextArea from '@components/input/TextArea';
import RequestFormWrapper from '@components/request-form/RequestFormWrapper/RequestFormWrapper';
import BasicCareerListWrapper from '@components/resume-view/BasicCareerList/BasicCareerListWrapper';
import SingleAsyncWrapper from '@components/suspense/async-wrapper/SingleAsyncWrapper';
import CareerSuspenseList from '@components/suspense/suspense-list/CareerSuspenseList';

import useReviseForm from './ReviseForm.hook';

export default function ReviseForm() {
	const location = useLocation();
	const formState = (location.state as CoachingRequestState) || {};
	const {
		careerType,
		resumeShare,
		message,
		disableSubmit,
		onCancel,
		onSubmit,
		originDocId,
	} = useReviseForm(formState);
	return (
		<RequestFormWrapper title='첨삭 신청폼' onSubmit={onSubmit}>
			<RequestFormWrapper.Content title='선택한 상품 정보'>
				<ProductInfoList>
					<li>{formState.productTitle}</li>
					<li>
						{formState.selectedPackageInfo.packageName} -{' '}
						{formState.selectedPackageInfo.packageTitle}
					</li>
					<li>{formState.selectedPackageInfo.description}</li>
					<li>{formState.selectedPackageInfo.price}</li>
				</ProductInfoList>
			</RequestFormWrapper.Content>
			<RequestFormWrapper.Consent title={`${careerType.selectedText} 공유 동의`}>
				<CheckBox {...resumeShare}>
					첨삭 신청을 위해 본인의 이력서를 공유하는 것에 동의하십니까? 동의하지 않으시면
					첨삭 신청을 할 수 없습니다.
					<br /> 선택된 이력서는 첨삭 이력서로 저장되며, 담당 전문가가 선택하신 서비스에
					따라 첨삭을 진행할 예정입니다.
				</CheckBox>
			</RequestFormWrapper.Consent>
			<RequestFormWrapper.Content title='첨삭 타입 선택'>
				<Select options={careerType.options} />
			</RequestFormWrapper.Content>
			<BasicCareerListWrapper title={careerType.selectedText}>
				<SingleAsyncWrapper height='175px'>
					<CareerSuspenseList
						props={{ docType: 'BASIC', careerType: careerType.value }}
						CardComponent={ResumeFormCard}
						selectedId={originDocId.value}
						updateSelectedId={originDocId.update}
					/>
				</SingleAsyncWrapper>
			</BasicCareerListWrapper>
			<RequestFormWrapper.Content title='메세지'>
				<TextArea {...message} />
			</RequestFormWrapper.Content>
			<RequestFormWrapper.Action>
				<Button variant='mint' size='large' onClick={onCancel} type='button'>
					취소
				</Button>
				<Button variant='blue' size='large' disabled={disableSubmit}>
					첨삭 신청하기
				</Button>
			</RequestFormWrapper.Action>
		</RequestFormWrapper>
	);
}

const ProductInfoList = styled.ul`
	border: 2px solid ${({ theme }) => theme.colors.navy};
	border-radius: 5px;
	padding: 20px;
`;
