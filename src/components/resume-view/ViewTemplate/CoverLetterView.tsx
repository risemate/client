import { css } from 'styled-components';
import { Career } from 'types/career/careerDocument';
import { Coverletter } from 'types/career/coverletter';

import WhiteBoxWrapper from '@components/base-wrappers/WhiteBoxWrapper';

// import BaseSection from '@components/resume-view/ResumeViewBaseSection';

type Props = {
	career: Career<Coverletter>;
};

function CoverLetterTemplate({ career }: Props) {
	return (
		<WhiteBoxWrapper type='div' customCss={resumeWrapperStyle} docTitle={career.docTitle}>
			{career.doc.contents.map(data => (
				<section key={data._id}>
					<h3>{data.title}</h3>
					<p>{data.content}</p>
				</section>
			))}
		</WhiteBoxWrapper>
	);
}

export default CoverLetterTemplate;

const resumeWrapperStyle = css`
	min-height: 500px;
	padding: 50px;
	margin: 70px auto;

	& > section {
		padding-bottom: 30px;
		&:not(:last-child) {
			padding-bottom: 60px;
		}

		h3 {
			font-size: 18px;
			font-weight: 600;
			padding-bottom: 15px;
		}

		p {
			line-height: 140%;
		}
	}
`;
