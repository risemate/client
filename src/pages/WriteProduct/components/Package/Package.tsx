import EditBaseSection from '@components/resume-edit/EditBaseSection';

import PackageItem from './PackageItem';

export default function Package() {
	return (
		<EditBaseSection>
			<EditBaseSection.Title title='패키지' />
			<PackageItem category='BASIC' />
			<PackageItem category='ADVANCED' />
			<PackageItem category='PREMIUM' />
		</EditBaseSection>
	);
}
