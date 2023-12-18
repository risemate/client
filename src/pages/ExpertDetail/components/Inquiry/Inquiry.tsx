import React, { useState } from 'react';
import styled from 'styled-components';
import { mockInquiry } from 'types/Product/data';

import BaseSection from '../BaseSection';
import InquiryForm from './InquiryForm';
import InquiryItem from './InquiryItem';

export default function Inquiry() {
	const [openInquiryInputs, setOpenInquiryInputs] = useState<boolean[]>(
		Array(mockInquiry.length).fill(false),
	);
	const isMyProduct = true;

	const handleToggleInquiryInput = (index: number) => {
		setOpenInquiryInputs(prev => prev.map((state, i) => (i === index ? !state : false)));
	};

	return (
		<BaseSection>
			<h3>상품 문의</h3>
			<StyledInquiry>
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
			</StyledInquiry>
		</BaseSection>
	);
}

const StyledInquiry = styled.div`
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
