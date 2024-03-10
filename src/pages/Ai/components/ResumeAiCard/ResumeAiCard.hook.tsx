import { useModal } from '@hooks/atoms/useModalAtom';

export default function useResumeAiCard() {
	const { openModal } = useModal('ai-revise');
	const hasRevise = true;
	const isRevising = true;
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
	const proceedAiRevise = (careerId: string) => {
		console.log('start revising!', careerId);
	};
	return { openModal, hasRevise, isRevising, modalContent, proceedAiRevise };
}
