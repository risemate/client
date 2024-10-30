import { Certificate as CertificateType } from 'types/career/resume';

import ResumeViewBaseSection from '@components/resume-view/ResumeViewBaseSection/ResumeViewBaseSection';

import ReviseTemplate from './ReviseTemplate';

interface CertificateReviseProps {
	certificates: CertificateType[] | null;
}

export default function CertificateRevise({ certificates }: CertificateReviseProps) {
	if (!certificates || certificates.length === 0) {
		return null;
	}
	return (
		<ReviseTemplate title='교육' field='certificates'>
			{certificates.map((certificate, index) => (
				<article key={index}>
					<ResumeViewBaseSection.Title>
						{certificate.certificateName}
					</ResumeViewBaseSection.Title>
					<ResumeViewBaseSection.BasicInfo>
						<li>{certificate.certificatedAt}</li>
						<li>{certificate.certificateOrganization}</li>
						<li>{certificate.certificateGrade}</li>
					</ResumeViewBaseSection.BasicInfo>
					<ResumeViewBaseSection.Link links={certificate.links} />
				</article>
			))}
		</ReviseTemplate>
	);
}
