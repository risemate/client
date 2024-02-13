import WriteResume from 'pages/Write/WriteResume';
import { useSearchParams } from 'react-router-dom';

export default function WritePage() {
	const [params] = useSearchParams();
	const redirect = params.get('redirect');
	return (
		<>
			{(redirect === 're' && <WriteResume />) ||
				(redirect === 'co' && <p>자기소개서 작성 페이지</p>)}
		</>
	);
}
