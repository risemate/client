import techStackData from '@data/techstack.json';
import useSearch from '@hooks/useSearch';
import { useFormContext } from 'react-hook-form';

import BaseSection from '@components/resume-edit/EditBaseSection';

export default function TechStack() {
	const { watch, setValue } = useFormContext();
	const techStack = watch('doc.techStack');

	const { searchText, suggestions, inputChange } = useSearch(
		20,
		techStackData.default,
		techStackData.keyword,
	);

	const removeSelectedItem = (index: number) => {
		const newTechStack = [...techStack.skills];
		newTechStack.splice(index, 1);
		setValue('doc.techStack.skills', newTechStack);
	};
	return (
		<BaseSection>
			<BaseSection.Title title='기술 스택' />
			<BaseSection.SearchList
				items={techStack?.skills}
				removeSelectedItem={removeSelectedItem}
			/>
			<BaseSection.SearchInput
				searchText={searchText}
				inputChange={inputChange}
				keyword='doc.techStack.skills'
				suggestions={suggestions}
				placeholder='기술을 검색하세요.'
			/>
		</BaseSection>
	);
}
