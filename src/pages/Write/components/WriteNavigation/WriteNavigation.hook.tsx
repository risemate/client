import { useModal } from '@hooks/atoms/useModalAtom';
import { useCallback } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { OrderType } from 'types/Resume';

export default function useWriteNavigation() {
	const { watch, control } = useFormContext();
	const { swap } = useFieldArray({
		control,
		name: 'doc.order',
		keyName: 'key',
	});
	const resumeOrder = watch('doc.order') as OrderType[];

	const moveItem = useCallback(
		(dragIndex: number, hoverIndex: number) => swap(dragIndex, hoverIndex),
		[resumeOrder],
	);

	const { openModal: openSaveModal } = useModal('save-resume');

	return {
		resumeOrder,
		moveItem,
		openSaveModal,
	};
}
