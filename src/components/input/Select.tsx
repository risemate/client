import React, { ForwardedRef, SelectHTMLAttributes, forwardRef } from 'react';
import styled from 'styled-components';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
	label: string;
	options: readonly string[];
}

const Select = forwardRef(function Select(
	{ label, options, ...SelectProps }: SelectProps,
	ref: ForwardedRef<HTMLSelectElement>,
) {
	return (
		<SelectWrapper>
			{label}
			<select ref={ref} {...SelectProps}>
				{options.map((option, index) => (
					<option key={index} value={option}>
						{option}
					</option>
				))}
			</select>
		</SelectWrapper>
	);
});

const SelectWrapper = styled.div`
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

export default Select;
