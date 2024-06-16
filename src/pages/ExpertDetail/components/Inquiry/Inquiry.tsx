import React, { useState } from 'react';
import styled from 'styled-components';
import { mockInquiry } from 'types/coach/productData';

import BaseSection from '../BaseSection';
import InquiryForm from './InquiryForm';
import InquiryItem from './InquiryItem';

interface InquiryProps {
	sectionRef: React.RefObject<HTMLElement>;
}

export default function Inquiry({ sectionRef }: InquiryProps) {
	const [openInquiryInputs, setOpenInquiryInputs] = useState<boolean[]>(
		Array(mockInquiry.length).fill(false),
	);
	const isMyProduct = true;

	const handleToggleInquiryInput = (index: number) => {
		setOpenInquiryInputs(prev => prev.map((state, i) => (i === index ? !state : false)));
	};

	return (
		<BaseSection ref={sectionRef}>
			<h3>상품 문의</h3>
			<InquiryWrapper>
				{!isMyProduct && <InquiryForm isMyProduct={isMyProduct} />}
				<ul>
					{mockInquiry.map((inquiry, index) => (
						<InquiryItem
							key={inquiry._id}
							inquiry={inquiry}
							isMyProduct={isMyProduct}
							isOpenInquiryInput={openInquiryInputs[index]}
							onToggleInquiryInput={() => handleToggleInquiryInput(index)}
						/>
					))}
				</ul>
			</InquiryWrapper>
		</BaseSection>
	);
}

const InquiryWrapper = styled.div`
	& > span {
		font-weight: bold;
	}
	& > ul {
		padding: 40px 0;
		display: flex;
		flex-direction: column;
		gap: 40px;
	}
	& > form {
		margin-top: 30px;
	}
`;
