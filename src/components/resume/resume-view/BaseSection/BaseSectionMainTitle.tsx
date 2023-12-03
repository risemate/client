import React, { ReactNode } from "react";
import styled from "styled-components";

interface MainTitleProps {
    children: ReactNode;
}

export default function BaseSectionMainTitle({children} : MainTitleProps) {
  return <StyledMainTitle>{children}</StyledMainTitle>;
}

const StyledMainTitle = styled.h3`
    font-weight: bold;
    color: ${({ theme }) => theme.colors.navy};
    font-size: ${({ theme }) => theme.fontSizes.medium};
    padding: 20px 0px;
`;