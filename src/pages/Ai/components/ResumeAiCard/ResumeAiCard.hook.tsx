import { useModal } from '@hooks/atoms/useModalAtom';
import { aiRevisionAgainMutation, aiRevisionMutation } from '@queries/ai';
import { Career } from 'types/career/careerDocument';
import { Resume } from 'types/career/resume';

export default function useResumeAiCard(career: Career<Resume>) {
	const { openModal } = useModal('ai-revise');
	const hasRevise = career.childrenDocCount > 0;
	const isRevising = false;
	const reviseAiMutation = aiRevisionMutation();
	const reviseAiAgainMutation = aiRevisionAgainMutation();
	const modalContent = hasRevise ? (
		<span>
			이미 첨삭된 내용이 있습니다.
			<br /> 새로운 첨삭을 요청하시면 이전 첨삭 내용은 삭제됩니다.
		</span>
	) : (
		<span>
			AI을 첨삭을 받으시겠습니까? <br /> 시간은 약 15~30분 정도 소요됩니다.
		</span>
	);
	const proceedAiRevise = () => {
		if (hasRevise) {
			reviseAiAgainMutation.mutate({ orgCareerId: career._id });
		} else {
			reviseAiMutation.mutate({ orgCareerId: career._id });
		}
	};
	return {
		openModal,
		hasRevise,
		isRevising,
		modalContent,
		proceedAiRevise,
		toDoc: `/my-info/docs/${career._id}`,
		toRevision: `/my-info/docs/${career._id}/revise-docs/${3}`,
	};
}
