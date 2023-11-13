import React from 'react';
import styled from 'styled-components';
import { Variant } from 'types/Button';

import Button from './Button';

interface ResumeNavProps {
	resumeNavItems: { name: string; onClick?: () => void }[];
}

export default function ResumeNav({ resumeNavItems }: ResumeNavProps) {
	const btnColor: Variant[] =
		resumeNavItems.length > 2 ? ['white', 'blue', 'mint'] : ['blue', 'mint'];
	return (
		<StyledResumeNav>
			{resumeNavItems.map((item, index) => {
				return item.onClick ? (
					<Button
						variant={btnColor[index]}
						size='medium'
						type='button'
						onClick={item?.onClick}
						key={index}
					>
						{item.name}
					</Button>
				) : (
					<Button variant={btnColor[index]} size='medium' type='submit' key={index}>
						{item.name}
					</Button>
				);
			})}
		</StyledResumeNav>
	);
}

const StyledResumeNav = styled.article`
	position: fixed;
	bottom: 45px;
	left: 50%;
	transform: translateX(-50%);
	background: ${({ theme }) => theme.colors.navy};
	border-radius: 30px;
	box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
	padding: 10px 50px;
	display: flex;
	gap: 20px;
`;
