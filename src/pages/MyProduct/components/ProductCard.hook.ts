import { useModal } from '@hooks/atoms/useModalAtom';
import { ChangeEvent, useState } from 'react';
import { Product } from 'types/coach/product';

export default function useProductCard(
	product: Product,
	selectedId?: string | null,
	updateSelectedId?: (id: string | null) => void,
) {
	const [isPublic, setIsPublic] = useState(false);
	const updateIsPublic = async (event: ChangeEvent<HTMLInputElement>) => {
		setIsPublic(prev => !prev);
	};

	const deleteQueryKey = 'delete-product';
	const { isModal: isDeleteModal, openModal: openDeleteModal } = useModal(deleteQueryKey);
	const deleteProduct = () => {
		selectedId && console.log('deleted!');
	};

	const handleButtonClick = () => {
		if (updateSelectedId) {
			updateSelectedId(product._id);
		}
	};
	return {
		isPublic,
		updateIsPublic,
		deleteModal: {
			isModal: isDeleteModal,
			open: () => {
				openDeleteModal();
				handleButtonClick();
			},
			queryKey: deleteQueryKey,
		},
		deleteProduct,
	};
}
