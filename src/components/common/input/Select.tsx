import React, { SelectHTMLAttributes } from 'react';
import styled from 'styled-components';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
	label: string;
	options: string[];
}

export default function Select({ label, options, ...SelectProps }: SelectProps) {
	return (
		<StyledSelect>
			{label}
			<select {...SelectProps}>
				{options.map((option, index) => (
					<option key={index} value={option}>
						{option}
					</option>
				))}
			</select>
		</StyledSelect>
	);
}

const StyledSelect = styled.div`
	font-size: ${({ theme }) => theme.fontSizes.small};
	color: ${({ theme }) => theme.colors.darkGrey};
	display: flex;
	flex-direction: column;
	gap: 10px;
	select {
		border-radius: 10px;
		border: 0.5px solid ${({ theme }) => theme.colors.grey};
		padding: 10px;
	}
`;
