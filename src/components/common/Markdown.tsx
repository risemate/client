import { MarkdownStyled } from '@styles/MarkdownStyled';
import Md from 'react-markdown';

type Props = {
	children: string;
};

function Markdown({ children }: Props) {
	return (
		<MarkdownStyled className={'md-view'}>
			<Md>{children}</Md>
		</MarkdownStyled>
	);
}

export default Markdown;
