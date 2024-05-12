import { CareerType } from './career/careerDocument';

export interface CardComponentProps<T = unknown> {
	careerType?: CareerType;
	career: T;
	selectedId?: string | null;
	updateSelectedId?: (id: string | null) => void;
}
