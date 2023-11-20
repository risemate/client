import techStackData from '@assets/data/techstack.json';
import useClickOutside from '@hooks/useClickOutside';
import useKeyboard from '@hooks/useKeyboard';
import useSearch from '@hooks/useSearch';
import { IconCloseSharp } from '@icons';
import { isEmpty } from '@utils/helpers';
import React, { useRef, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import styled from 'styled-components';

import Button from '@common/Button';
import Input from '@common/input/Input';
import SearchList from '@common/SearchList';

export default function TechStack() {
	const { watch, setValue } = useFormContext();
	const techStack = watch('techStack');

	const { searchText, suggestions, inputChange, handleSuggestionClick, resetSearchText } =
		useSearch(20, techStackData.keyword);
	const [isSearchOpen, setIsSearchOpen] = useState(false);
	const openSearchList = () => setIsSearchOpen(true);
	const closeSearchList = () => setIsSearchOpen(false);
	const searchRef = useRef<HTMLDivElement | null>(null);

	const addTechStack = () => {
		setValue('techStack.skills', [...techStack.skills, searchText]);
		resetSearchText();
		closeSearchList();
	};

	const removeTechStack = (index: number) => {
		const newTechStack = [...techStack.skills];
		newTechStack.splice(index, 1);
		setValue('techStack.skills', newTechStack);
	};

	const { handleEnter } = useKeyboard();
	useClickOutside([searchRef], closeSearchList);

	return (
		<StyledTech>
			<h3>기술 스택</h3>
			<div ref={searchRef}>
				<Input
					label='기술 입력'
					value={searchText}
					onChange={inputChange}
					onKeyUp={event => handleEnter(event, searchText, addTechStack)}
					onFocus={openSearchList}
				/>
				<Button
					variant='navy'
					size='small'
					type='button'
					onClick={() => addTechStack()}
					disabled={isEmpty(searchText)}
				>
					추가
				</Button>
				{isSearchOpen && (
					<SearchList
						suggestions={suggestions}
						handleSuggestionClick={handleSuggestionClick}
					/>
				)}
			</div>
			<StyledList>
				{techStack.skills.map((stack: string, index: number) => {
					return (
						<li key={index}>
							{stack}
							<button type='button' onClick={() => removeTechStack(index)}>
								<IconCloseSharp />
							</button>
						</li>
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
		& > ul {
			margin-top: 10px;
			position: absolute;
			width: calc(100% - 100px);
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

const StyledList = styled.ul`
	display: flex;
	gap: 10px;
	margin-top: 20px;
	li {
		width: fit-content;
		background: ${({ theme }) => theme.colors.grey};
		border-radius: 50px;
		padding: 8px 15px;
		color: white;
		display: flex;
		align-items: center;
	}
	button {
		color: white;
		height: 16px;
		margin-left: 3px;
	}
`;
