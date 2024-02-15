import { useQuery, useQueryClient } from '@tanstack/react-query';

export const useModal = (key: string) => {
	const queryClient = useQueryClient();

	const { data: isModal } = useQuery({
		queryKey: [key],
		initialData: false,
		staleTime: Infinity,
	});
	const openModal = () => queryClient.setQueryData(['modal', key], true);
	const closeModal = () => queryClient.setQueryData(['modal', key], false);
	return { isModal, openModal, closeModal };
};
