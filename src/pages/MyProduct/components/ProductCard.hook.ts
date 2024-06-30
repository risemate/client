import { useModal } from '@hooks/atoms/useModalAtom';
import { productDeleteMutation, productUpdateMutation } from '@queries/product';
import { ChangeEvent, useState } from 'react';
import { toast } from 'react-toastify';
import { Product } from 'types/coach/product';

export default function useProductCard(
	product: Product,
	selectedId?: string | null,
	updateSelectedId?: (id: string | null) => void,
) {
	const [isPublic, setIsPublic] = useState<boolean>(product.public);
	const updateProductMutation = productUpdateMutation();
	const updateIsPublic = async (event: ChangeEvent<HTMLInputElement>) => {
		const response = await updateProductMutation.mutateAsync({
			...product,
			public: event.target.checked,
		});
		setIsPublic(response.public);
	};

	const deleteQueryKey = 'delete-product';
	const { isModal: isDeleteModal, openModal: openDeleteModal } = useModal(deleteQueryKey);
	const deleteProductMutation = productDeleteMutation();
	const deleteProduct = () => {
		selectedId &&
			deleteProductMutation
				.mutateAsync(selectedId)
				.then(() => toast('해당 상품이 삭제되었습니다.'));
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
