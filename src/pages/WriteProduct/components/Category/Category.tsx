import React from 'react';

import Select from '@components/input/Select';
import BaseSection from '@components/resume-edit/EditBaseSection';

import useCategory from './Category.hook';

export default function Category() {
	const { rootCategory, subCategory, thirdCategory } = useCategory();
	return (
		<BaseSection>
			<BaseSection.Title title='상품 카테고리' />
			<BaseSection.Content gridColumn='2'>
				<BaseSection.Item gridColumn='1/2'>
					<Select
						label='루트 카테고리'
						options={rootCategory.options}
						{...rootCategory.field}
					/>
				</BaseSection.Item>
				<BaseSection.Item gridColumn='2/3'>
					<Select
						label='서브 카테고리'
						options={subCategory.options}
						{...subCategory.field}
					/>
				</BaseSection.Item>
				<BaseSection.Item gridColumn='1/3'>
					<h4>추가 카테고리</h4>
					<BaseSection.SearchList {...thirdCategory.field} />
					<BaseSection.SearchInput {...thirdCategory.inputField} />
				</BaseSection.Item>
			</BaseSection.Content>
		</BaseSection>
	);
}
