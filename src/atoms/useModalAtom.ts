import { atom, useAtom } from 'jotai';

const modal = atom(false);

export const useModal = () => {
	const [isModal, setIsModal] = useAtom(modal);
	console.log('useModal: ', isModal);
	const changeIsModal = () => {
		setIsModal(!isModal);
	};
	const openModal = () => setIsModal(true);
	const closeModal = () => setIsModal(false);
	return { isModal, openModal, closeModal };
};
