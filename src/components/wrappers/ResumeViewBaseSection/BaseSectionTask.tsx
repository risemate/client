import styled from 'styled-components';

import Markdown from '@common/Markdown';

interface TaskProps {
	description: string;
}

export default function BaseSectionTask({ description }: TaskProps) {
	return (
		<DescriptionStyle>
			<Markdown>{description}</Markdown>
		</DescriptionStyle>
	);
}

const DescriptionStyle = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 8px;
	grid-column: 2 / 3;
	grid-row: 1 / 3;
`;
