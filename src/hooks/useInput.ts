import { useState } from 'react';

export default function useInput<T>(initialValue: T, targetValue?: T) {
	const [inputValue, setInputValue] = useState<T>(initialValue);
	const [warning, setWarning] = useState('');

	const changeValue = (newValue: T) => {
		setInputValue(newValue);
	};

	const checkTarget = (action: () => void, newWarning?: string) => {
		if (inputValue === targetValue) {
			setWarning('');
			action();
		} else {
			newWarning && setWarning(newWarning);
		}
	};

	return { inputValue, warning, changeValue, checkTarget };
}
