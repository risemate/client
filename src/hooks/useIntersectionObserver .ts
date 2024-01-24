import { InfiniteQueryObserverResult } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

//hook props interface
interface IuseIntersectionObserverProps {
	threshold?: number;
	hasNextPage: boolean | undefined;
	fetchNextPage: () => Promise<InfiniteQueryObserverResult>;
}

export const useIntersectionObserver = ({
	threshold = 0.1,
	hasNextPage,
	fetchNextPage,
}: IuseIntersectionObserverProps) => {
	const [target, setTarget] = useState<HTMLDivElement | null | undefined>(null);

	const observerCallback: IntersectionObserverCallback = entries => {
		entries.forEach(entry => {
			if (entry.isIntersecting && hasNextPage) {
				fetchNextPage();
			}
		});
	};

	useEffect(() => {
		if (!target) return;
		const observer = new IntersectionObserver(observerCallback, {
			threshold,
		});

		// 타겟 관찰 시작
		observer.observe(target);

		// 관찰 멈춤
		return () => observer.unobserve(target);
	}, [observerCallback, threshold, target]);

	return { setTarget };
};
