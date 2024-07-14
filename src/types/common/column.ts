import { ReactElement } from 'react';

export type Column<T> = {
	key: string;
	title: string | ReactElement;
	render?: (column: Column<T>, item: T) => ReactElement;
};

export type PropsWithId<T> = {
	id: string;
	body: T;
};
