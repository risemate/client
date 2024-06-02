import React, { useEffect } from 'react';
import { FormProvider } from 'react-hook-form';
import styled from 'styled-components';

import Button from '@common/Button';
import SingleAsyncWrapper from '@components/async-wrapper/SingleAsyncWrapper';
import Container from '@components/layout/Container';
import SaveModal from '@components/modal/SaveModal';

import Category from './components/Category/Category';
import Images from './components/Images/Images';
import Package from './components/Package/Package';
import Profile from './components/Profile/Profile';
import useWriteProduct from './WriteProduct.hook';

export default function WriteProduct() {
	const {
		formId,
		productEditMethods,
		submitProduct,
		preventEnter,
		saveModal,
		validation,
	} = useWriteProduct();

	useEffect(() => {
		validation.invalidCheck();
	}, [validation.isSubmitting]);

	return (
		<Container backgroundColor='lightGrey' padding>
			<SingleAsyncWrapper>
				<FormProvider {...productEditMethods}>
					<StyledForm id={formId} onSubmit={submitProduct} onKeyDown={preventEnter}>
						<Profile />
						<Category />
						<Images />
						<Package />
						<Button variant='navy' size='large' type='button' onClick={saveModal.open}>
							상품 설명 저장
						</Button>
					</StyledForm>
				</FormProvider>
			</SingleAsyncWrapper>
			<SaveModal title='상품' queryKey={saveModal.queryKey} buttonFormId={formId} />
		</Container>
	);
}

const StyledForm = styled.form`
	width: 100%;
	margin: 50px 0 30px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;
