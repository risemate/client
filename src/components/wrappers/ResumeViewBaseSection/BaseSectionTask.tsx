import React from 'react';
import styled from 'styled-components';

interface TaskProps {
	tasks: string;
}

export default function BaseSectionTask({ tasks }: TaskProps) {
	return (
		<TaskList>
			{tasks.split('\n').map((task, taskIndex) => (
				<li key={taskIndex}>{task.replace('-', '')}</li>
			))}
		</TaskList>
	);
}

const TaskList = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 8px;
	grid-column: 2 / 3;
	grid-row: 1 / 3;
	li {
		color: black;
		word-break: keep-all;
		position: relative;
		font-size: ${({ theme }) => theme.fontSizes.default};
		line-height: 20px;
	}
	li:not(.summary) {
		padding-left: 15px;
		&:before {
			content: '';
			display: inline-block;
			position: absolute;
			left: 0;
			top: 4px;
			width: 6px;
			height: 6px;
			background: black;
			border-radius: 50%;
		}
	}
`;
