import { useEffect } from 'react';
import React from 'react';

export default function useClickOutside(
	refs: React.MutableRefObject<HTMLElement | null>[],
	callback: () => void,
) {
	useEffect(() => {
		function handleClickOutside(e: MouseEvent) {
			if (
				refs.every(ref => ref.current && !ref.current.contains(e.target as Node) === true)
			) {
				callback();
			}
		}

		document.addEventListener('click', handleClickOutside);

		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	}, [callback]);
}
