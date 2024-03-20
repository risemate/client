import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';

export const useModal = (key: string) => {
	const queryClient = useQueryClient();

	const setParam = (key: string, value: string) => {
		const params = new URLSearchParams(window.location.search);

		// 이미 존재하는 파라미터인 경우에는 추가하지 않고, 새로운 파라미터만 추가합니다.
		if (!params.has(key)) {
			params.append(key, value);

			// 새로운 URL에 변경된 parameter를 추가합니다.
			const newUrl = `${window.location.pathname}?${params.toString()}`;

			// 새로운 URL로 변경하고 브라우저의 이력을 추가합니다.
			window.history.pushState({}, '', newUrl);
		}
	};

	const delParam = (key: string) => {
		const params = new URLSearchParams(window.location.search);
		params.delete(key);
		const newUrl = `${window.location.pathname}?${params.toString()}`;
		window.history.pushState({}, '', newUrl);
	};

	const getParam = (key: string) => {
		const params = new URLSearchParams(window.location.search);
		return params.get(key);
	};

	const overView = getParam('overView');

	const { data: isModal } = useQuery({
		queryKey: ['modal', key],
		initialData: false,
		staleTime: Infinity,
	});

	const openModal = () => {
		setParam('overView', 'ok');
		queryClient.setQueryData(['modal', key], true);
	};
	const closeModal = () => {
		delParam('overView');
		queryClient.setQueryData(['modal', key], false);
	};

	useEffect(() => {
		if (isModal && !overView) {
			closeModal();
		}
	}, [isModal, overView]);
	return { isModal, openModal, closeModal };
};
