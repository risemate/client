import { useModal } from '@hooks/atoms/useModalAtom';
import { useSearchParam } from '@hooks/common/useSearchParam';
import {
	productCreateMutation,
	productDetailQuery,
	productUpdateMutation,
} from '@queries/product';
import { isEmpty } from '@utils/helpers';
import { KeyboardEvent } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ProductRequest } from 'types/coach/product';
import { defaultProduct } from 'types/coach/productData';

export default function useWriteProduct() {
	// 상품 생성 또는 수정 확인 후 form 객체 생성
	const navigate = useNavigate();
	const { queryParam: productId } = useSearchParam<string>('id');
	const isNewProduct = isEmpty(productId);
	const productDetail = productDetailQuery(productId);
	const product = isNewProduct ? defaultProduct : productDetail.data;
	const productEditMethods = useForm<ProductRequest>({
		mode: 'onSubmit',
		values: product,
	});

	// 상품 생성 또는 수정
	const createProductMutation = productCreateMutation();
	const updateProductMutation = productUpdateMutation();
	const {
		handleSubmit,
		formState: { errors, isSubmitting },
	} = productEditMethods;
	const submitProduct = handleSubmit(data => {
		if (isNewProduct) {
			createProductMutation.mutateAsync(data).then(({ _id }) => {
				toast('상품이 저장되었습니다.');
				navigate(`/coach-info/product-docs/${_id}`);
			});
		} else {
			updateProductMutation.mutateAsync(data).then(() => toast('상품이 저장되었습니다.'));
		}
	});
	const preventEnter = (event: KeyboardEvent) => {
		if (event.key === 'Enter') event.preventDefault();
	};

	// 상품 저장 모달
	const modalQueryKey = 'save-product';
	const { openModal, closeModal } = useModal(modalQueryKey);
	const invalidProduct = () => {
		if (!isEmpty(errors)) {
			closeModal();
			toast('필수 필드가 비어 있습니다');
		}
	};

	return {
		productEditMethods,
		submitProduct,
		preventEnter,
		formId: 'product-edit-form',
		saveModal: {
			queryKey: modalQueryKey,
			open: openModal,
		},
		validation: {
			invalidCheck: invalidProduct,
			isSubmitting,
		},
	};
}
