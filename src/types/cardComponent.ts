import { Career } from './career/careerDocument';
import { Resume } from './career/resume';

export interface CardComponentProps {
	career: Career<Resume>;
	selectedId?: string | null;
	updateSelectedId?: (id: string | null) => void;
}
