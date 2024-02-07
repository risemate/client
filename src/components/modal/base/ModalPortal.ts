import { ReactNode } from 'react';
import ReactDOM from 'react-dom';

interface ModalPortalProps {
	children: ReactNode;
}

export default function ModalPortal({ children }: ModalPortalProps) {
	const el = document.getElementById('modal');
	if (!el) {
		console.error("Element with ID 'modal' not found.");
		return null;
	}
	return ReactDOM.createPortal(children, el);
}
