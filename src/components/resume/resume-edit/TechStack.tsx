import { IconCloseSharp } from '@icons';
import { isEmpty } from '@utils/helpers';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import styled from 'styled-components';

import Button from '@common/Button';
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

	const removeTechStack = (index: number) => {
		const newTechStack = [...techStack];
		newTechStack.splice(index, 1);
		updateTechStack(newTechStack);
	};
	return (
		<StyledTech>
			<h3>기술 스택</h3>
			<form onSubmit={event => addTechStack(event)}>
				<Input label='기술 입력' value={stack} onChange={event => changeStack(event)} />
				<Button variant='navy' size='small' type='submit' disabled={isEmpty(stack)}>
					추가
				</Button>
			</form>
			<ul>
				{techStack.map((stack, index) => {
					return (
						<li key={index}>
							{stack}
							<button type='button' onClick={() => removeTechStack(index)}>
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
	form {
		position: relative;
		button {
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
