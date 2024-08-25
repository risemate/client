import CoverLetterView from './components/CoverLetterView';
import ResumeView from './components/ResumeView';
import useDocView from './DocView.hook';

export { default as ResumeView } from './components/ResumeView';
export { default as ReviseCoverletterView } from './components/ReviseCoverletterView';
export { default as ReviseResumeView } from './components/ReviseResumeView';

export default function DocView() {
	const { data } = useDocView();
	return (
		<>
			{data?.careerType === 'RESUME' && <ResumeView />}
			{data?.careerType === 'COVERLETTER' && <CoverLetterView />}
		</>
	);
}
