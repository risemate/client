import React from 'react';
import styled from 'styled-components';

import FileInput from '@components/input/FileInput';
import Input from '@components/input/Input';
import TextArea from '@components/input/TextArea';
import BaseSection from '@components/resume-edit/EditBaseSection/EditBaseSection';

import useProfile from './Profile.hook';

export default function Profile() {
	const { productTitleField, productTitleError, subTitleField, descriptionField } =
		useProfile();
	return (
		<BaseSection>
			<BaseSection.Title title='상품 기본 정보'>
				<DocTitleInput>
					<span className='a11y-hidden'>문서 제목 입력</span>
					<ErrorInput
						type='text'
						placeholder='문서 제목 입력'
						{...productTitleField}
						$error={!!productTitleError}
					/>
				</DocTitleInput>
				<WarningText>* 내용이 없을 시 상품 설명에 표기되지 않습니다.</WarningText>
			</BaseSection.Title>
			<InputWrapper>
				<FileInput inputName='coverImage' size='medium' />
				<div>
					<Input label='한 줄 소개' {...subTitleField} />
					<TextArea label='간단 설명' help {...descriptionField} />
				</div>
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

const ErrorInput = styled.input<{ $error: boolean }>`
	${({ $error }) => $error && 'border: 0.5px solid red'};
`;

const InputWrapper = styled.div`
	display: grid;
	grid-template-columns: 160px auto;
	gap: 5px 20px;
	& > div > label:first-child {
		margin-bottom: 20px;
	}
`;

export const WarningText = styled.p`
	color: red;
	font-weight: 200;
	margin-left: auto;
	font-size: ${({ theme }) => theme.fontSizes.small};
`;
