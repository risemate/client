import techStackData from '@assets/data/techstack.json';
import useClickOutside from '@hooks/useClickOutside';
import useInput from '@hooks/useInput';
import { IconCloseSharp } from '@icons';
import React, { useRef, useState } from 'react';
import styled from 'styled-components';

import Input from '@common/input/Input';
import KeywordSuggestions from '@common/KeywordSuggestions';

export default function TechStack() {
	const [selectItems, setSelectItems] = useState<string[]>([]);
	const { inputValue: searchText, changeValue } = useInput('');
	const [isSearchOpen, setIsSearchOpen] = useState(false);
	const openSearchList = () => setIsSearchOpen(true);
	const closeSearchList = () => setIsSearchOpen(false);
	const searchRef = useRef<HTMLDivElement | null>(null);

	const removeSelectedItem = (item: string) => {
		setSelectItems(pre => pre.filter(v => v !== item));
	};

	useClickOutside([searchRef], closeSearchList);
	return (
		<StyledTech>
			<h3>기술 스택</h3>
			<div ref={searchRef}>
				<Input
					label='기술 입력'
					value={searchText}
					onChange={e => changeValue(e.target.value)}
					onFocus={openSearchList}
				/>
				{isSearchOpen && (
					<StyledSuggestionWrap>
						<KeywordSuggestions
							keyword={searchText}
							keywordList={techStackData.keyword}
							selectItems={selectItems}
							setSelectItems={setSelectItems}
						/>
					</StyledSuggestionWrap>
				)}
			</div>
			<StyledList>
				{selectItems.map((stack: string, index: number) => {
					return (
						<span key={index}>
							{stack}
							<button type='button' onClick={() => removeSelectedItem(stack)}>
								<IconCloseSharp />
							</button>
						</span>
					);
				})}
			</StyledList>
		</StyledTech>
	);
}

const StyledTech = styled.section`
	padding: 40px;
	& > div {
		position: relative;
		& > button {
			position: absolute;
			top: 22px;
			right: 0;
			height: 35px;
			border-radius: 0 10px 10px 0;
		}
	}
	h3 {
		color: ${({ theme }) => theme.colors.navy};
		font-weight: bold;
		font-size: ${({ theme }) => theme.fontSizes.medium};
		padding-bottom: 10px;
		margin-bottom: 20px;
		border-bottom: 2px solid ${({ theme }) => theme.colors.navy};
	}
`;

const StyledList = styled.div`
	display: flex;
	gap: 10px;
	margin-top: 20px;
	flex-wrap: wrap;
	span {
		width: fit-content;
		background: ${({ theme }) => theme.colors.grey};
		border-radius: 50px;
		padding: 8px 15px;
		color: white;
		display: flex;
		align-items: center;
		white-space: pre;
	}
	button {
		color: white;
		height: 16px;
		margin-left: 3px;
	}
`;

const StyledSuggestionWrap = styled.div`
	position: absolute;
	width: 100%;
	margin-top: 20px;
	z-index: 1;
`;
