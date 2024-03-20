import { useSearchParams } from 'react-router-dom';

export function useSearchParam<T>(key: string) {
	const [searchParams, setSearchParams] = useSearchParams();
	const queryParam = searchParams.get(key) as T;
	const changeParam = (newMode: string) => {
		const paramsToUpdate: { [key: string]: string } = {};
		paramsToUpdate[key] = newMode;
		setSearchParams(paramsToUpdate);
	};

	const setParam = (value: string) => {
		searchParams.set(key, value);
		setSearchParams(searchParams);
	};
	const delParam = (key: string) => {
		searchParams.delete(key);
		setSearchParams(searchParams);
	};
	return { queryParam, changeParam, setParam, delParam };
}
