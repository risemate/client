import { careersQuery } from '@queries/career';
import { ElementType } from 'react';
import { CardComponentProps } from 'types/cardComponent';
import { CareersQueryProps } from 'types/query/queryProps';

import BasicCareerList from '@components/resume-view/BasicCareerList/BasicCareerList';

// eslint-disable-next-line
interface CareerSuspenseListProps<T = any> {
	props: CareersQueryProps;
	CardComponent: ElementType<CardComponentProps<T>>;
	createTo?: 'co' | 're' | 'pr';
	selectedId?: string | null;
	updateSelectedId?: (value: string | null) => void;
}

export default function CareerSuspenseList<T>({
	props,
	CardComponent,
	createTo,
	selectedId,
	updateSelectedId,
}: CareerSuspenseListProps<T>) {
	const resumes = careersQuery(props);
	const data = resumes.data;
	return (
		<BasicCareerList
			resumes={data}
			createTo={createTo}
			CardComponent={CardComponent}
			selectedId={selectedId}
			updateSelectedId={updateSelectedId}
		/>
	);
}
