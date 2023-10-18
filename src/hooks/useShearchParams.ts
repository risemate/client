import { useSearchParams } from 'react-router-dom';

export function useShearchParam<T>(key: string) {
	const [searchParams, setSearchParams] = useSearchParams();
	const queryParam = searchParams.get(key) as T;
	const changeParam = (newMode: string) => {
		setSearchParams({ mode: newMode });
	};
	return { queryParam, changeParam };
}
