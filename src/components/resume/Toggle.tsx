import React, { ChangeEvent } from 'react';
import styled from 'styled-components';

interface ToggleProps {
	size?: 'full';
	toggleItems: {
		name: string;
		checked: boolean;
		onChange: (event: ChangeEvent<HTMLInputElement>) => void;
	}[];
}

export default function Toggle({ size, toggleItems }: ToggleProps) {
	return (
		<StyledToggle $size={size}>
			{toggleItems.map((item, index) => {
				return (
					<label key={index}>
						<span>{item.name}</span>
						<input
							role='switch'
							type='checkbox'
							checked={item.checked}
							onChange={item.onChange}
						/>
					</label>
				);
			})}
		</StyledToggle>
	);
}

const StyledToggle = styled.article<{ $size?: 'full' }>`
	background: ${({ theme }) => theme.colors.lightGrey};
	display: ${({ $size }) => ($size === 'full' ? 'block' : 'inline-block')};
	text-align: ${({ $size }) => ($size === 'full' ? 'center' : 'start')};
	border-radius: 10px;
	padding: 5px 20px;
	label {
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
		background-color: ${({ theme }) => theme.colors.white};
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
