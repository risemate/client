import React from 'react';

import BaseSection from '@components/resume-edit/EditBaseSection';

import useKeyword from './Keyword.hook';

export default function Keyword() {
	const { searchKeyword } = useKeyword();
	return (
		<BaseSection>
			<BaseSection.Title title='검색 키워드' />
			<BaseSection.Content>
				<BaseSection.Item>
					<BaseSection.SearchList {...searchKeyword.field} />
					<BaseSection.SearchInput {...searchKeyword.inputField} />
				</BaseSection.Item>
			</BaseSection.Content>
		</BaseSection>
	);
}
