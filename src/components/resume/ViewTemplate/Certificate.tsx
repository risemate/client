import React from 'react';
import { Certificate } from 'types/Resume';

import BaseSection from '@components/wrappers/ResumeViewBaseSection';

interface CertificateProps {
	certificates: Certificate[];
}

export default function Certificates({ certificates }: CertificateProps) {
	return (
		<BaseSection>
			<BaseSection.MainTitle>자격증</BaseSection.MainTitle>
			{certificates.map((certificate, index) => (
				<article key={index}>
					<BaseSection.Title>{certificate.certificateName}</BaseSection.Title>
					<BaseSection.BasicInfo>
						<li>{certificate.certificatedAt}</li>
						<li>{certificate.certificateOrganization}</li>
						<li>{certificate.certificateGrade}</li>
					</BaseSection.BasicInfo>
					<BaseSection.Link links={certificate.links} />
				</article>
			))}
		</BaseSection>
	);
}
