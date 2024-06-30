import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import BaseSection from '../BaseSection';
import useInquiry from './Inquiry.hook';
import InquiryForm from './InquiryForm/InquiryForm';
import InquiryItem from './InquiryItem';

interface InquiryProps {
	sectionRef: React.RefObject<HTMLElement>;
	isMyProduct: boolean;
}

export default function Inquiry({ sectionRef, isMyProduct }: InquiryProps) {
	const { id } = useParams();
	const { cs, openInquiryInputs, handleToggleInquiryInput, createCs } = useInquiry(
		id || '',
	);

	return (
		<BaseSection ref={sectionRef}>
			<h3>상품 문의</h3>
			<InquiryWrapper>
				{!isMyProduct && (
					<InquiryForm isMyProduct={isMyProduct} submitCallback={createCs} />
				)}
				<ul>
					{cs.map((inquiry, index) => (
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
