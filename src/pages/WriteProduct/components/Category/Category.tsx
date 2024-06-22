import styled from 'styled-components';

import HelperText from '@common/HelperText';
import Select from '@components/input/Select';
import BaseSection from '@components/resume-edit/EditBaseSection/EditBaseSection';

import useCategory from './Category.hook';

export default function Category() {
	const { careerTypes, searchKeyword } = useCategory();
	return (
		<BaseSection>
			<BaseSection.Title title='상품 카테고리' />
			<BaseSection.Content>
				<BaseSection.Item>
					<Select label='카테고리' options={careerTypes.options} {...careerTypes.field} />
				</BaseSection.Item>
				<BaseSection.Item>
					<KeywordTitleWrapper>
						<span>검색 키워드</span>
						<HelperText text='검색 키워드를 추가하여 해당 검색어가 있는 상품을 검색할 때 사용됩니다' />
					</KeywordTitleWrapper>
					<BaseSection.SearchList {...searchKeyword.field} />
					<BaseSection.SearchInput {...searchKeyword.inputField} />
				</BaseSection.Item>
			</BaseSection.Content>
		</BaseSection>
	);
}

const KeywordTitleWrapper = styled.div`
	margin-bottom: 10px;
	display: flex;
	align-items: center;
	gap: 5px;
	span {
		font-size: ${({ theme }) => theme.fontSizes.small};
		color: ${({ theme }) => theme.colors.darkGrey};
	}
`;
