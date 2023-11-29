import techStackData from '@assets/data/techstack.json';
import useClickOutside from '@hooks/useClickOutside';
import useSearch from '@hooks/useSearch';
import { IconCloseSharp } from '@icons';
import React, { useRef, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import styled from 'styled-components';

import Input from '@common/input/Input';
import KeywordSuggestions from '@common/KeywordSuggestions';

export default function TechStack() {
	const { watch, setValue } = useFormContext();
	const techStack = watch('techStack');

	const { searchText, suggestions, inputChange } = useSearch(
		20,
		techStackData.default,
		techStackData.keyword,
	);
	const [isSearchOpen, setIsSearchOpen] = useState(false);
	const openSearchList = () => setIsSearchOpen(true);
	const closeSearchList = () => setIsSearchOpen(false);
	const searchRef = useRef<HTMLDivElement | null>(null);

	const removeSelectedItem = (index: number) => {
		const newTechStack = [...techStack.skills];
		newTechStack.splice(index, 1);
		setValue('techStack.skills', newTechStack);
	};

	useClickOutside([searchRef], closeSearchList);
	return (
		<StyledTech>
			<h3>기술 스택</h3>
			<StyledList>
				{techStack.skills.map((stack: string, index: number) => {
					return (
						<span key={index}>
							{stack}
							<button type='button' onClick={() => removeSelectedItem(index)}>
								<IconCloseSharp />
							</button>
						</span>
					);
				})}
			</StyledList>
			<div ref={searchRef}>
				<Input
					value={searchText}
					onChange={inputChange}
					onFocus={openSearchList}
					placeholder='기술을 검색하세요.'
				/>
				{isSearchOpen && (
					<StyledSuggestionWrap>
						<KeywordSuggestions keyword='techStack.skills' suggestions={suggestions} />
					</StyledSuggestionWrap>
				)}
			</div>
		</StyledTech>
	);
}

const StyledTech = styled.section`
	padding: 40px;
	& > div {
		position: relative;
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
	margin: 20px 0;
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
