import { useFormContext } from 'react-hook-form';
import { Certificate as CertificateType } from 'types/career/resume';

import ResumeViewBaseSection from '@components/resume-view/ResumeViewBaseSection/ResumeViewBaseSection';

import ReviseTemplate from './ReviseTemplate';

export default function CertificateRevise() {
	const FIELD = 'doc.certificates';
	const { watch, register } = useFormContext();

	const certificates: CertificateType[] = watch(FIELD);
	if (certificates.length === 0) {
		return null;
	}
	return (
		<ReviseTemplate title='교육'>
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
