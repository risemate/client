import { useState } from 'react';
import { css } from 'styled-components';

import WhiteBoxWrapper from '@components/base-wrappers/WhiteBoxWrapper';
import Container from '@components/layout/Container';
import BasicCareerListWrapper from '@components/resume-view/BasicCareerList/BasicCareerListWrapper';
import SingleAsyncWrapper from '@components/suspense/async-wrapper/SingleAsyncWrapper';
import ProductSuspenseList from '@components/suspense/suspense-list/MyProductSuspenseList';

import ProductCard from './components/ProductCard';

export default function MyProduct() {
	const [selectedId, setSelectedId] = useState<string | null>(null);
	const updateSelectedId = (id: string | null) => setSelectedId(id);
	return (
		<Container backgroundColor='lightGrey' center padding>
			<h2 className='a11y-hidden'>나의 상품 목록</h2>
			<WhiteBoxWrapper type='div' customCss={productWrapperStyle}>
				<BasicCareerListWrapper title='상품' createTo='pr' addNew>
					<SingleAsyncWrapper height='240px'>
						<ProductSuspenseList
							CardComponent={ProductCard}
							selectedId={selectedId}
							updateSelectedId={updateSelectedId}
						/>
					</SingleAsyncWrapper>
				</BasicCareerListWrapper>
			</WhiteBoxWrapper>
		</Container>
	);
}

const productWrapperStyle = css`
	min-height: 350px;
	padding: 50px;
	display: flex;
	flex-direction: column;
	ul {
		display: flex;
		gap: 23px;
		flex-wrap: wrap;
	}
`;
