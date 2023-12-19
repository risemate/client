import techStackData from '@data/techstack.json';
import useClickOutside from '@hooks/common/useClickOutside';
import useSearch from '@hooks/useSearch';
import { IconCloseSharp } from '@icons';
import React, { useRef, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import styled from 'styled-components';

import KeywordSuggestions from '@common/KeywordSuggestions';
import Input from '@components/input/Input';
import BaseSection from '@components/wrappers/EditBaseSection';

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
		<BaseSection>
			<BaseSection.Title title='기술 스택' />
			<StackList>
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
			</StackList>
			<div ref={searchRef}>
				<Input
					value={searchText}
					onChange={inputChange}
					onFocus={openSearchList}
					placeholder='기술을 검색하세요.'
				/>
				{isSearchOpen && (
					<SuggestionWrapper>
						<KeywordSuggestions keyword='techStack.skills' suggestions={suggestions} />
					</SuggestionWrapper>
				)}
			</div>
		</BaseSection>
	);
}

const StackList = styled.div`
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

const SuggestionWrapper = styled.div`
	position: absolute;
	width: 100%;
	margin-top: 20px;
	z-index: 1;
`;
