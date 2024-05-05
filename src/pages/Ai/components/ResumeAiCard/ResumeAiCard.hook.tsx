import { useModal } from '@hooks/atoms/useModalAtom';
import { aiRevisionAgainMutation, aiRevisionMutation } from '@queries/ai';
import { Career } from 'types/career/careerDocument';
import { Resume } from 'types/career/resume';

export default function useResumeAiCard(
	career: Career<Resume>,
	selectedId: string | null,
	updateSelectedId?: (id: string | null) => void,
) {
	const { openModal } = useModal('ai-revise');
	const hasRevise = career.childAi !== null;
	const isRevising = career.aiStatus === 'IN_PROGRESS';
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
	const handleButtonClick = () => {
		if (updateSelectedId) {
			updateSelectedId(career._id);
		}
	};
	const proceedAiRevise = () => {
		if (!selectedId) return;
		if (hasRevise) {
			reviseAiAgainMutation.mutate({ orgCareerId: selectedId });
		} else {
			reviseAiMutation.mutate({ orgCareerId: selectedId });
		}
	};
	return {
		clickRevision: () => {
			openModal();
			handleButtonClick();
		},
		hasRevise,
		isRevising,
		modalContent,
		proceedAiRevise,
		toDoc: `/my-info/docs/${career._id}`,
		toRevision: `/my-info/docs/${career._id}/revise-docs/${career.childAi}`,
	};
}
