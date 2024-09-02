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
			<p>{description}</p>
			<ServiceList>
				{Object.entries(packages || {}).map(
					([key, value]) =>
						value !== null && (
							<li key={key}>
								<h4>{key}</h4>
								<p>{value.packageTitle}</p>
								<p>{value.description}</p>
								<p>{value.price}</p>
								<ul>
									{value.providerOptions.map((option, index) => (
										<li key={index}>{option.name}</li>
									))}
								</ul>
							</li>
						),
				)}
			</ServiceList>
		</BaseSection>
	);
}

const ServiceList = styled.ul``;
