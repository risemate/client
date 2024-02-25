import WriteResume from 'pages/Write/components/WriteResume/WriteResume';
import { useSearchParams } from 'react-router-dom';

import WriteCoverletter from './components/WriteCoverletter/WriteCoverletter';

export default function WritePage() {
	const [params] = useSearchParams();
	const redirect = params.get('redirect');
	return (
		<>
			{(redirect === 're' && <WriteResume />) ||
				(redirect === 'co' && <WriteCoverletter />)}
		</>
	);
}
