import React from 'react';
import styled from 'styled-components';

import Input from '@components/input/Input';
import TextArea from '@components/input/TextArea';
import EditBaseSection from '@components/resume-edit/EditBaseSection';

import usePackage from './Package.hook';

export default function Package() {
	const { basicPackage, advancedPackage, premiumPackage } = usePackage();
	return (
		<EditBaseSection>
			<EditBaseSection.Title title='패키지' />
			<EditBaseSection.Content gridColumn='3' title='BASIC'>
				<EditBaseSection.Item gridColumn='1/2'>
					<TitlePriceLayout>
						<Input label='패키지 이름' {...basicPackage.packageTitle} />
						<Input label='패키지 가격' {...basicPackage.price} />
					</TitlePriceLayout>
				</EditBaseSection.Item>
				<EditBaseSection.Item gridColumn='2/4'>
					<TextArea label='설명' {...basicPackage.description} height={115} help />
				</EditBaseSection.Item>
			</EditBaseSection.Content>
			<EditBaseSection.Content gridColumn='3' title='ADVANCED'>
				<EditBaseSection.Item gridColumn='1/2'>
					<TitlePriceLayout>
						<Input label='패키지 이름' {...advancedPackage.packageTitle} />
						<Input label='패키지 가격' {...advancedPackage.price} />
					</TitlePriceLayout>
				</EditBaseSection.Item>
				<EditBaseSection.Item gridColumn='2/4'>
					<TextArea label='설명' {...advancedPackage.description} height={115} help />
				</EditBaseSection.Item>
			</EditBaseSection.Content>
			<EditBaseSection.Content gridColumn='3' title='PREMIUM'>
				<EditBaseSection.Item gridColumn='1/2'>
					<TitlePriceLayout>
						<Input label='패키지 이름' {...premiumPackage.packageTitle} />
						<Input label='패키지 가격' {...premiumPackage.price} />
					</TitlePriceLayout>
				</EditBaseSection.Item>
				<EditBaseSection.Item gridColumn='2/4'>
					<TextArea label='설명' {...premiumPackage.description} height={115} help />
				</EditBaseSection.Item>
			</EditBaseSection.Content>
		</EditBaseSection>
	);
}

const TitlePriceLayout = styled.div`
	margin-top: 7px;
	display: flex;
	flex-direction: column;
	gap: 20px;
`;
