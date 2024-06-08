import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

export default function Toast() {
	return (
		<ToastContainer
			position='bottom-center'
			limit={1}
			// closeButton={false}
			autoClose={3000}
			// hideProgressBar
		/>
	);
}
