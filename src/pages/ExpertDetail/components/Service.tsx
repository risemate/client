import React from 'react';
import { Package as PackageType } from 'types/coach/product';

import BaseSection from './BaseSection';

interface ServiceProps {
	description: string | undefined;
	packages: PackageType | undefined;
}

export default function Service({ description = '', packages }: ServiceProps) {
	return (
		<BaseSection>
			<h3>서비스 설명</h3>
			<p>{description}</p>
			<ul>
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
			</ul>
		</BaseSection>
	);
}
