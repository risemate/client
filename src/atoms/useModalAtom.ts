import { atom, useAtom } from 'jotai';

const modal = atom(false);

export const useModal = () => {
	const [isModal, setIsModal] = useAtom(modal);
	const openModal = () => setIsModal(true);
	const closeModal = () => setIsModal(false);
	return { isModal, openModal, closeModal };
};
