import useTab from '@hooks/useTab';

import 'normalize.css';

function Home() {
	const tab = useTab(['a', 'b']);
	console.info(tab);
	return (
		<>
			<div>home</div>
		</>
	);
}

export default Home;
