import { useState } from 'react';

export default function useOpenGeneral() {
	const [isOpen, setIsOpen] = useState(false);
	const openGeneral = (trigger?: boolean, callback?: () => void) => {
		setIsOpen(!trigger);
		callback && callback();
	};
	const closeGeneral = (trigger?: boolean, callback?: () => void) => {
		setIsOpen(trigger !== undefined ? !trigger : false);
		callback && callback();
	};

	const toggleGeneral = (trigger?: boolean, callback?: () => void) => {
		setIsOpen(prev => (trigger !== undefined ? trigger : !prev));
		callback && callback();
	};

	return {
		isOpen,
		openGeneral,
		closeGeneral,
		toggleGeneral,
	};
}
