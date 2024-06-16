import { ReactNode, forwardRef } from 'react';
import styled from 'styled-components';

interface BaseSectionProps {
	children: ReactNode;
}

const BaseSection = forwardRef(function BaseSection(
	{ children }: BaseSectionProps,
	ref: React.ForwardedRef<HTMLElement>,
) {
	return <StyledSection ref={ref}>{children}</StyledSection>;
});

const StyledSection = styled.section`
	padding: 30px;
	h3 {
		color: ${({ theme }) => theme.colors.navy};
		font-size: ${({ theme }) => theme.fontSizes.medium};
		font-weight: bold;
	}
`;

export default BaseSection;
