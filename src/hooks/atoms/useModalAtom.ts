import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';

export const useModal = (key: string) => {
	const queryClient = useQueryClient();

	const setParam = (key: string, value: string) => {
		const params = new URLSearchParams(window.location.search);

		if (!params.has(key)) {
			params.append(key, value);
			const newUrl = `${window.location.pathname}?${params.toString()}`;
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
		if (isModal || overView) {
			openModal();
		}
		if (isModal && !overView) {
			closeModal();
		}
	}, [isModal, overView]);
	return { isModal, openModal, closeModal };
};
