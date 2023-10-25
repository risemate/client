import { IconCloseSharp } from '@icons';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import styled from 'styled-components';

import Input from '@common/input/Input';

interface TechStackProps {
	techStack: string[];
	updateTechStack: (newSkiils: string[]) => void;
}

export default function TechStack({ techStack, updateTechStack }: TechStackProps) {
	const [stack, setStack] = useState('');
	const changeStack = (event: ChangeEvent<HTMLInputElement>) => {
		setStack(event.target.value);
	};

	const addTechStack = (event: FormEvent) => {
		event.preventDefault();
		updateTechStack([...techStack, stack]);
		setStack('');
	};

	const removeTechStack = (removeStack: string) => {
		const newTechStack = techStack.filter(stack => !stack.includes(removeStack));
		updateTechStack(newTechStack);
	};
	return (
		<StyledTech>
			<h3>기술 스택</h3>
			<form onSubmit={event => addTechStack(event)}>
				<Input label='기술 입력' value={stack} onChange={event => changeStack(event)} />
			</form>
			<ul>
				{techStack.map((stack, index) => {
					return (
						<li key={index}>
							{stack}
							<button type='button' onClick={() => removeTechStack(stack)}>
								<IconCloseSharp />
							</button>
						</li>
					);
				})}
			</ul>
		</StyledTech>
	);
}

const StyledTech = styled.section`
	padding: 40px;
	h3 {
		color: ${({ theme }) => theme.colors.navy};
		font-weight: bold;
		font-size: ${({ theme }) => theme.fontSizes.medium};
		padding-bottom: 10px;
		margin-bottom: 20px;
		border-bottom: 2px solid ${({ theme }) => theme.colors.navy};
	}
	ul {
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
	}
`;
