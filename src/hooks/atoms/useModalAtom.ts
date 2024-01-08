import { useQuery, useQueryClient } from '@tanstack/react-query';

export const useModal = (key: string) => {
	const queryClient = useQueryClient();

	const { data: isModal } = useQuery([key], {
		initialData: false,
		staleTime: Infinity,
	});
	const openModal = () => queryClient.setQueryData([key], true);
	const closeModal = () => queryClient.setQueryData([key], false);
	return { isModal, openModal, closeModal };
};
