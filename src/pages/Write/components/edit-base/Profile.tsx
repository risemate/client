import { regexEmail, regexPhone } from '@utils/regex';
import { useController, useFormContext } from 'react-hook-form';
import styled from 'styled-components';
import { Profile as ProfileType } from 'types/career/resume';

import DateInput from '@components/input/DateInput';
import FileInput from '@components/input/FileInput';
import Input from '@components/input/Input';
import LinkInput from '@components/input/LinkInput';
import TextArea from '@components/input/TextArea';
import BaseSection from '@components/resume-edit/EditBaseSection';

export default function Profile() {
	const { register, watch, control } = useFormContext();
	const inputName = (field: keyof ProfileType) => `doc.profile.${field}`;
	const titleFields = useController({
		name: 'doc.docTitle',
		control,
		rules: { required: true },
	});
	const nameFields = useController({
		name: inputName('name'),
		control,
		rules: { required: true },
	});
	const phoneFields = useController({
		name: inputName('phoneNumber'),
		control,
		rules: {
			validate: value => {
				if (!value) return true;
				if (!regexPhone.test(value)) return '휴대폰 형식이 틀렸습니다.';
				return true;
			},
		},
	});
	const emailFields = useController({
		name: inputName('email'),
		control,
		rules: {
			required: '필수 영역입니다.',
			validate: value => {
				if (!value) return '필수 영역입니다.';
				if (!regexEmail.test(value)) return '이메일 형식이 틀렸습니다.';
				return true;
			},
		},
	});
	return (
		<BaseSection>
			<BaseSection.Title title='기본 정보'>
				<DocTitleInput>
					<span className='a11y-hidden'>문서 제목 입력</span>
					<ErrorInput
						type='text'
						placeholder='문서 제목 입력'
						{...titleFields.field}
						error={!!titleFields.fieldState.error}
					/>
				</DocTitleInput>
				<WarningText>* 내용이 없을 시 이력서에 표기되지 않습니다.</WarningText>
			</BaseSection.Title>
			<InputWrapper>
				<FileInput inputName={inputName('profileImage')} size='medium' />
				<NameInputWrapper>
					<ErrorInput
						type='text'
						placeholder='이름 입력'
						{...nameFields.field}
						error={!!nameFields.fieldState.error}
					/>
					<input
						type='text'
						placeholder='포지션 입력'
						{...register(inputName('position'))}
					/>
				</NameInputWrapper>
				<ContactWrapper>
					<Input
						label='휴대폰 번호'
						type='text'
						{...phoneFields.field}
						warning={phoneFields.fieldState.error?.message}
					/>
					<Input
						label='이메일'
						type='email'
						{...emailFields.field}
						warning={emailFields.fieldState.error?.message}
					/>
					<DateInput label='생일' inputName={inputName('birthday')} />
				</ContactWrapper>
				<TextArea label='5줄 표현' help {...register('doc.description')} />
				<LinkInput links={watch(inputName('links'))} inputName={inputName('links')} />
			</InputWrapper>
		</BaseSection>
	);
}

export const DocTitleInput = styled.label`
	input {
		width: 300px;
		padding: 3px;
		font-weight: bold;
		color: ${({ theme }) => theme.colors.darkGrey};
		border-radius: 5px;
	}
	input::placeholder {
		color: ${({ theme }) => theme.colors.grey};
		font-weight: bold;
	}
`;

export const WarningText = styled.p`
	color: red;
	font-weight: 200;
	margin-left: auto;
	font-size: ${({ theme }) => theme.fontSizes.small};
`;

const NameInputWrapper = styled.div`
	font-weight: bold;
	grid-column: 2 / 3;
	grid-row: 1 / 2;
	margin-top: 15px;
	input {
		width: 100%;
		padding: 5px;
		font-weight: bold;
		color: ${({ theme }) => theme.colors.darkGrey};
		border-radius: 10px;
	}
	input:first-child {
		font-size: ${({ theme }) => theme.fontSizes.large};
	}
	input:nth-child(2) {
		margin-top: 10px;
		color: ${({ theme }) => theme.colors.darkGrey};
	}
`;

const ErrorInput = styled.input<{ error: boolean }>`
	${({ error }) => error && 'border: 0.5px solid red'};
`;

const ContactWrapper = styled.div`
	grid-column: 3 / 5;
	display: flex;
	flex-direction: column;
	gap: 20px;
	margin-top: 20px;
`;

export const InputWrapper = styled.div`
	display: grid;
	grid-template-columns: 160px 0.8fr 1fr;
	gap: 5px 20px;
	& > div:nth-child(1) {
		grid-column: 1 / 2;
		grid-row: 1 / 3;
	}
	& > div:last-of-type {
		grid-column: 1 / 5;
		grid-row: 4 / 5;
		margin-top: 20px;
	}
	& > label:last-of-type {
		grid-column: 1 / 5;
		grid-row: 3 / 4;
		margin-top: 20px;
	}
`;
