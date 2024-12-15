import { IconCheck } from '@icons';
import ResumeFormCard from 'pages/ExpertForm/components/ResumeFormCard';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { CoachingRequestState } from 'types/coach/coaching';

import Button from '@common/Button';
import CheckBox from '@components/input/CheckBox';
import Select from '@components/input/Select';
import TextArea from '@components/input/TextArea';
import RequestFormWrapper from '@components/request-form/RequestFormWrapper/RequestFormWrapper';
import BasicCareerListWrapper from '@components/resume-view/BasicCareerList/BasicCareerListWrapper';
import SingleAsyncWrapper from '@components/suspense/async-wrapper/SingleAsyncWrapper';
import CareerSuspenseList from '@components/suspense/suspense-component/CareerSuspenseList';

import useReviseForm from './ReviseForm.hook';

export default function ReviseForm() {
	const location = useLocation();
	const formState = (location.state as CoachingRequestState) || {};
	if (!formState?.productId) {
		window.history.back(); //: 수정필요 useNavigate가 안먹힘ㅜ
		return null;
	}
	const {
		careerType,
		resumeShare,
		message,
		disableSubmit,
		onCancel,
		onSubmit,
		originDocId,
	} = useReviseForm(formState);
	const { selectedText, ...careerTypeFields } = careerType;
	return (
		<RequestFormWrapper title='첨삭 신청폼' onSubmit={onSubmit}>
			<RequestFormWrapper.Content title='선택한 상품 정보'>
				<ProductInfoWrapper>
					<h3>
						{formState.productTitle} |{' '}
						<span>
							{formState.selectedPackage} {formState.selectedPackageInfo.packageTitle}
						</span>
					</h3>
					<div>
						<ul>
							<li>{formState.selectedPackageInfo.description}</li>
							{formState.selectedPackageInfo.providerOptions.map(option => (
								<li key={option.name}>
									<IconCheck />
									{option.name}: {option.description}
								</li>
							))}
						</ul>
					</div>
				</ProductInfoWrapper>
			</RequestFormWrapper.Content>
			<RequestFormWrapper.Content title='첨삭 타입 선택'>
				<Select {...careerTypeFields} />
			</RequestFormWrapper.Content>
			<BasicCareerListWrapper title={selectedText}>
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
			<RequestFormWrapper.Consent title={`${selectedText} 공유 동의`}>
				<CheckBox {...resumeShare}>
					첨삭 신청을 위해 본인의 이력서를 공유하는 것에 동의하십니까? 동의하지 않으시면
					첨삭 신청을 할 수 없습니다.
					<br /> 선택된 이력서는 첨삭 이력서로 저장되며, 담당 전문가가 선택하신 서비스에
					따라 첨삭을 진행할 예정입니다.
				</CheckBox>
			</RequestFormWrapper.Consent>
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

const ProductInfoWrapper = styled.div`
	border: 2px solid ${({ theme }) => theme.colors.navy};
	border-radius: 5px;
	padding: 20px;
	h3 {
		font-weight: bold;
		padding-bottom: 15px;
		& > span {
			font-weight: 500;
			color: ${({ theme }) => theme.colors.darkerGrey};
		}
	}
	& > div > ul {
		background: ${({ theme }) => theme.colors.lightGrey};
		font-size: ${({ theme }) => theme.fontSizes.small};
		padding: 10px;
		line-height: 20px;
		& > li:first-child {
			margin-bottom: 10px;
			font-weight: 700;
		}
		& > li {
			display: flex;
			align-items: center;
			gap: 10px;
		}
		& > li svg {
			color: ${({ theme }) => theme.colors.blue};
		}
	}
`;
