import { css } from 'styled-components';

import WhiteBoxWrapper from '@components/base-wrappers/WhiteBoxWrapper';
import Container from '@components/layout/Container';
import BasicCareerList from '@components/resume-view/BasicCareerList';

import ProductCard from './components/ProductCard';
import useMyProduct from './MyProduct.hook';

export default function MyProduct() {
	const { myProducts } = useMyProduct();
	return (
		<Container backgroundColor='lightGrey' center padding>
			<h2 className='a11y-hidden'>나의 상품 목록</h2>
			<WhiteBoxWrapper type='div' customCss={productWrapperStyle}>
				<BasicCareerList
					title='상품'
					resumes={myProducts}
					createTo='pr'
					CardComponent={ProductCard}
					// selectedId={selectedId.value}
					// updateSelectedId={selectedId.update}
					addNew
				/>
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
