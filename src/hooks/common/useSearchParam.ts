import { useSearchParams } from 'react-router-dom';

export function useSearchParam<T>(key: string) {
	const [searchParams, setSearchParams] = useSearchParams();
	const queryParam = searchParams.get(key) as T;
	const changeParam = (newMode: string) => {
		const paramsToUpdate: { [key: string]: string } = {};
		paramsToUpdate[key] = newMode;
		setSearchParams(paramsToUpdate);
	};
	return { queryParam, changeParam };
}
