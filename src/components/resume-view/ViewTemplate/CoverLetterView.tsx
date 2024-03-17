import { Career } from 'types/career/careerDocument';
import { Coverletter } from 'types/career/coverletter';

type Props = {
	career: Career<Coverletter>;
};

function CoverLetterTemplate({ career }: Props) {
	return (
		<div>
			{career.doc.contents.map(data => (
				<div key={data._id}>
					<h3>{data.title}</h3>
					<p>{data.content}</p>
				</div>
			))}
		</div>
	);
}

export default CoverLetterTemplate;
