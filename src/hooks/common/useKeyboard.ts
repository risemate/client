import { KeyboardEvent } from 'react';

export default function useKeyboard() {
	const handleEnter = (
		event: KeyboardEvent<HTMLInputElement>,
		keyword: string,
		callback: () => void,
	) => {
		if (event.key === 'Enter' && keyword.trim() !== '') {
			callback();
		}
	};
	return { handleEnter };
}
