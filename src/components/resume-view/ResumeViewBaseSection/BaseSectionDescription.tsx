import styled from 'styled-components';

import Markdown from '@common/Markdown';

interface TaskProps {
	description: string | null;
}

export default function BaseSectionDescription({ description }: TaskProps) {
	return (
		<DescriptionStyle>
			{description && <Markdown>{description}</Markdown>}
		</DescriptionStyle>
	);
}

const DescriptionStyle = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
	grid-column: 2 / 3;
	grid-row: 1 / 3;
`;
