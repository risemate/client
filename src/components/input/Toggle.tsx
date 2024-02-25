import React, { ChangeEvent } from 'react';
import styled from 'styled-components';

interface ToggleProps {
	name?: string;
	checked: boolean;
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function Toggle({ name, checked, onChange }: ToggleProps) {
	return (
		<ToggleLabel>
			{name && <span>{name}</span>}
			<input role='switch' type='checkbox' checked={checked} onChange={onChange} />
		</ToggleLabel>
	);
}

const ToggleLabel = styled.label`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	gap: 0.5rem;
	cursor: pointer;
	span {
		font-size: ${({ theme }) => theme.fontSizes.small};
		color: ${({ theme }) => theme.colors.darkGrey};
	}
	&:not(:last-child) {
		margin-right: 20px;
	}
	[type='checkbox'] {
		appearance: none;
		position: relative;
		background: ${({ theme }) => theme.colors.grey};
		border-radius: 1.25em;
		width: 35px;
		height: 20px;
	}
	[type='checkbox']::before {
		content: '';
		position: absolute;
		left: 0;

		width: 20px;
		height: 20px;
		border-radius: 50%;
		transform: scale(0.8);
		background-color: white;
		transition: left 250ms linear;
	}
	[type='checkbox']:checked::before {
		background-color: white;
		left: 15px;
	}

	[type='checkbox']:checked {
		background-color: ${({ theme }) => theme.colors.mint};
	}
`;
