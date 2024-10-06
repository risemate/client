import { FormProvider } from 'react-hook-form';
import styled from 'styled-components';
import { AlarmOptionList } from 'types/auth';

import Button from '@common/Button';
import CheckBox from '@components/input/CheckBox';
import FileInput from '@components/input/FileInput';
import Input from '@components/input/Input';
import Modal from '@components/modal/base/Modal';

import useEditUserInfo from './EditUserInfo.hook';

export default function EditUserInfo() {
	const { methods, registerAuth, openModal, submitEditUserInfo, disableSubmit } =
		useEditUserInfo();

	return (
		<FormProvider {...methods}>
			<UserInfoSection>
				<h3>사용자 정보 수정</h3>
				<form onSubmit={submitEditUserInfo()} id='user-info-form'>
					<FileInput label='이미지' inputName='picture' size='small' />
					<Input label='이름' type='text' {...registerAuth.name} />
					<AlarmOptionGroup>
						<span>알림 수신 옵션</span>
						<ul>
							{AlarmOptionList.map(option => (
								<li key={option.value}>
									<CheckBox
										variant='darkerGrey'
										{...registerAuth.alarmOptions[option.value]}
									>
										{option.label}
									</CheckBox>
								</li>
							))}
						</ul>
					</AlarmOptionGroup>
					<Input
						label='이메일'
						warning='변경할 수 없습니다.'
						type='text'
						readOnly
						{...registerAuth.email}
					/>
					<Input
						label='닉네임'
						type='text'
						placeholder='닉네임을 입력해주세요.'
						{...registerAuth.nickname}
					/>
					<Button
						variant='navy'
						size='medium'
						disabled={disableSubmit}
						onClick={openModal}
						type='button'
					>
						정보 수정
					</Button>
				</form>
			</UserInfoSection>
			<Modal
				title='유저 정보 변경'
				queryKey='user-info-update'
				buttonFormId='user-info-form'
			>
				유저 정보를 변경하시겠습니까?
			</Modal>
		</FormProvider>
	);
}

const UserInfoSection = styled.section`
	width: 100%;
	& > form {
		height: 100%;
		display: grid;
		grid-template-columns: 200px auto;
		padding: 30px;
		& > div:nth-of-type(1) {
			grid-column: 1 / 2;
			grid-row: 1 / 3;
		}
		& > label:nth-of-type(1) {
			grid-column: 2 / 3;
			grid-row: 1 / 2;
		}
		& > div:nth-of-type(2) {
			grid-column: 2 / 3;
			grid-row: 2 / 3;
		}
		& > label:nth-of-type(2),
		& > label:nth-of-type(3) {
			grid-column: 1 / 3;
		}
		& > button {
			grid-column: 1 / 3;
			place-self: center;
		}
	}
	@media screen and (max-width: 990px) {
		& > form {
			gap: 20px;
		}
	}
`;

const AlarmOptionGroup = styled.div`
	font-size: ${({ theme }) => theme.fontSizes.small};
	span {
		color: ${({ theme }) => theme.colors.darkGrey};
	}
	ul {
		margin-top: 10px;
		display: flex;
		justify-content: space-between;
	}
`;
