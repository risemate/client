import React from 'react';
import { ToastContainer } from 'react-toastify';

export default function Toast() {
	return (
		<ToastContainer
			position='bottom-center'
			limit={1}
			closeButton={false}
			autoClose={3000}
			hideProgressBar
		/>
	);
}
