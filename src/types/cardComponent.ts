export interface CardComponentProps<T = unknown> {
	career: T;
	selectedId?: string | null;
	updateSelectedId?: (id: string | null) => void;
}
