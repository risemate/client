import styled from 'styled-components';

export const MarkdownStyled = styled.div`
	white-space: pre-line;
	ul,
	ol {
		margin-bottom: 0.43999rem;
		padding-top: 0.10001rem;
		list-style: revert;
	}

	li {
		font-feature-settings:
			'kern' 1,
			'onum' 1,
			'liga' 1;
		margin-left: 1rem;
	}

	li > ul,
	li > ol {
		margin-bottom: 0.4rem;
	}

	p {
		padding-top: 0.26001rem;
		font-feature-settings:
			'kern' 1,
			'onum' 1,
			'liga' 1;
		margin-top: 0;
		line-height: 25px;
	}

	p,
	pre {
		margin-bottom: 0.73999rem;
	}

	pre {
		font-size: 1rem;
		padding: 0.66001rem 9.5px 9.5px;
		line-height: 2rem;
		background: linear-gradient(
			to bottom,
			#fff 0,
			#fff 0.75rem,
			#f5f7fa 0.75rem,
			#f5f7fa 2.75rem,
			#fff 2.75rem,
			#fff 4rem
		);
		background-size: 100% 4rem;
		border-color: #d3daea;
	}

	blockquote {
		margin: 0;
	}

	blockquote p {
		font-size: 1rem;
		margin-bottom: 0.33999rem;
		font-style: italic;
		padding: 0.66001rem 1rem 1rem;
		border-left: 3px solid #a0aabf;
	}

	th,
	td {
		padding: 12px;
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		font-feature-settings:
			'dlig' 1,
			'liga' 1,
			'lnum' 1,
			'kern' 1;
		font-style: normal;
		font-weight: 600;
		margin: 0;
		padding: 0.6rem 0;

		font-size: 1.4457143rem;
	}

	a {
		cursor: pointer;
		color: #2aa893;
		text-decoration: none;
	}

	a:hover,
	a:focus {
		border-bottom-color: #2aa893;
		border-bottom: solid 1px;
	}

	img {
		height: auto;
		max-width: 100%;
	}

	dt {
		font-style: italic;
		font-weight: 600;
	}

	b,
	strong {
		font-weight: 700;
	}

	dfn {
		font-style: italic;
	}

	mark {
		background: #ff0;
		color: #000;
	}
`;
