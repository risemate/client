import { resumeDetailQuery } from '../../services/queries/resume';

export default function useDocView(resumeId: string) {
	const resumeDetail = resumeDetailQuery(resumeId);
	return {
		resumeDetail: resumeDetail.data,
	};
}
