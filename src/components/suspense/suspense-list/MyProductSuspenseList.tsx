import { myProductQuery } from '@queries/product';
import { ElementType } from 'react';
import { CardComponentProps } from 'types/cardComponent';

import BasicCareerList from '@components/resume-view/BasicCareerList/BasicCareerList';

// eslint-disable-next-line
interface MyProductSuspenseListProps<T = any> {
	CardComponent: ElementType<CardComponentProps<T>>;
	selectedId?: string | null;
	updateSelectedId?: (value: string | null) => void;
}

export default function MyProductSuspenseList<T>({
	CardComponent,
	selectedId,
	updateSelectedId,
}: MyProductSuspenseListProps<T>) {
	const myProducts = myProductQuery();
	const data = myProducts.data;
	return (
		<BasicCareerList
			resumes={data}
			createTo='pr'
			CardComponent={CardComponent}
			selectedId={selectedId}
			updateSelectedId={updateSelectedId}
		/>
	);
}
