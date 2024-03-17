import React from 'react';
// import { BaseSectionMain } from './BaseSection';
import { Package as PackageType } from 'types/coach/coach';

import BaseSection from './BaseSection';

interface ServiceProps {
	description: string;
	packages: PackageType;
}

export default function Service({ description, packages }: ServiceProps) {
	return (
		<BaseSection>
			<h3>서비스 설명</h3>
			<p>{description}</p>
			<ul>
				{Object.entries(packages).map(
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
			</ul>
		</BaseSection>
	);
}
