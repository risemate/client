import { IconCheck } from '@icons';
import { numberWithCommas } from '@utils/helpers';
import React from 'react';
import styled from 'styled-components';
import { Package as PackageType } from 'types/coach/product';

import BaseSection from './BaseSection';

interface ServiceProps {
	description: string | undefined;
	packages: Partial<PackageType> | undefined;
	sectionRef: React.RefObject<HTMLElement>;
}

export default function Service({
	description = '',
	packages,
	sectionRef,
}: ServiceProps) {
	return (
		<BaseSection ref={sectionRef}>
			<h3>서비스 설명</h3>
			<Description>{description}</Description>
			<ServiceList>
				{Object.entries(packages || {}).map(
					([key, value]) =>
						value !== null && (
							<li key={key}>
								<h4>
									{key} {value.packageTitle}
								</h4>
								<p>{value.description}</p>
								<p>{numberWithCommas(value.price)}원</p>
								<ul>
									{value.providerOptions.map((option, index) => (
										<li key={index}>
											<IconCheck /> {option.name}: {option.description}
										</li>
									))}
								</ul>
							</li>
						),
				)}
			</ServiceList>
		</BaseSection>
	);
}

const Description = styled.p`
	padding: 30px 0;
	line-height: 25px;
`;

const ServiceList = styled.ul`
	background: ${({ theme }) => theme.colors.lighterGrey};
	padding: 20px;
	border-radius: 8px;
	& > li {
		margin-bottom: 30px;
	}

	h4 {
		margin-bottom: 10px;
		font-weight: bold;
	}
	p {
		margin: 5px 0;
		color: ${({ theme }) => theme.colors.darkerGrey};
	}

	ul {
		margin-top: 10px;
		padding-left: 10px;
		li {
			margin-bottom: 5px;
			color: ${({ theme }) => theme.colors.darkerGrey};
			display: flex;
			align-items: center;
			gap: 10px;
		}
	}
`;
